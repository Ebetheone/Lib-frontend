import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  JSON: any
}

export type AccountEliminateInputType = {
  email: Scalars["String"]
  id: Scalars["ID"]
  password: Scalars["String"]
}

export enum AccountProviderTypeEnum {
  APPLE = "APPLE",
  EMAIL = "EMAIL",
  FACEBOOK = "FACEBOOK",
  GOOGLE = "GOOGLE",
  NONE = "NONE",
  PHONE = "PHONE",
  TWITTER = "TWITTER",
}

export type AuthEmailResetPasswordInput = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type AuthEmailVerifyTokenInput = {
  code: Scalars["String"]
  email: Scalars["String"]
  type: TokenVerifyEnum
}

export type AuthEmailVerifyTokenSenderInput = {
  email: Scalars["String"]
}

export type AuthPhoneResetPasswordInput = {
  countryCode: Scalars["String"]
  password: Scalars["String"]
  phone: Scalars["String"]
}

export type AuthPhoneVerifyTokenInput = {
  code: Scalars["String"]
  countryCode: Scalars["String"]
  phone: Scalars["String"]
  type: TokenVerifyEnum
}

export type AuthPhoneVerifyTokenSenderInput = {
  countryCode: Scalars["String"]
  phone: Scalars["String"]
}

export type AuthUserType = {
  __typename?: "AuthUserType"
  accounts?: Maybe<Array<UserAccount>>
  countryCode?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  isPassword?: Maybe<Scalars["Boolean"]>
  password?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  profile?: Maybe<UserProfile>
  role?: Maybe<UserRoleEnum>
}

export type AuthVerifyTokenType = {
  __typename?: "AuthVerifyTokenType"
  accessToken?: Maybe<Scalars["String"]>
  deviceId?: Maybe<Scalars["String"]>
  devices?: Maybe<Array<Maybe<UserDevice>>>
  isEmailConfirmed?: Maybe<Scalars["Boolean"]>
  isPhoneConfirmed?: Maybe<Scalars["Boolean"]>
  refreshToken?: Maybe<Scalars["String"]>
  resetToken?: Maybe<Scalars["String"]>
}

