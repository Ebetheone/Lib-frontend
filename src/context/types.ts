import { InputMaybe, MeAuthQuery, Scalars, UserDevice } from "src/generated"

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RoleType {
  isAdministrator?: boolean
  isAdmin?: boolean
  isUser?: boolean
  isHost?: boolean
}

export type AuthValuesType = {
  loading: boolean

  // setLoading: (value: boolean) => void

  user?: UserContextType
  setUser: (value: UserContextType) => void
  roles?: RoleType
  permissions?: string[]

  logout: () => void
}
export type UserData = {
  email?: Scalars["String"]
  countryCode?: InputMaybe<Scalars["String"]>
  phone?: Scalars["String"]
  deviceId?: InputMaybe<Scalars["String"]>
  password: Scalars["String"]
}

export type AuthModalValuesType = {
  userData: UserData | null
  setUserData: (value: UserData) => void
  sessionList: UserDevice[] | null
  setSessionList: (value: any) => void
  reset: boolean | null
  setReset: (value: boolean) => void
  resetToken: string | null
  setResetToken: (value: string) => void
}

export type UserContextType =
  | (MeAuthQuery["meAuth"] & {
      roles: {
        isAdmin: boolean
        isUser: boolean
      }
    } & { permissions: string[] })
  | null
