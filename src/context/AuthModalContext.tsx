import { createContext, ReactNode, useReducer } from "react"
import { AuthModalValuesType, UserData } from "./types"
import { UserDevice } from "src/generated"

enum ActionTypeEnum {
  LOGIN = "LOGIN",
  SET_SESSION_LIST = "SET_SESSION_LIST",
  SET_RESET = "SET_RESET",
  SET_RESET_TOKEN = "SET_RESET_TOKEN",
}

type ActionType =
  | {
      type: ActionTypeEnum.LOGIN
      payload: UserData | null
    }
  | {
      type: ActionTypeEnum.SET_SESSION_LIST
      payload: UserDevice[] | null
    }
  | {
      type: ActionTypeEnum.SET_RESET
      payload: boolean | null
    }
  | {
      type: ActionTypeEnum.SET_RESET_TOKEN
      payload: string | null
    }

type StateType = {
  userData: UserData | null
  sessionList: UserDevice[] | null
  reset: boolean | null
  resetToken: string | null
}

const modalReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionTypeEnum.LOGIN:
      return {
        ...state,
        userData: action.payload,
      }
    case ActionTypeEnum.SET_SESSION_LIST:
      return {
        ...state,
        sessionList: action.payload,
      }
    case ActionTypeEnum.SET_RESET:
      return {
        ...state,
        reset: action.payload,
      }
    case ActionTypeEnum.SET_RESET_TOKEN:
      return {
        ...state,
        resetToken: action.payload,
      }
    default:
      return state
  }
}

// ** Defaults
const defaultProvider: AuthModalValuesType = {
  userData: null,
  setUserData: () => null,
  sessionList: null,
  setSessionList: () => null,
  reset: false,
  setReset: () => null,
  resetToken: null,
  setResetToken: () => null,
}

const AuthModalContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}
const initialState: StateType = {
  userData: null,
  sessionList: [],
  reset: false,
  resetToken: null,
}

const AuthModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const values = {
    userData: state.userData,
    setUserData: (value: StateType["userData"]) => {
      dispatch({ type: ActionTypeEnum.LOGIN, payload: value })
    },
    sessionList: state?.sessionList,
    setSessionList: (value: StateType["sessionList"]) => {
      dispatch({ type: ActionTypeEnum.SET_SESSION_LIST, payload: value })
    },
    reset: state?.reset,
    setReset: (value: StateType["reset"]) => {
      dispatch({ type: ActionTypeEnum.SET_RESET, payload: value })
    },
    resetToken: state?.resetToken,
    setResetToken: (value: StateType["resetToken"]) => {
      dispatch({ type: ActionTypeEnum.SET_RESET_TOKEN, payload: value })
    },
  }

  return (
    <AuthModalContext.Provider value={values}>
      {children}
    </AuthModalContext.Provider>
  )
}

export { AuthModalContext, AuthModalProvider }