export type Book = {
  __typename?: "Book"
  bestSeller: Scalars["Boolean"]
  bookId?: Maybe<Scalars["String"]>
  category: Scalars["String"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  limit: Scalars["Int"]
  name: Scalars["String"]
  price: Scalars["Int"]
  updatedAt: Scalars["DateTime"]
  user?: Maybe<User>
  userId: Scalars["String"]
}

export type BookInput = {
  bestSeller: Scalars["Boolean"]
  category: Scalars["String"]
  limit: Scalars["Int"]
  name: Scalars["String"]
  price: Scalars["Int"]
}

export type BookWhereInput = {
  bestSeller?: InputMaybe<Scalars["Boolean"]>
  bookId?: InputMaybe<Scalars["String"]>
  category?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["String"]>
  limit?: InputMaybe<Scalars["Int"]>
  name?: InputMaybe<Scalars["String"]>
  price?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
}

export type BooksType = {
  __typename?: "BooksType"
  count?: Maybe<Scalars["Int"]>
  data?: Maybe<Array<Book>>
}

export type ExternalAuthAppleInput = {
  email?: InputMaybe<Scalars["String"]>
  providerId: Scalars["String"]
  providerName: Scalars["String"]
}

export type ExternalAuthInput = {
  accessToken: Scalars["String"]
}

export type ExternalWebAuthInput = {
  accessToken: Scalars["String"]
  email?: InputMaybe<Scalars["String"]>
  firstName?: InputMaybe<Scalars["String"]>
  lastName?: InputMaybe<Scalars["String"]>
  phone?: InputMaybe<Scalars["String"]>
  providerId?: InputMaybe<Scalars["String"]>
  providerName?: InputMaybe<Scalars["String"]>
  userUid?: InputMaybe<Scalars["String"]>
}

export enum FileSizeEnum {
  MEDIUM = "MEDIUM",
  NATIVE = "NATIVE",
  SMALL = "SMALL",
  THUMB = "THUMB",
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  NONE = "NONE",
}

export type LoginEmailInput = {
  deviceId?: InputMaybe<Scalars["String"]>
  email: Scalars["String"]
  password: Scalars["String"]
}

export type LoginPhoneInput = {
  countryCode?: InputMaybe<Scalars["String"]>
  deviceId?: InputMaybe<Scalars["String"]>
  password: Scalars["String"]
  phone: Scalars["String"]
}

export type Mutation = {
  __typename?: "Mutation"
  accountEliminate?: Maybe<AuthVerifyTokenType>
  authEmailForgetPassword?: Maybe<Scalars["Boolean"]>
  authEmailResetPassword?: Maybe<AuthVerifyTokenType>
  authEmailVerifyToken?: Maybe<AuthVerifyTokenType>
  authEmailVerifyTokenSender?: Maybe<Scalars["Boolean"]>
  authMobile?: Maybe<AuthVerifyTokenType>
  authPhoneForgetPassword?: Maybe<Scalars["Boolean"]>
  authPhoneResetPassword?: Maybe<AuthVerifyTokenType>
  authPhoneVerifyToken?: Maybe<AuthVerifyTokenType>
  authPhoneVerifyTokenSender?: Maybe<Scalars["Boolean"]>
  authWeb?: Maybe<AuthVerifyTokenType>
  createBook?: Maybe<Book>
  createUser?: Maybe<User>
  deleteBook?: Maybe<Scalars["Boolean"]>
  deleteUser?: Maybe<Scalars["Boolean"]>
  loginEmail?: Maybe<AuthVerifyTokenType>
  loginPhone?: Maybe<AuthVerifyTokenType>
  logout?: Maybe<Scalars["Boolean"]>
  refreshAccessToken?: Maybe<RefreshTokenType>
  registerEmail?: Maybe<Scalars["Boolean"]>
  registerPhone?: Maybe<Scalars["Boolean"]>
  updateBook?: Maybe<Book>
  updateUser?: Maybe<User>
  userChangePassword?: Maybe<Scalars["Boolean"]>
  userStatusUpdate?: Maybe<Scalars["Boolean"]>
}

export type MutationAccountEliminateArgs = {
  input: AccountEliminateInputType
}

export type MutationAuthEmailForgetPasswordArgs = {
  input: AuthEmailVerifyTokenSenderInput
}

export type MutationAuthEmailResetPasswordArgs = {
  input: AuthEmailResetPasswordInput
}

export type MutationAuthEmailVerifyTokenArgs = {
  input: AuthEmailVerifyTokenInput
}

export type MutationAuthEmailVerifyTokenSenderArgs = {
  input: AuthEmailVerifyTokenSenderInput
}

export type MutationAuthMobileArgs = {
  appleInput?: InputMaybe<ExternalAuthAppleInput>
  input: ExternalAuthInput
  provider: Scalars["String"]
}

export type MutationAuthPhoneForgetPasswordArgs = {
  input: AuthPhoneVerifyTokenSenderInput
}

export type MutationAuthPhoneResetPasswordArgs = {
  input: AuthPhoneResetPasswordInput
}

export type MutationAuthPhoneVerifyTokenArgs = {
  input: AuthPhoneVerifyTokenInput
}

export type MutationAuthPhoneVerifyTokenSenderArgs = {
  input: AuthPhoneVerifyTokenSenderInput
}

export type MutationAuthWebArgs = {
  input: ExternalWebAuthInput
}

export type MutationCreateBookArgs = {
  input: BookInput
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationDeleteBookArgs = {
  bookId: Scalars["String"]
}

export type MutationDeleteUserArgs = {
  userId: Scalars["String"]
}

export type MutationLoginEmailArgs = {
  input: LoginEmailInput
}

export type MutationLoginPhoneArgs = {
  input: LoginPhoneInput
}

export type MutationLogoutArgs = {
  deviceId?: InputMaybe<Scalars["String"]>
}

export type MutationRefreshAccessTokenArgs = {
  input?: InputMaybe<RefreshToAccessTokenInput>
}

export type MutationRegisterEmailArgs = {
  input: RegisterEmailInput
}

export type MutationRegisterPhoneArgs = {
  input: RegisterPhoneInput
}

export type MutationUpdateBookArgs = {
  id: Scalars["String"]
  input: BookInput
}

export type MutationUpdateUserArgs = {
  id: Scalars["String"]
  input: UserInput
}

export type MutationUserChangePasswordArgs = {
  input: UserChangePasswordInput
}

export type MutationUserStatusUpdateArgs = {
  id: Scalars["String"]
  input: UserStatusUpdateInput
}

export type Query = {
  __typename?: "Query"
  book?: Maybe<Book>
  books?: Maybe<BooksType>
  meAuth?: Maybe<AuthUserType>
  user?: Maybe<User>
  users?: Maybe<UsersType>
}

export type QueryBookArgs = {
  input?: InputMaybe<BookWhereInput>
}

export type QueryBooksArgs = {
  input?: InputMaybe<BookWhereInput>
  orderBy?: InputMaybe<Scalars["String"]>
  skip: Scalars["Int"]
  take: Scalars["Int"]
}

export type QueryUserArgs = {
  input?: InputMaybe<UserWhereInput>
}

export type QueryUsersArgs = {
  input?: InputMaybe<UserWhereInput>
  orderBy?: InputMaybe<Scalars["String"]>
  skip: Scalars["Int"]
  take: Scalars["Int"]
}

export type RefreshToAccessTokenInput = {
  refreshToken: Scalars["String"]
}

export type RefreshTokenType = {
  __typename?: "RefreshTokenType"
  accessToken?: Maybe<Scalars["String"]>
  refreshToken?: Maybe<Scalars["String"]>
  wsToken?: Maybe<Scalars["String"]>
}

export type RegisterEmailInput = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type RegisterPhoneInput = {
  countryCode?: InputMaybe<Scalars["String"]>
  password: Scalars["String"]
  phone: Scalars["String"]
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum TokenVerifyEnum {
  AUTH = "AUTH",
  RESET = "RESET",
}

export type User = {
  __typename?: "User"
  accounts?: Maybe<Array<UserAccount>>
  countryCode?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  devices?: Maybe<Array<UserDevice>>
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  phone?: Maybe<Scalars["String"]>
  profile?: Maybe<UserProfile>
  role?: Maybe<UserRoleEnum>
  sessions?: Maybe<Array<UserSession>>
  status?: Maybe<UserStatusEnum>
  updatedAt: Scalars["DateTime"]
  userId?: Maybe<Scalars["String"]>
}

export type UserAccount = {
  __typename?: "UserAccount"
  accessToken?: Maybe<Scalars["String"]>
  accessTokenExpires?: Maybe<Scalars["DateTime"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  providerAccountId?: Maybe<Scalars["String"]>
  providerId?: Maybe<Scalars["String"]>
  providerName?: Maybe<Scalars["String"]>
  providerType?: Maybe<AccountProviderTypeEnum>
  refreshToken?: Maybe<Scalars["String"]>
  signedIn: Scalars["DateTime"]
  updatedAt: Scalars["DateTime"]
  user?: Maybe<User>
  userId?: Maybe<Scalars["String"]>
  userUid?: Maybe<Scalars["String"]>
}

export type UserChangePasswordInput = {
  newPassword: Scalars["String"]
  newPasswordConfirm?: InputMaybe<Scalars["String"]>
  password?: InputMaybe<Scalars["String"]>
}

export type UserDevice = {
  __typename?: "UserDevice"
  deviceName: Scalars["String"]
  deviceOs: Scalars["String"]
  deviceType: Scalars["String"]
  id: Scalars["ID"]
  sessions?: Maybe<Array<UserSession>>
}

export type UserInput = {
  birthday?: InputMaybe<Scalars["DateTime"]>
  countryCode?: InputMaybe<Scalars["String"]>
  email?: InputMaybe<Scalars["String"]>
  firstName?: InputMaybe<Scalars["String"]>
  gender?: InputMaybe<Gender>
  lastName?: InputMaybe<Scalars["String"]>
  password?: InputMaybe<Scalars["String"]>
  phone?: InputMaybe<Scalars["String"]>
}

export type UserProfile = {
  __typename?: "UserProfile"
  birthday?: Maybe<Scalars["DateTime"]>
  firstName?: Maybe<Scalars["String"]>
  gender?: Maybe<Gender>
  id: Scalars["ID"]
  lastName?: Maybe<Scalars["String"]>
  user?: Maybe<User>
  userId: Scalars["String"]
}

export enum UserRoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type UserSession = {
  __typename?: "UserSession"
  createdAt: Scalars["DateTime"]
  device?: Maybe<UserDevice>
  expires: Scalars["String"]
  fcmToken?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  isActive: Scalars["Boolean"]
  updatedAt: Scalars["DateTime"]
  userId: Scalars["String"]
}

export enum UserStatusEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export type UserStatusUpdateInput = {
  status?: InputMaybe<UserStatusEnum>
}

export type UserWhereInput = {
  email?: InputMaybe<Scalars["String"]>
  firstName?: InputMaybe<Scalars["String"]>
  id?: InputMaybe<Scalars["String"]>
  lastName?: InputMaybe<Scalars["String"]>
  phone?: InputMaybe<Scalars["String"]>
  search?: InputMaybe<Scalars["String"]>
  status?: InputMaybe<Scalars["String"]>
}

export type UsersType = {
  __typename?: "UsersType"
  count?: Maybe<Scalars["Int"]>
  data?: Maybe<Array<User>>
}

export type MeAuthQueryVariables = Exact<{ [key: string]: never }>

export type MeAuthQuery = {
  __typename?: "Query"
  meAuth?: {
    __typename?: "AuthUserType"
    id: string
    role?: UserRoleEnum | null
    email?: string | null
    countryCode?: string | null
    phone?: string | null
    profile?: {
      __typename?: "UserProfile"
      id: string
      firstName?: string | null
      lastName?: string | null
    } | null
  } | null
}

export type LogoutMutationVariables = Exact<{
  deviceId?: InputMaybe<Scalars["String"]>
}>

export type LogoutMutation = {
  __typename?: "Mutation"
  logout?: boolean | null
}

export type RefreshAccessTokenMutationVariables = Exact<{
  input: RefreshToAccessTokenInput
}>

export type RefreshAccessTokenMutation = {
  __typename?: "Mutation"
  refreshAccessToken?: {
    __typename?: "RefreshTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    wsToken?: string | null
  } | null
}

export type AuthWebMutationVariables = Exact<{
  input: ExternalWebAuthInput
}>

export type AuthWebMutation = {
  __typename?: "Mutation"
  authWeb?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
  } | null
}

export type LoginEmailMutationVariables = Exact<{
  input: LoginEmailInput
}>

export type LoginEmailMutation = {
  __typename?: "Mutation"
  loginEmail?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    isEmailConfirmed?: boolean | null
    isPhoneConfirmed?: boolean | null
    deviceId?: string | null
    devices?: Array<{
      __typename?: "UserDevice"
      id: string
      deviceName: string
      deviceType: string
      deviceOs: string
    } | null> | null
  } | null
}

export type LoginPhoneMutationVariables = Exact<{
  input: LoginPhoneInput
}>

export type LoginPhoneMutation = {
  __typename?: "Mutation"
  loginPhone?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    isEmailConfirmed?: boolean | null
    isPhoneConfirmed?: boolean | null
    deviceId?: string | null
    devices?: Array<{
      __typename?: "UserDevice"
      id: string
      deviceName: string
      deviceType: string
      deviceOs: string
    } | null> | null
  } | null
}

export type RegisterEmailMutationVariables = Exact<{
  input: RegisterEmailInput
}>

export type RegisterEmailMutation = {
  __typename?: "Mutation"
  registerEmail?: boolean | null
}

export type RegisterPhoneMutationVariables = Exact<{
  input: RegisterPhoneInput
}>

export type RegisterPhoneMutation = {
  __typename?: "Mutation"
  registerPhone?: boolean | null
}

export type AuthEmailForgetPasswordMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput
}>

