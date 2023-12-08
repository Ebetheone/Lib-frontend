import React from "react"
import { Button, Checkbox } from "antd"

const Login = () => {
  return (
    <div className="w-100 flex items-center justify-center">
      <div className="mt-10">Нэвтрэх</div>
      <div>И-мэйл</div>
      <div>
        <input />
      </div>
      <div>Нууц үг</div>
      <div>
        <input />
      </div>
      <Checkbox>Нууц үг санах</Checkbox>
      <Button name="Нэвтрэх" color="black" />
      <Button name="Бүртгүүлэх" color="black" />
    </div>
  )
}

export default Login
