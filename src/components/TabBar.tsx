/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: TabBar draw with logic user to admin

*/

import React from "react"
import Image from "next/image"

type TabBarProps = {
  onClickBook: () => void
  onClickProfile: () => void
  onExit: () => void
  isAdmin: boolean
}

export default function TabBar({
  onClickBook,
  onClickProfile,
  onExit,
  isAdmin,
}: TabBarProps) {
  return (
    <div className="container flex flex-col bg-white h-screen w-80 rounded-tr-[45px] rounded-br-[45px] p-[30px]">
      <div className="flex">
        <Image src="/images/menuIcon.png" alt="" width={25} height={25} />
        <div className="text-[18px] font-medium text-black ml-[10px]">Цэс</div>
      </div>
      <div className="flex container h-[90%] w-full flex-col justify-center">
        <button
          className="flex bg-[#FFFFFF] w-[80%] h-[50px] hover:bg-[#E8E8E8] items-center rounded text-black"
          onClick={onClickBook}
        >
          <Image
            src="/images/bookIcon.png"
            alt=""
            width={25}
            height={25}
            className="me-[10px]"
          />
          {isAdmin ? "Ном" : "Номнууд"}
        </button>
        <button
          className="flex bg-[#FFFFFF] w-[80%] h-[50px] hover:bg-[#E8E8E8] items-center rounded mt-[10px] text-black"
          onClick={onClickProfile}
        >
          <Image
            src="/images/profileIcon.png"
            alt=""
            width={25}
            height={25}
            className="me-[10px]"
          />
          {isAdmin ? "Бүртгэл" : "Профайл"}
        </button>
      </div>
      {isAdmin && (
        <button className="flex" onClick={onExit}>
          <Image src="/images/exitIcon.png" alt="" width={25} height={25} />
          <div className="text-[18px] font-medium text-black ml-[10px]">
            Гарах
          </div>
        </button>
      )}
    </div>
  )
}