export type AuthEmailForgetPasswordMutation = {
  __typename?: "Mutation"
  authEmailForgetPassword?: boolean | null
}

export type AuthEmailResetPasswordMutationVariables = Exact<{
  input: AuthEmailResetPasswordInput
}>

export type AuthEmailResetPasswordMutation = {
  __typename?: "Mutation"
  authEmailResetPassword?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    deviceId?: string | null
    devices?: Array<{
      __typename?: "UserDevice"
      id: string
      deviceName: string
      deviceType: string
      deviceOs: string
    } | null> | null
  } | null
}

export type AuthEmailVerifyTokenMutationVariables = Exact<{
  input: AuthEmailVerifyTokenInput
}>

export type AuthEmailVerifyTokenMutation = {
  __typename?: "Mutation"
  authEmailVerifyToken?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    resetToken?: string | null
    deviceId?: string | null
    devices?: Array<{
      __typename?: "UserDevice"
      id: string
      deviceName: string
      deviceType: string
      deviceOs: string
    } | null> | null
  } | null
}

export type AuthEmailVerifyTokenSenderMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput
}>

export type AuthEmailVerifyTokenSenderMutation = {
  __typename?: "Mutation"
  authEmailVerifyTokenSender?: boolean | null
}

export type AccountEliminateMutationVariables = Exact<{
  input: AccountEliminateInputType
}>

