/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: BookDetail screen drawing

*/
import Image from "next/image"
import React from "react"

type BookDetailsProps = {
  onBack: () => void
}

export default function BookDetail({ onBack }: BookDetailsProps) {
  return (
    <div className="flex flex-col h-full w-full ">
      <button onClick={onBack} className="">
        <Image src="/images/backIcon.png" width={16} height={16} alt="icon" />
      </button>
      <div className="grid grid-cols-2 w-full h-full divide-x-4 divide-[#C4C4C4]">
        <div className="h-full w-full p-[50px]">
          <Image
            src="/images/BookImg.png"
            width={0}
            height={0}
            sizes="100vh"
            alt="img"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className="h-full w-full p-[50px]">
          <div className="text-[#6B6B6B] font-medium text-[18px]">
            Ангилал: Монголын уран зохиол
          </div>
          <div className="text-black font-bold text-[32px] my-[20px]">
            Аянгат цагийн тууж
          </div>
          <div className="flex text-black font-medium text-[18px]">
            Номын сан дахь үлдэгдэл:
            <div className="text-[#F30A0A] font-medium text-[18px] mx-[5px]">
              3
            </div>{" "}
            ш
          </div>
          <hr className="w-full h-[3px] mx-auto my-4 bg-[#C4C4C4] border-0 rounded md:my-10 " />
          <div className="flex flex-col justify-between space-y-[60px]">
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Зохиолч:</div>
              <div className="text-black text-[18px] font-medium">
                Чинаагийн Галсан
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">
                Эрхлэн гаргасан:
              </div>
              <div className="text-black text-[18px] font-medium">
                Nojo publishing
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">ISBN:</div>
              <div className="text-black text-[18px] font-medium">
                978-9919-0-0946-5
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Хавтас:</div>
              <div className="text-black text-[18px] font-medium">Зөөлөн</div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">
                Хэвлэгдсэн он:
              </div>
              <div className="text-black text-[18px] font-medium">1999 </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Хуудас:</div>
              <div className="text-black text-[18px] font-medium">76 ш</div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Хэмжээ:</div>
              <div className="text-black text-[18px] font-medium">
                115х180 мм
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Жин:</div>
              <div className="text-black text-[18px] font-medium">76 гр</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
