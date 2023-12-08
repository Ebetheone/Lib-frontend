/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: BookDetail screen drawing

*/
import Image from "next/image"
import React from "react"
import { Book } from "src/generated"

type BookDetailsProps = {
  onBack: () => void
  book: Book | null
}

export default function BookDetail({ onBack, book }: BookDetailsProps) {
  console.log("book", book)
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
            Ангилал: {book?.category || ""}
          </div>
          <div className="text-black font-bold text-[32px] my-[20px]">
            {book?.name || ""}
          </div>
          <div className="flex text-black font-medium text-[18px]">
            Номын сан дахь үлдэгдэл:
            <div className="text-[#F30A0A] font-medium text-[18px] mx-[5px]">
              {book?.limit || 0}
            </div>{" "}
            ш
          </div>
          <hr className="w-full h-[3px] mx-auto my-4 bg-[#C4C4C4] border-0 rounded md:my-10 " />
          <div className="flex flex-col justify-between space-y-[60px]">
            <div className="flex justify-between">
              <div className="text-black text-[18px] font-medium">Зохиолч:</div>
              <div className="text-black text-[18px] font-medium">
                {book?.publisher || ""}
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
              <div className="text-black text-[18px] font-medium">Үнэ:</div>
              <div className="text-black text-[18px] font-medium">
                {book?.price || 0}₮
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
              <div className="text-black text-[18px] font-medium">1999</div>
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
