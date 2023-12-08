import { gql } from "@apollo/client"

export const USER = gql`
  query User($input: UserWhereInput!) {
    user(input: $input) {
      id
      userId
      role
      email
      profile {
        id
        firstName
        lastName
      }
    }
  }
`
