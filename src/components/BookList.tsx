import React, { useState } from "react"
import SearchContainer from "./SearchContainer"

import Image from "next/image"

type BookListProps = {
  onClickBook: () => void
}

export default function BookList({ onClickBook }: BookListProps) {
  const [input, setInput] = useState("")

  return (
    <div className="container flex flex-col h-full w-full">
      <SearchContainer
        value={input}
        setValue={setInput}
        onSearch={() => console.log("search")}
      />
      <div className="container bg-scroll hover:bg-fixed h-full grid grid-cols-4 overflow-scroll mt-[30px] gap-[30px]">
        {Array.from({ length: 20 }).map((item, index) => (
          <div
            className="container flex flex-col border border-[#E8E8E8] bg-white w-full p-[10px] text-black font-medium items-center"
            key={index}
          >
            <button
              className="container flex flex-col items-center"
              onClick={onClickBook}
            >
              <Image
                alt="container"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto", marginBottom: 20 }}
                src="/images/BookImg.png"
              />
              Аянгат цагийн тууж
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
