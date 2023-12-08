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

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
