import { gql } from "@apollo/client"

export const REFRESH_ACCESS_TOKEN = gql`
  mutation refreshAccessToken($input: RefreshToAccessTokenInput!) {
    refreshAccessToken(input: $input) {
      accessToken
      refreshToken
      wsToken
    }
  }
`
