import { gql } from "@apollo/client"

export const ME_AUTH = gql`
  query meAuth {
    meAuth {
      id
      role
      email
      countryCode
      phone
      profile {
        id
        firstName
        lastName
      }
    }
  }
`

export const LOGOUT = gql`
  mutation logout($deviceId: String) {
    logout(deviceId: $deviceId)
  }
`
