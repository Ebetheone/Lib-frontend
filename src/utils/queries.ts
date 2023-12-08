import { gql } from "@apollo/client"

export const USER = gql`
  query User($input: UserWhereInput) {
    user(input: $input) {
      id
      userId
      role
      email
      phone
      countryCode
      profile {
        gender
        birthday
        firstName
        lastName
      }
      address {
        city
        district
        address1
        address2
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
      publisher
      image
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
        image
        bestSeller
        publisher
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

export const USERS = gql`
  query USERS(
    $input: UserWhereInput
    $orderBy: String
    $take: Int!
    $skip: Int!
  ) {
    users(input: $input, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      count
      data {
        id
        userId
        role
        email
        phone
        countryCode
        profile {
          gender
          birthday
          firstName
          lastName
        }
        address {
          city
          district
          address1
          address2
        }
      }
    }
  }
`
