/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Register screen drawing with logical

*/

/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Add user to dataBase

*/

import React from "react"
import { Button, Form, Input } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import { RegisterEmailInput, useRegisterEmailMutation } from "src/generated"
import { useRouter } from "next/router"
import { useAuthModalContext } from "src/hooks/useAuth"

const { useForm } = Form

const Register = () => {
  const [form] = useForm()
  const router = useRouter()

  const { setUserData } = useAuthModalContext()

  const [onRegisterEmail] = useRegisterEmailMutation({
    fetchPolicy: "no-cache",
    onError: (error: unknown) => {
      alert(error)
    },
  })

  const handleSubmit = async (values: RegisterEmailInput) => {
    setUserData(values as RegisterEmailInput)

    const { data } = await onRegisterEmail({
      variables: {
        input: {
          email: values?.email,
          password: values?.password,
        },
      },
    })
    if (data?.registerEmail) {
      router.push("/home")
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
            Бүртгүүлэх
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
          <div className="w-8/12 flex flex-col items-start justify-center gap-[5px]">
            <div className="text-[rgb(0,0,0)] text-[14px] font-[500]">
              Нууц үг давтах <strong className="text-[rgb(200,0,0)]">*</strong>
            </div>
            <Form.Item
              style={{ width: "100%" }}
              name="confirmPassword"
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
                name="confirmPassword"
              />
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
            >
              Бүртгүүлэх
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
              onClick={() => router.push("/")}
            >
              Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Register
