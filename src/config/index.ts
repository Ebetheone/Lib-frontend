const tokenKeys = {
  ACCESS_TOKEN_KEY: "access-token",
  REFRESH_TOKEN_KEY: "refresh-token",
  RESET_TOKEN_KEY: "reset-token",
  DEVICE_ID: "device-id",
  DEVICE_TYPE: "device-type",
  WS_TOKEN_KEY: "ws-token",
}

export const config = {
  ...tokenKeys,
  NODE_ENV: process.env.ENV || process.env.NODE_ENV,
  BACKEND_URL:
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000/graphql",
  // BACKEND_WS_URL:
  //   process.env.NEXT_PUBLIC_BACKEND_WS_URL ||
  //   "ws://localhost:4000/subscriptions",
}

export enum AuthModalType {
  Login = "LOGIN",
  Register = "REGISTER",
  Forget = "FORGET",
  NewPassword = "NEW_PASSWORD",
  ConfirmCode = "CONFIRM_CODE",
  ChangePassword = "CHANGE_PASSWORD",
  SessionManage = "SESSION_MANAGE",
  TokenVerify = "TOKEN_VERIFY",
}
