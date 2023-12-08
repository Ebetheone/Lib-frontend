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

export const BOOK = gql`
  query BOOK($id: String!) {
    book(id: $id) {
      id
      bookId
      name
      limit
      category
      price
      bestSeller
      userId
      createdAt
      updatedAt
      user {
        id
      }
    }
  }
`

export const BOOKS = gql`
  query BOOKS(
    $input: BookWhereInput
    $orderBy: String
    $take: Int!
    $skip: Int!
  ) {
    books(input: $input, orderBy: $orderBy, take: $take, skip: $skip) {
      count
      data {
        id
        bookId
        name
        limit
        category
        price
        bestSeller
        userId
        createdAt
        updatedAt
        user {
          id
        }
      }
    }
  }
`
