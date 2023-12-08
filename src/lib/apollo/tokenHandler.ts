import { RefreshAccessTokenMutation } from "./../../generated/index"
import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client"
import { config } from "src/config"
import { AuthVerifyTokenType } from "src/generated"
import { REFRESH_ACCESS_TOKEN } from "./mutations"

export const getNewAccessToken = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
) => {
  try {
    const refreshToken = localStorage.getItem(config.REFRESH_TOKEN_KEY)
    if (refreshToken) {
      const { data } = await apolloClient.mutate<{
        refreshAccessToken: RefreshAccessTokenMutation["refreshAccessToken"]
      }>({
        mutation: REFRESH_ACCESS_TOKEN,
        variables: {
          input: {
            refreshToken: refreshToken,
          },
        },
      })
      const _accessToken = data?.refreshAccessToken?.accessToken || ""
      if (_accessToken) {
        localStorage.setItem(config.ACCESS_TOKEN_KEY, _accessToken)
      }
      const _refreshToken = data?.refreshAccessToken?.refreshToken || ""
      if (_refreshToken) {
        localStorage.setItem(config.REFRESH_TOKEN_KEY, _refreshToken)
      }

      const _wsToken = data?.refreshAccessToken?.wsToken || ""
      if (_wsToken) {
        localStorage.setItem(config.REFRESH_TOKEN_KEY, _wsToken)
      }

      return data?.refreshAccessToken?.accessToken
    } else return null
  } catch (error) {
    console.log("getNewAccessToken === error", error)
    removeItemToken(null)
    return null
  }
}

export const setItemToken = (token: AuthVerifyTokenType | undefined) => {
  if (token?.accessToken)
    localStorage.setItem(config.ACCESS_TOKEN_KEY, token?.accessToken)
  if (token?.refreshToken)
    localStorage.setItem(config.REFRESH_TOKEN_KEY, token.refreshToken)
}

export const removeItemToken = (token: AuthVerifyTokenType | null) => {
  if (token?.accessToken) localStorage.removeItem(config.ACCESS_TOKEN_KEY)
  else if (token?.refreshToken)
    localStorage.removeItem(config.REFRESH_TOKEN_KEY)
  else {
    localStorage.removeItem(config.ACCESS_TOKEN_KEY)
    localStorage.removeItem(config.REFRESH_TOKEN_KEY)
  }
}
