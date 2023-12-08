import { gql } from "@apollo/client"

export const AUTH_WEB = gql`
  mutation authWeb($input: ExternalWebAuthInput!) {
    authWeb(input: $input) {
      accessToken
      refreshToken
    }
  }
`

export const LOGIN_EMAIL = gql`
  mutation loginEmail($input: LoginEmailInput!) {
    loginEmail(input: $input) {
      accessToken
      refreshToken
      isEmailConfirmed
      isPhoneConfirmed
      deviceId
      devices {
        id
        deviceName
        deviceType
        deviceOs
      }
    }
  }
`
export const LOGIN_PHONE = gql`
  mutation loginPhone($input: LoginPhoneInput!) {
    loginPhone(input: $input) {
      accessToken
      refreshToken
      isEmailConfirmed
      isPhoneConfirmed
      deviceId
      devices {
        id
        deviceName
        deviceType
        deviceOs
      }
    }
  }
`

export const REGISTER_EMAIL = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input)
  }
`
export const REGISTER_PHONE = gql`
  mutation registerPhone($input: RegisterPhoneInput!) {
    registerPhone(input: $input)
  }
`
export const EMAIL_FORGET_PASSWORD = gql`
  mutation authEmailForgetPassword($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailForgetPassword(input: $input)
  }
`
export const EMAIL_RESET_PASSWORD = gql`
  mutation authEmailResetPassword($input: AuthEmailResetPasswordInput!) {
    authEmailResetPassword(input: $input) {
      accessToken
      refreshToken
      deviceId
      devices {
        id
        deviceName
        deviceType
        deviceOs
      }
    }
  }
`

export const AUTH_EMAIL_VERIFY_TOKEN = gql`
  mutation AuthEmailVerifyToken($input: AuthEmailVerifyTokenInput!) {
    authEmailVerifyToken(input: $input) {
      accessToken
      refreshToken
      resetToken
      deviceId
      devices {
        id
        deviceName
        deviceType
        deviceOs
      }
    }
  }
`
export const EMAIL_VERIFY_TOKEN_SENDER = gql`
  mutation authEmailVerifyTokenSender(
    $input: AuthEmailVerifyTokenSenderInput!
  ) {
    authEmailVerifyTokenSender(input: $input)
  }
`

export const ACCOUNT_ELIMINATE = gql`
  mutation AccountEliminate($input: AccountEliminateInputType!) {
    accountEliminate(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`

export const CREATE_BOOK = gql`
  mutation CREATE_BOOK($input: BookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation UPDATE_BOOK($id: String!, $input: BookInput!) {
    updateBook(id: $id, input: $input) {
      id
    }
  }
`

export const DELETE_BOOK = gql`
  mutation DELETE_BOOK($bookId: String!) {
    deleteBook(bookId: $bookId)
  }
`