export type AccountEliminateMutation = {
  __typename?: "Mutation"
  accountEliminate?: {
    __typename?: "AuthVerifyTokenType"
    accessToken?: string | null
    refreshToken?: string | null
    deviceId?: string | null
  } | null
}

export type UserQueryVariables = Exact<{
  input: UserWhereInput
}>

export type UserQuery = {
  __typename?: "Query"
  user?: {
    __typename?: "User"
    id: string
    userId?: string | null
    role?: UserRoleEnum | null
    email?: string | null
    profile?: {
      __typename?: "UserProfile"
      id: string
      firstName?: string | null
      lastName?: string | null
    } | null
  } | null
}

export const MeAuthDocument = gql`
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

/**
 * __useMeAuthQuery__
 *
 * To run a query within a React component, call `useMeAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAuthQuery(
  baseOptions?: Apollo.QueryHookOptions<MeAuthQuery, MeAuthQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeAuthQuery, MeAuthQueryVariables>(
    MeAuthDocument,
    options,
  )
}
export function useMeAuthLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeAuthQuery, MeAuthQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeAuthQuery, MeAuthQueryVariables>(
    MeAuthDocument,
    options,
  )
}
export type MeAuthQueryHookResult = ReturnType<typeof useMeAuthQuery>
export type MeAuthLazyQueryHookResult = ReturnType<typeof useMeAuthLazyQuery>
export type MeAuthQueryResult = Apollo.QueryResult<
  MeAuthQuery,
  MeAuthQueryVariables
