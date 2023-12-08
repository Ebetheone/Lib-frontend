import { useMemo } from "react"
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  from,
  fromPromise,
  split,
} from "@apollo/client"

import { onError } from "@apollo/client/link/error"

import merge from "deepmerge"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { config } from "src/config"
import { setContext } from "@apollo/client/link/context"
import { localCache } from "./localCache"
import { getNewAccessToken, removeItemToken } from "./tokenHandler"

const httpLink = new HttpLink({
  uri: `${config.BACKEND_URL}/graphql`,
  credentials: "include",
})

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `${config.BACKEND_WS_URL}/graphql`,
          connectionParams: async () => {
            // Add AccessToken header
            const accessToken = localStorage.getItem(config.ACCESS_TOKEN_KEY)
            return { authentication: accessToken }
          },
        }),
      )
    : null

const splitLink =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)

          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          )
        },
        wsLink,
        httpLink,
      )
    : httpLink

const authLink = setContext((_, { headers }) => {
  let newHeaders = headers

  const accessToken = localStorage.getItem(config.ACCESS_TOKEN_KEY)
  if (accessToken) {
    newHeaders = { ...newHeaders, [config.ACCESS_TOKEN_KEY]: accessToken }
  }
  const refreshToken = localStorage.getItem(config.REFRESH_TOKEN_KEY)
  if (refreshToken) {
    newHeaders = { ...newHeaders, [config.REFRESH_TOKEN_KEY]: refreshToken }
  }
  newHeaders = { ...newHeaders, [config.DEVICE_TYPE]: "web" }
  return {
    headers: newHeaders,
  }
})

let apolloClient: ApolloClient<NormalizedCacheObject>

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError, operation, response, forward } = errors

  console.log(
    `Error occured on operation: ${operation.operationName} with response of ${response}`,
  )
  if (graphQLErrors) {
    // graphQLErrorLink({ errors: errors, client: apolloClient })
    // graphQLErrors.forEach(({ message, locations, path }) =>
    //   console.log(
    //     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //   ),
    // )
    for (const error of graphQLErrors) {
      console.log("[GraphQL error]: error", error)
      if (!error.extensions.code) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )
      }
      switch (error.extensions.code) {
        case "ACCESS_TOKEN_EXPIRED": {
          if (operation.operationName === "refreshAccessToken") return
          const refreshTokenPromise = new Promise((resolve, reject) => {
            getNewAccessToken(apolloClient)
              .then((accessToken) => resolve(accessToken))
              .catch((e) => {
                // logout()
                console.log("getNewAccessToken catch error", e)
                reject(e)
              })
          })
          return fromPromise(refreshTokenPromise)
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              console.log("fromPromise === accessToken", accessToken)
              const oldHeaders = operation.getContext().headers
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  [config.ACCESS_TOKEN_KEY]: `${accessToken}`,
                },
              })
              return forward(operation)
            })
        }
        case "ACCESS_TOKEN_INVALID": {
          if (operation.operationName === "refreshAccessToken") return
          const refreshTokenPromise = new Promise((resolve, reject) => {
            getNewAccessToken(apolloClient)
              .then((accessToken) => resolve(accessToken))
              .catch((e) => {
                // logout()
                console.log("getNewAccessToken catch error", e)
                reject(e)
              })
          })
          return fromPromise(refreshTokenPromise)
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              console.log("fromPromise === accessToken", accessToken)
              const oldHeaders = operation.getContext().headers
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  [config.ACCESS_TOKEN_KEY]: `${accessToken}`,
                },
              })
              return forward(operation)
            })
        }
        case "ACCESS_TOKEN_MISSING": {
          removeItemToken(null)
          return forward(operation)
        }
        case "REFRESH_TOKEN_EXPIRED": {
          removeItemToken(null)
          return forward(operation)
        }
        case "REFRESH_TOKEN_INVALID": {
          removeItemToken(null)
          return forward(operation)
        }
        case "REFRESH_TOKEN_MISSING":
          removeItemToken(null)
          return forward(operation)
        default:
          graphQLErrors.map(({ message, locations, path }) => {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            )
          })
      }
    }
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
  return forward(operation)
})

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([authLink, errorLink, splitLink]),
  cache: localCache,
})

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? client

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
