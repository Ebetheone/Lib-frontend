/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: BookDetail screen drawing

*/
import { Form, Input, message } from "antd"
import Image from "next/image"
import React from "react"
import { Book, BookInput, useUpdateBookMutation } from "src/generated"
import { showError } from "src/utils/errorHandler"

type BookDetailsProps = {
  onBack: () => void
  book: Book | null
  isAdmin: boolean
}

export default function BookDetail({
  onBack,
  book,
  isAdmin,
}: BookDetailsProps) {
  const [form] = Form.useForm()

  const [onUpdateBook] = useUpdateBookMutation({
    onCompleted: async () => {
      message.success("Номын мэдээлэл амжилттай засагдлаа.")
    },
  })

  const onFinish = async (values: BookInput) => {
    onUpdateBook({
      onError: (error: unknown) => {
        showError(error)
      },
      variables: {
        id: userId,
        input: { ...values },
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
      <div className="flex flex-col h-full w-full bg-white">
        <button onClick={onBack} className="">
          <Image src="/images/backIcon.png" width={16} height={16} alt="icon" />
        </button>
        <div className="grid grid-cols-2 w-full h-[90%] divide-x-4 divide-[#C4C4C4]">
          <div className="h-[90%] w-full p-[50px]">
            <Image
              src="/images/BookImg.png"
              width={0}
              height={0}
              sizes="100vh"
              alt="img"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="h-[90%] w-full p-[50px]">
            {isAdmin ? (
              <Form.Item
                className="w-full"
                name="category"
                label="Ангилал"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Ангилал оруулах шаардлагатай" },
                ]}
              >
                <Input title="Ангилал" size="large" />
              </Form.Item>
            ) : (
              <div className="text-[#6B6B6B] font-medium text-[18px]">
                Ангилал: {book?.category || ""}
              </div>
            )}
            {isAdmin ? (
              <Form.Item
                className="w-full"
                name="name"
                label="Нэр"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Нэр оруулах шаардлагатай" },
                ]}
              >
                <Input title="Нэр" size="large" />
              </Form.Item>
            ) : (
              <div className="text-black font-bold text-[32px] my-[20px]">
                {book?.name || ""}
              </div>
            )}
            <div className="flex text-black font-medium text-[18px] m-0">
              Номын сан дахь үлдэгдэл:
              {isAdmin ? (
                <Form.Item
                  className="w-full m-0"
                  name="limit"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Үлдэгдэл оруулах шаардлагатай",
                    },
                  ]}
                >
                  <Input title="Үлдэгдэл" size="large" />
                </Form.Item>
              ) : (
                <div className="text-[#F30A0A] font-medium text-[18px] mx-[5px]">
                  {book?.limit || 0}
                </div>
              )}
              ш
            </div>
            <hr className="w-full h-[3px] mx-auto my-4 bg-[#C4C4C4] border-0 rounded md:my-10 " />
            <div className="flex flex-col justify-between space-y-[40px]">
              <div className="flex justify-between items-center gap-2">
                <div className="text-black text-[18px] font-medium">
                  Зохиолч:
                </div>
                {isAdmin ? (
                  <Form.Item
                    className="w-full m-0"
                    name="publisher"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Зохиолч оруулах шаардлагатай",
                      },
                    ]}
                  >
                    <Input title="Зохиолч" size="large" />
                  </Form.Item>
                ) : (
                  <div className="text-black text-[18px] font-medium">
                    {book?.publisher || ""}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">
                  Эрхлэн гаргасан:
                </div>
                <div className="text-black text-[18px] font-medium">
                  Nojo publishing
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="text-black text-[18px] font-medium">Үнэ:</div>
                {isAdmin ? (
                  <Form.Item
                    className="w-full m-0"
                    name="price"
                    labelCol={{ span: 24 }}
                    rules={[
                      { required: true, message: "Үнэ оруулах шаардлагатай" },
                    ]}
                  >
                    <Input title="Үнэ" size="large" />
                  </Form.Item>
                ) : (
                  <div className="text-black text-[18px] font-medium">
                    {book?.price || 0}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">
                  Хавтас:
                </div>
                <div className="text-black text-[18px] font-medium">Зөөлөн</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">
                  Хэвлэгдсэн он:
                </div>
                <div className="text-black text-[18px] font-medium">1999</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">
                  Хуудас:
                </div>
                <div className="text-black text-[18px] font-medium">76 ш</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">
                  Хэмжээ:
                </div>
                <div className="text-black text-[18px] font-medium">
                  115х180 мм
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black text-[18px] font-medium">Жин:</div>
                <div className="text-black text-[18px] font-medium">76 гр</div>
              </div>
            </div>
          </div>
        </div>
        {isAdmin && (
          <div className="flex h-[40px] w-full justify-center space-x-[20px] mt-[20px]">
            <button className="h-[40px] flex text-black text-[16px] bg-[#E4E4E4] rounded p-[10px] items-center">
              <Image
                src="/images/menuIcon.png"
                height={20}
                width={20}
                alt="icon"
                className="mr-[5px]"
              />
              Устгах
            </button>
            <button className="h-[40px] flex text-black text-[16px] bg-[#E4E4E4] rounded p-[10px] items-center">
              <Image
                src="/images/menuIcon.png"
                height={20}
                width={20}
                alt="icon"
                className="mr-[5px]"
              />
              Хадгалах
            </button>
          </div>
        )}
      </div>
    </Form>
  )
}
