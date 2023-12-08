/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Drawing Login screen

*/

/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: DataBase connection

*/

import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import crypto from "crypto-js"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import { showError } from "src/utils/errorHandler"
import { LoginEmailInput, useLoginEmailMutation } from "src/generated"
import { removeItemToken, setItemToken } from "src/lib/apollo/tokenHandler"
import { config } from "src/config"
import { useRouter } from "next/router"
import { useAuthModalContext } from "src/hooks/useAuth"
import { handleAuthDialog } from "src/utils/handleAuthDialog"
import { useApolloClient } from "@apollo/client"

const { useForm } = Form

interface LoginEmailType {
  email: string | undefined
  password: string | undefined
  remember: boolean
}

const Login = () => {
  const [form] = useForm()
  const router = useRouter()
  const apolloClient = useApolloClient()

  const { setUserData, setSessionList } = useAuthModalContext()

  // Хэрэглэгчийн нэвтрэх үйл явцийг шалгах
  const [onLoginEmail, { loading: loadingEmail }] = useLoginEmailMutation({
    fetchPolicy: "no-cache",
    onError: (error) => {
      showError(error)
    },
  })

  const handleSubmit = async (values: LoginEmailType) => {
    console.log("Checking login")
    if (values?.remember) {
      localStorage.setItem(
        "credentials-email",
        crypto.AES.encrypt(
          JSON.stringify({ ...values, remember: values?.remember }),
          "lib_credentials_secret",
        ).toString(),
      )
    } else localStorage.removeItem("credentials-email")

    setUserData(values as LoginEmailInput)

    const { data } = await onLoginEmail({
      variables: {
        input: {
          email: values?.email || "",
          password: values.password || "",
          deviceId: localStorage.getItem(config.DEVICE_ID),
        },
      },
    })
    if (data?.loginEmail) {
      if (data?.loginEmail?.deviceId)
        localStorage.setItem(config.DEVICE_ID, data.loginEmail?.deviceId)

      removeItemToken(null)
      if (data.loginEmail.accessToken) {
        setItemToken(data?.loginEmail)
        handleAuthDialog({ apolloClient, router })
      } else if (data.loginEmail.devices) {
        setSessionList(data.loginEmail.devices)
      }
    }
  }

  return (
    <Form
      name="form-email"
      form={form}
      initialValues={{
        email: undefined,
        password: undefined,
        remember: false,
      }}
      onFinish={handleSubmit}
      onFinishFailed={(errorInfo) =>
        console.log("onFinishFailed === error", errorInfo)
      }
    >
      <div className="w-100 h-screen bg-[rgb(220,220,220)] flex items-center justify-center">
        <div className="min-w-[500px] flex items-center justify-center flex-col bg-white py-[50px] rounded-[20px]">
          <div className="text-[rgb(0,0,0)] text-[28px] font-[700] pb-10">
            Нэвтрэх
          </div>
          <div className="w-8/12 flex flex-col items-start justify-center gap-[5px]">
            <div className="text-[rgb(0,0,0)] text-[14px] font-[500]">
              И-мэйл <strong className="text-[rgb(200,0,0)]">*</strong>
            </div>
            <Form.Item
              style={{ width: "100%" }}
              name="email"
              rules={[
                {
                  required: true,
                  message: "И-мэйлээ оруулна уу",
                },
                {
                  type: "email",
                  message: "Зөв и-мэйл оруулна уу",
                },
              ]}
              normalize={(val?: string) => val?.replace(/\s/g, "") || ""}
            >
              <Input
                size="large"
                placeholder="И-мэйл хаяг"
                prefix={<MailOutlined className="mr-2" />}
                name="email"
              />
            </Form.Item>
          </div>
          <div className="w-8/12 flex flex-col items-start justify-center gap-[5px]">
            <div className="text-[rgb(0,0,0)] text-[14px] font-[500]">
              Нууц үг <strong className="text-[rgb(200,0,0)]">*</strong>
            </div>
            <Form.Item
              style={{ width: "100%" }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Нууц үгээ оруулна уу",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Нууц үг"
                prefix={<LockOutlined className="mr-2" />}
                type="password"
                name="password"
              />
            </Form.Item>
          </div>
          <div className="w-8/12 flex flex-col items-start justify-center">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="font-[500] text-[12px]">
                Нууц үг санах
              </Checkbox>
            </Form.Item>
          </div>
          <div className="w-8/12 flex flex-col items-start justify-center gap-[20px]">
            <Button
              type="primary"
              style={{ backgroundColor: "black" }}
              size="large"
              block
              htmlType="submit"
              className="w-full"
              loading={loadingEmail}
            >
              Нэвтрэх
            </Button>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "rgb(220,220,220)",
              }}
              block
              className="w-full"
              onClick={() => router.push("/register")}
            >
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Login
