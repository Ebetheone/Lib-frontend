import React, { useState } from "react"
import Image from "next/image"

import InputWithLabel from "./InputWithLabel"

type ProfileProps = {
  onExit: () => void
}

export default function Profile({ onExit }: ProfileProps) {
  const [input, setInput] = useState("")

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex text-[#182747] font-medium text-[18px] items-center">
        <div className="bg-[#F1F2F6] h-[32px] w-[32px] rounded-[16px] p-[8px] mr-[10px]">
          <Image alt="icon" src="/images/infoIcon.png" width={16} height={16} />
        </div>
        Хувийн мэдээлэл
      </div>
      <div className="flex flex-col h-full space-y-5 mt-[5px]">
        <div className="flex w-full space-x-5">
          <InputWithLabel
            value="Элбэг"
            setValue={setInput}
            title="Овог"
            disable={true}
          />
          <InputWithLabel
            value="Элбэг"
            setValue={setInput}
            title="Нэр"
            disable={true}
          />
        </div>
        <div className="flex w-full space-x-5">
          <InputWithLabel
            value="АА12345678"
            setValue={setInput}
            title="Регистерийн дугаар"
            disable={true}
          />
          <InputWithLabel
            value="Төрсөн өдөр *"
            setValue={setInput}
            title="2000/01/01"
            disable={true}
          />
        </div>
        <div className="flex flex-col text-[#182747] text-[14px] font-normal">
          Хүйс *
          <div className="flex mt-[5px]">
            <div className="flex items-center p-[12px] border border-[#DEDEDE] rounded-[24px] mr-[20px]">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 mr-[10px] bg-gray-100 border-[#DEDEDE] rounded"
              />
              Эрэгтэй
            </div>
            <div className="flex items-center p-[12px] border border-[#DEDEDE] rounded-[24px]">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 mr-[10px] bg-gray-100 border-[#DEDEDE] rounded"
              />
              Эмэгтэй
            </div>
          </div>
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
          <InputWithLabel
            value="Улаанбаатар"
            setValue={setInput}
            title="Хот/Аймаг"
            disable={true}
          />
          <InputWithLabel
            value="Сум/Дүүрэг"
            setValue={setInput}
            title="Баянзүрх"
            disable={true}
          />
        </div>
        <div className="flex w-full space-x-5">
          <InputWithLabel
            value="6-р хороо"
            setValue={setInput}
            title="Баг/Хороо"
            disable={true}
          />
          <InputWithLabel
            value="31-р байр"
            setValue={setInput}
            title="Дэлгэрэнгүй"
            disable={true}
          />
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
          <InputWithLabel
            value="9999-9999"
            setValue={setInput}
            title="Утасны дугаар"
            disable={true}
          />
          <InputWithLabel
            value="email@email.com"
            setValue={setInput}
            title="e-Mail"
            disable={true}
          />
        </div>
      </div>
      <div className="container flex justify-center ">
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
  )
}