>
export const LogoutDocument = gql`
  mutation logout($deviceId: String) {
    logout(deviceId: $deviceId)
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options,
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const RefreshAccessTokenDocument = gql`
  mutation refreshAccessToken($input: RefreshToAccessTokenInput!) {
    refreshAccessToken(input: $input) {
      accessToken
      refreshToken
      wsToken
    }
  }
`
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<
  RefreshAccessTokenMutation,
  RefreshAccessTokenMutationVariables
>

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshAccessTokenMutation,
    RefreshAccessTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RefreshAccessTokenMutation,
    RefreshAccessTokenMutationVariables
  >(RefreshAccessTokenDocument, options)
}
export type RefreshAccessTokenMutationHookResult = ReturnType<
  typeof useRefreshAccessTokenMutation
>
export type RefreshAccessTokenMutationResult =
  Apollo.MutationResult<RefreshAccessTokenMutation>
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshAccessTokenMutation,
  RefreshAccessTokenMutationVariables
>
export const AuthWebDocument = gql`
  mutation authWeb($input: ExternalWebAuthInput!) {
    authWeb(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthWebMutationFn = Apollo.MutationFunction<
  AuthWebMutation,
  AuthWebMutationVariables
>

/**
 * __useAuthWebMutation__
 *
 * To run a mutation, you first call `useAuthWebMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthWebMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authWebMutation, { data, loading, error }] = useAuthWebMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthWebMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthWebMutation,
    AuthWebMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AuthWebMutation, AuthWebMutationVariables>(
    AuthWebDocument,
    options,
  )
}
export type AuthWebMutationHookResult = ReturnType<typeof useAuthWebMutation>
export type AuthWebMutationResult = Apollo.MutationResult<AuthWebMutation>
export type AuthWebMutationOptions = Apollo.BaseMutationOptions<
  AuthWebMutation,
  AuthWebMutationVariables
>
export const LoginEmailDocument = gql`
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
export type LoginEmailMutationFn = Apollo.MutationFunction<
  LoginEmailMutation,
  LoginEmailMutationVariables
>

/**
 * __useLoginEmailMutation__
 *
 * To run a mutation, you first call `useLoginEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginEmailMutation, { data, loading, error }] = useLoginEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginEmailMutation,
    LoginEmailMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginEmailMutation, LoginEmailMutationVariables>(
    LoginEmailDocument,
    options,
  )
}
export type LoginEmailMutationHookResult = ReturnType<
  typeof useLoginEmailMutation
>
export type LoginEmailMutationResult = Apollo.MutationResult<LoginEmailMutation>
export type LoginEmailMutationOptions = Apollo.BaseMutationOptions<
  LoginEmailMutation,
  LoginEmailMutationVariables
>
export const LoginPhoneDocument = gql`
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
export type LoginPhoneMutationFn = Apollo.MutationFunction<
  LoginPhoneMutation,
  LoginPhoneMutationVariables
>

/**
 * __useLoginPhoneMutation__
 *
 * To run a mutation, you first call `useLoginPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginPhoneMutation, { data, loading, error }] = useLoginPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginPhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginPhoneMutation,
    LoginPhoneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginPhoneMutation, LoginPhoneMutationVariables>(
    LoginPhoneDocument,
    options,
  )
}
export type LoginPhoneMutationHookResult = ReturnType<
  typeof useLoginPhoneMutation
>
export type LoginPhoneMutationResult = Apollo.MutationResult<LoginPhoneMutation>
export type LoginPhoneMutationOptions = Apollo.BaseMutationOptions<
  LoginPhoneMutation,
  LoginPhoneMutationVariables
>
export const RegisterEmailDocument = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input)
  }
`
export type RegisterEmailMutationFn = Apollo.MutationFunction<
  RegisterEmailMutation,
  RegisterEmailMutationVariables
>

/**
 * __useRegisterEmailMutation__
 *
 * To run a mutation, you first call `useRegisterEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerEmailMutation, { data, loading, error }] = useRegisterEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterEmailMutation,
    RegisterEmailMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterEmailMutation,
    RegisterEmailMutationVariables
  >(RegisterEmailDocument, options)
}
export type RegisterEmailMutationHookResult = ReturnType<
  typeof useRegisterEmailMutation
>
export type RegisterEmailMutationResult =
  Apollo.MutationResult<RegisterEmailMutation>
export type RegisterEmailMutationOptions = Apollo.BaseMutationOptions<
  RegisterEmailMutation,
  RegisterEmailMutationVariables
>
export const RegisterPhoneDocument = gql`
  mutation registerPhone($input: RegisterPhoneInput!) {
    registerPhone(input: $input)
  }
`
export type RegisterPhoneMutationFn = Apollo.MutationFunction<
  RegisterPhoneMutation,
  RegisterPhoneMutationVariables
>

/**
 * __useRegisterPhoneMutation__
 *
 * To run a mutation, you first call `useRegisterPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerPhoneMutation, { data, loading, error }] = useRegisterPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterPhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterPhoneMutation,
    RegisterPhoneMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterPhoneMutation,
    RegisterPhoneMutationVariables
  >(RegisterPhoneDocument, options)
}
export type RegisterPhoneMutationHookResult = ReturnType<
  typeof useRegisterPhoneMutation
>
export type RegisterPhoneMutationResult =
  Apollo.MutationResult<RegisterPhoneMutation>
export type RegisterPhoneMutationOptions = Apollo.BaseMutationOptions<
  RegisterPhoneMutation,
  RegisterPhoneMutationVariables
>
export const AuthEmailForgetPasswordDocument = gql`
  mutation authEmailForgetPassword($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailForgetPassword(input: $input)
  }
`
export type AuthEmailForgetPasswordMutationFn = Apollo.MutationFunction<
  AuthEmailForgetPasswordMutation,
  AuthEmailForgetPasswordMutationVariables
>

/**
 * __useAuthEmailForgetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailForgetPasswordMutation, { data, loading, error }] = useAuthEmailForgetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthEmailForgetPasswordMutation,
    AuthEmailForgetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AuthEmailForgetPasswordMutation,
    AuthEmailForgetPasswordMutationVariables
  >(AuthEmailForgetPasswordDocument, options)
}
export type AuthEmailForgetPasswordMutationHookResult = ReturnType<
  typeof useAuthEmailForgetPasswordMutation
>
export type AuthEmailForgetPasswordMutationResult =
  Apollo.MutationResult<AuthEmailForgetPasswordMutation>
export type AuthEmailForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailForgetPasswordMutation,
  AuthEmailForgetPasswordMutationVariables
>
export const AuthEmailResetPasswordDocument = gql`
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
export type AuthEmailResetPasswordMutationFn = Apollo.MutationFunction<
  AuthEmailResetPasswordMutation,
  AuthEmailResetPasswordMutationVariables
>

/**
 * __useAuthEmailResetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailResetPasswordMutation, { data, loading, error }] = useAuthEmailResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthEmailResetPasswordMutation,
    AuthEmailResetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AuthEmailResetPasswordMutation,
    AuthEmailResetPasswordMutationVariables
  >(AuthEmailResetPasswordDocument, options)
}
export type AuthEmailResetPasswordMutationHookResult = ReturnType<
  typeof useAuthEmailResetPasswordMutation
>
export type AuthEmailResetPasswordMutationResult =
  Apollo.MutationResult<AuthEmailResetPasswordMutation>
export type AuthEmailResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailResetPasswordMutation,
  AuthEmailResetPasswordMutationVariables
>
export const AuthEmailVerifyTokenDocument = gql`
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
export type AuthEmailVerifyTokenMutationFn = Apollo.MutationFunction<
  AuthEmailVerifyTokenMutation,
  AuthEmailVerifyTokenMutationVariables
>

/**
 * __useAuthEmailVerifyTokenMutation__
 *
 * To run a mutation, you first call `useAuthEmailVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailVerifyTokenMutation, { data, loading, error }] = useAuthEmailVerifyTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailVerifyTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthEmailVerifyTokenMutation,
    AuthEmailVerifyTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AuthEmailVerifyTokenMutation,
    AuthEmailVerifyTokenMutationVariables
  >(AuthEmailVerifyTokenDocument, options)
}
export type AuthEmailVerifyTokenMutationHookResult = ReturnType<
  typeof useAuthEmailVerifyTokenMutation
>
export type AuthEmailVerifyTokenMutationResult =
  Apollo.MutationResult<AuthEmailVerifyTokenMutation>
export type AuthEmailVerifyTokenMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailVerifyTokenMutation,
  AuthEmailVerifyTokenMutationVariables
>
export const AuthEmailVerifyTokenSenderDocument = gql`
  mutation authEmailVerifyTokenSender(
    $input: AuthEmailVerifyTokenSenderInput!
  ) {
    authEmailVerifyTokenSender(input: $input)
  }
`
export type AuthEmailVerifyTokenSenderMutationFn = Apollo.MutationFunction<
  AuthEmailVerifyTokenSenderMutation,
  AuthEmailVerifyTokenSenderMutationVariables
>

/**
 * __useAuthEmailVerifyTokenSenderMutation__
 *
 * To run a mutation, you first call `useAuthEmailVerifyTokenSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailVerifyTokenSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailVerifyTokenSenderMutation, { data, loading, error }] = useAuthEmailVerifyTokenSenderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailVerifyTokenSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthEmailVerifyTokenSenderMutation,
    AuthEmailVerifyTokenSenderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AuthEmailVerifyTokenSenderMutation,
    AuthEmailVerifyTokenSenderMutationVariables
  >(AuthEmailVerifyTokenSenderDocument, options)
}
export type AuthEmailVerifyTokenSenderMutationHookResult = ReturnType<
  typeof useAuthEmailVerifyTokenSenderMutation
>
export type AuthEmailVerifyTokenSenderMutationResult =
  Apollo.MutationResult<AuthEmailVerifyTokenSenderMutation>
export type AuthEmailVerifyTokenSenderMutationOptions =
  Apollo.BaseMutationOptions<
    AuthEmailVerifyTokenSenderMutation,
    AuthEmailVerifyTokenSenderMutationVariables
  >
export const AccountEliminateDocument = gql`
  mutation AccountEliminate($input: AccountEliminateInputType!) {
    accountEliminate(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`
export type AccountEliminateMutationFn = Apollo.MutationFunction<
  AccountEliminateMutation,
  AccountEliminateMutationVariables
>

/**
 * __useAccountEliminateMutation__
 *
 * To run a mutation, you first call `useAccountEliminateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountEliminateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountEliminateMutation, { data, loading, error }] = useAccountEliminateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountEliminateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AccountEliminateMutation,
    AccountEliminateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AccountEliminateMutation,
    AccountEliminateMutationVariables
  >(AccountEliminateDocument, options)
}
export type AccountEliminateMutationHookResult = ReturnType<
  typeof useAccountEliminateMutation
>
export type AccountEliminateMutationResult =
  Apollo.MutationResult<AccountEliminateMutation>
export type AccountEliminateMutationOptions = Apollo.BaseMutationOptions<
  AccountEliminateMutation,
  AccountEliminateMutationVariables
>
export const UserDocument = gql`
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

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  )
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
