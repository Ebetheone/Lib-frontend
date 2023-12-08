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
  isAdmin: boolean
}

export default function BookDetail({ onBack, isAdmin }: BookDetailsProps) {
  return (
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
            <div className="text-[#6B6B6B] font-medium text-[18px] ">
              Ангилал:
              <input
                value="Монголын уран зохиол"
                className="ml-[5px] border-[#C4C4C4] border"
              />
            </div>
          ) : (
            <div className="text-[#6B6B6B] font-medium text-[18px]">
              Ангилал: Монголын уран зохиол
            </div>
          )}

          {isAdmin ? (
            <input
              className="text-black font-bold text-[32px] my-[20px] h-[42px] border border-[#C4C4C4]"
              value="Аянгат цагийн тууж"
            />
          ) : (
            <div className="text-black font-bold text-[32px] my-[20px]">
              Аянгат цагийн тууж
            </div>
          )}

          <div className="flex text-black font-medium text-[18px]">
            Номын сан дахь үлдэгдэл:
            {isAdmin ? (
              <input
                value={3}
                className="border text-[#F30A0A] font-medium text-[18px] mx-[5px] border-[#C4C4C4]"
              />
            ) : (
              <div className="text-[#F30A0A] font-medium text-[18px] mx-[5px]">
                3
              </div>
            )}
            ш
          </div>
          <hr className="w-full h-[3px] mx-auto my-4 bg-[#C4C4C4] border-0 rounded md:my-10 " />
          <div className="flex flex-col justify-between space-y-[40px]">
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">Зохиолч:</div>
              {isAdmin ? (
                <input
                  value="Чинаагийн Галсан"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">
                  Чинаагийн Галсан
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">
                Эрхлэн гаргасан:
              </div>
              {isAdmin ? (
                <input
                  value="Nojo publishing"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">
                  Nojo publishing
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">ISBN:</div>
              {isAdmin ? (
                <input
                  value="978-9919-0-0946-5"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">
                  978-9919-0-0946-5
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">Хавтас:</div>
              {isAdmin ? (
                <input
                  value="Зөөлөн"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">Зөөлөн</div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">
                Хэвлэгдсэн он:
              </div>
              {isAdmin ? (
                <input
                  value="1999"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">1999</div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">Хуудас:</div>
              {isAdmin ? (
                <input
                  value="76 ш"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">76 ш</div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">Хэмжээ:</div>
              {isAdmin ? (
                <input
                  value="115х180 мм"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">
                  115х180 мм
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-black text-[18px] font-medium">Жин:</div>
              {isAdmin ? (
                <input
                  value="76 гр"
                  className="text-black text-[18px] border border-[#C4C4C4] h-[33px]"
                />
              ) : (
                <div className="text-black text-[18px] font-medium">76 гр</div>
              )}
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
  )
}
