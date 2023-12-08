import { useContext } from "react"
import { AuthContext } from "src/context/AuthContext"
import { AuthModalContext } from "src/context/AuthModalContext"

export const useAuth = () => useContext(AuthContext)
export const useAuthModalContext = () => useContext(AuthModalContext)
