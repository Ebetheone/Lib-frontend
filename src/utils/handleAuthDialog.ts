import { ApolloClient } from "@apollo/client"
import { NextRouter } from "next/router"

type Props = {
  apolloClient: ApolloClient<object>
  router: NextRouter
}

export const handleAuthDialog = async (props: Props) => {
  const { apolloClient, router } = props
  console.log("redirect page")
  await apolloClient.cache.reset()
  const returnUrl = router.query.returnUrl
  const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/home"
  router.replace(redirectURL as string).then(() => window.location.reload)
}
