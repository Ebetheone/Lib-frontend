import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import "../../styles/globals.css"
import { useApollo } from "src/lib/apollo/client"
import { AuthProvider } from "src/context/AuthContext"
import { useState } from "react"
import { UserContextType } from "src/context/types"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialState)
  const [user, setUser] = useState<UserContextType | null>(null)
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider user={user} setUser={setUser}>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
