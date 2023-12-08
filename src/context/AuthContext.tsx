// ** React Imports
import { createContext, ReactNode } from "react"

// ** Types
import { AuthValuesType, UserContextType } from "./types"

import { LOGOUT } from "src/hooks/utils/queries"
import { useApolloClient } from "@apollo/client"
import { UserRoleEnum, useMeAuthQuery } from "src/generated"
import { config } from "src/config"
import { useRouter } from "next/router"
import { removeItemToken } from "src/lib/apollo/tokenHandler"

// ** Defaults
const defaultProvider: AuthValuesType = {
  loading: false,
  user: null,
  setUser: () => null,
  logout: () => Promise.resolve(),
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
  user: UserContextType | null
  setUser: (value: UserContextType) => void
}

const AuthProvider = ({ children, user, setUser }: Props) => {
  const apolloClient = useApolloClient()
  const router = useRouter()
  // ** Hooks
  const { loading } = useMeAuthQuery({
    onCompleted: (data) => {
      console.log("AuthProvider DATA === ", data)

      if (data?.meAuth?.id) {
        const user = data?.meAuth
        const isAdmin = user.role === UserRoleEnum.ADMIN
        const isUser = user.role === UserRoleEnum.USER

        const _roles = { isAdmin, isUser }

        const _user: UserContextType = {
          ...user,
          roles: _roles,
          permissions: ["Web"],
        }
        setUser(_user)
      }
    },
    onError: (error) => {
      console.log(error)
      alert(error)
    },
  })
  const handleLogout = async () => {
    const deviceId = localStorage.getItem(config.DEVICE_ID)

    await apolloClient.mutate({
      mutation: LOGOUT,
      variables: { deviceId: deviceId },
    })
    removeItemToken(null)
    setUser(null)
    // if (typeof window !== 'undefined') {
    //   window.location.reload()
    // }
    await apolloClient.cache.reset()
    router.replace("/")
  }

  const values = {
    loading,
    user,
    setUser,
    logout: handleLogout,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
