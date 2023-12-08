/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:07
* @improvements: Profile Screen props with logic

*/

/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: fetching user data

*/

import React, { useState } from "react"
import Image from "next/image"
import dayjs from "dayjs"
import { Button, DatePicker, Form, Input, Select, message } from "antd"
import {
  Gender,
  UserInput,
  useUpdateUserMutation,
  useUserQuery,
} from "src/generated"
import { showError } from "src/utils/errorHandler"
import {
  CountryPhoneInput,
  CountryPhoneInputValue,
} from "antd-country-phone-input"
import { countryCodeList } from "src/utils/countryList"

type ProfileProps = {
  onExit: () => void
}

export default function Profile({ onExit }: ProfileProps) {
  const [form] = Form.useForm()
  const [userId, setUserId] = useState("")
  // Form input edit management
  const [disabled, setDisabled] = useState(true)

  useUserQuery({
    fetchPolicy: "no-cache",
    onCompleted: ({ user }) => {
      setUserId(user?.id || "")
      const _int = user?.countryCode ? parseInt(user?.countryCode) : 976
      const _phone = countryCodeList.find((e) => e.phoneCode === _int)
      form.setFieldsValue({
        email: user?.email,
        firstName: user?.profile?.firstName,
        lastName: user?.profile?.lastName,
        birthday: user?.profile?.birthday
          ? dayjs(user?.profile?.birthday)
          : undefined,
        gender: user?.profile?.gender,
        phoneNumber: {
          phone: user?.phone,
          short: _phone?.short,
          code: _phone?.phoneCode ? _phone.phoneCode.toString() : "",
        },
        city: user?.address?.city,
        district: user?.address?.city,
        address1: user?.address?.address1,
        address2: user?.address?.address2,
        ...user,
      })
    },
    onError: (error: unknown) => {
      showError(error)
    },
  })

  const { Option } = Select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  // Хэрэглэгчийн өгөгдлийн шинэчлэх
  const [onUpdateUser] = useUpdateUserMutation({
    onCompleted: async () => {
      message.success("Мэдээлэл амжилттай солигдлоо.")
      setDisabled(true)
    },
  })

  const onFinish = async (
    values: UserInput & { phoneNumber: CountryPhoneInputValue },
  ) => {
    const { phoneNumber, ..._values } = values
    onUpdateUser({
      onError: (error: unknown) => {
        showError(error)
      },
      variables: {
        id: userId,
        input: {
          ..._values,
          phone: phoneNumber?.phone,
          countryCode: phoneNumber?.code?.toString(),
        },
      },
    })
  }

  return (
    <Form
      className="flex h-full w-full"
      form={form}
      name="profileEdit"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={(errorInfo) =>
        console.log("onFinishFailed === error", errorInfo)
      }
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex text-[#182747] font-medium text-[18px] items-center">
          <div className="bg-[#F1F2F6] h-[32px] w-[32px] rounded-[16px] p-[8px] mr-[10px]">
            <Image
              alt="icon"
              src="/images/infoIcon.png"
              width={16}
              height={16}
            />
          </div>
          Хувийн мэдээлэл
        </div>
        <div className="flex flex-col h-full space-y-5 mt-[5px]">
          <div className="flex w-full space-x-5">
            <Form.Item
              className="w-full"
              name="firstName"
              label="Овог"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "Овог оруулах шаардлагатай" }]}
            >
              <Input title="Овог" size="large" disabled={disabled} />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="lastName"
              label="Нэр"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "Нэр оруулах шаардлагатай" }]}
            >
              <Input placeholder="Нэр" size="large" disabled={disabled} />
            </Form.Item>
          </div>
          <div className="flex w-full space-x-5">
            <Form.Item
              className="w-full"
              name="birthday"
              label="Төрсөн өдөр"
              rules={[
                {
                  required: true,
                  validator: (_, value) => {
                    if (!value)
                      return Promise.reject("Төрсөн өдөр оруулах шаардлагатай")
                    return Promise.resolve()
                  },
                },
              ]}
            >
              <DatePicker size="large" className="w-full" disabled={disabled} />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="gender"
              label="Хүйс"
              rules={[
                {
                  required: true,
                  message: "Хүйсээ сонгоно уу?",
                },
              ]}
            >
              <Select
                style={{ width: "100%" }}
                onChange={handleChange}
                size="large"
                placeholder="Хүйс сонгоно уу"
                disabled={disabled}
              >
                <Option value={Gender.NONE}>Бусад</Option>
                <Option value={Gender.MALE}>Эрэгтэй</Option>
                <Option value={Gender.FEMALE}>Эмэгтэй</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="flex text-[#182747] font-medium text-[18px] items-center">
            <div className="bg-[#F1F2F6] h-[32px] w-[32px] rounded-[16px] p-[8px] mr-[10px]">
              <Image
                alt="icon"
                src="/images/environmentIcon.png"
                width={16}
                height={16}
              />
            </div>
            Хаяг
          </div>
          <div className="flex w-full space-x-5">
            <Form.Item
              className="w-full"
              name="city"
              label="Хот/Аймаг"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "Хот/Аймаг оруулах шаардлагатай" },
              ]}
            >
              <Input placeholder="Хот/Аймаг" size="large" disabled={disabled} />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="district"
              label="Сум/Дүүрэг"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "Сум/Дүүрэг оруулах шаардлагатай" },
              ]}
            >
              <Input
                placeholder="Сум/Дүүрэг"
                size="large"
                disabled={disabled}
              />
            </Form.Item>
          </div>
          <div className="flex w-full space-x-5">
            <Form.Item
              className="w-full"
              name="address1"
              label="Баг/Хороо"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "Баг/Хороо оруулах шаардлагатай" },
              ]}
            >
              <Input placeholder="Баг/Хороо" size="large" disabled={disabled} />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="address2"
              label="Дэлгэрэнгүй"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "Дэлгэрэнгүй оруулах шаардлагатай" },
              ]}
            >
              <Input
                placeholder="Дэлгэрэнгүй"
                size="large"
                disabled={disabled}
              />
            </Form.Item>
          </div>
          <div className="flex text-[#182747] font-medium text-[18px] items-center">
            <div className="bg-[#F1F2F6] h-[32px] w-[32px] rounded-[16px] p-[8px] mr-[10px]">
              <Image
                alt="icon"
                src="/images/phoneIcon.png"
                width={16}
                height={16}
              />
            </div>
            Холбогдох
          </div>
          <div className="flex w-full space-x-5">
            <Form.Item
              className="w-full"
              name="phoneNumber"
              label="Утасны дугаар"
              rules={[
                {
                  required: true,
                  message: "Утасны дугаараа оруулна уу",
                },
                {
                  validator(rule, value, callback) {
                    const phoneRe = /^\d{8}$/.test(value.phone)
                    if (phoneRe) {
                      callback()
                    } else {
                      callback("Таны утасны дугаараа дахин шалгана уу")
                    }
                  },
                },
              ]}
            >
              <CountryPhoneInput
                name="phoneNumber"
                placeholder="Утасны дугаар"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="email"
              label="И-мэйл"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "И-мэйл оруулах шаардлагатай" },
              ]}
            >
              <Input placeholder="И-мэйл" size="large" disabled={disabled} />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          {disabled ? (
            <Button
              style={{ backgroundColor: "black" }}
              size="large"
              type="primary"
              onClick={() => setDisabled(false)}
            >
              Засах
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                style={{ backgroundColor: "black" }}
                size="large"
                type="primary"
                onClick={() => setDisabled(true)}
              >
                Болих
              </Button>
              <Button
                style={{ backgroundColor: "black" }}
                size="large"
                type="primary"
                htmlType="submit"
              >
                Өөрчлөлтийг хадгалах
              </Button>
            </div>
          )}
          <button
            onClick={onExit}
            className="flex rounded-[15px] h-[37px] w-[100px] justify-self-center text-[18px] text-[#182747] items-center border border-[#DEDEDE] justify-center"
          >
            <Image
              width={16}
              height={16}
              alt=""
              src="/images/infoIcon.png"
              className="mr-[10px]"
            />
            Гарах
          </button>
        </div>
      </div>
    </Form>
  )
}
