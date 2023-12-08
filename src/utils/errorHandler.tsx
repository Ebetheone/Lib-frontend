import React from "react"
import { message, Modal } from "antd"

const isObject = function (a: any) {
  return !!a && a.constructor === Object
}

export const showSuccess = (text: string, type = "toast") => {
  if (type === "toast") {
    message.success(text)
  } else if (type === "modal") {
    Modal.success({
      okText: "OK",
      content: <span>{text}</span>,
    })
  }
}

export const showInfo = (text: string) => {
  message.info(text)
}

export const showWarning = (text: string) => {
  message.warning(text)
}

export function showError(error: any, type = "toast") {
  try {
    const { graphQLErrors = [], networkError } = error

    if (graphQLErrors?.length > 0)
      graphQLErrors.forEach((err: any) => {
        let { message: errorMessage } = err

        if (isObject(err)) {
          const caslErrorPattern = /It's not allowed to run "(.*)" on "(.*)"/
          const match = errorMessage.match(caslErrorPattern)

          if (match) {
            let action = match[1]
            if (action === "delete") {
              action = "устгах"
            } else if (action === "create") {
              action = "үүсгэх"
            } else if (action === "update") {
              action = "шинэчлэх"
            } else {
              action = "харах"
            }
            const subject = match[2]
            errorMessage = `Танд ${subject} ${action} эрх байхгүй байна.`
          }

          if (type === "toast") {
            message.error(errorMessage)
          } else if (type === "modal") {
            Modal.error({
              okText: "OK",
              content: <span>{errorMessage}</span>,
            })
          }
        } else message.error(err)
      })

    if (networkError) {
      message.error(
        "Серверийн холболт амжилтгүй боллоо. Интернет холболтоо шалгана уу!",
      )
    }
  } catch (err: unknown) {
    message.error("Алдаа гарлаа. Та админтай холбоо барина уу!")
  }
}
