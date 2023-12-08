import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import "../../styles/globals.css"
import { useApollo } from "src/lib/apollo/client"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
