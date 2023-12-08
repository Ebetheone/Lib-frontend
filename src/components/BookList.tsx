import React, { useState } from "react"
import SearchContainer from "./SearchContainer"

import Image from "next/image"
import { showError } from "src/utils/errorHandler"
import { useBooksQuery } from "src/generated"

type BookListProps = {
  onClickBook: (item: any) => void
}

export default function BookList({ onClickBook }: BookListProps) {
  const [input, setInput] = useState("")
  const [page, setPage] = useState(0)
  const itemsPerPage = 20

  const { data, error } = useBooksQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: {},
      take: itemsPerPage,
      skip: page * itemsPerPage,
    },
    onError: (error) => {
      showError(error)
    },
  })

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className="container flex flex-col h-full w-full">
      <div className="flex items-center w-full">
        <div className="flex-[8]">
          <SearchContainer
            value={input}
            setValue={setInput}
            onSearch={() => console.log("search")}
          />
        </div>
        <div className="flex flex-[2] items-center gap-2">
          <button
            className="text-black cursor-pointer"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
          >
            Өмнөх
          </button>
          <span className="text-black font-[800]">{page + 1}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            className="text-black cursor-pointer"
          >
            Дараах
          </button>
        </div>
      </div>
      <div className="container bg-scroll hover:bg-fixed h-full grid grid-cols-4 overflow-scroll mt-[30px] gap-[30px]">
        {data?.books?.data?.map((item, index) => (
          <div
            className="container flex flex-col border border-[#E8E8E8] bg-white w-full p-[10px] text-black font-medium items-center"
            key={index}
          >
            <button
              className="container flex flex-col items-center"
              onClick={() => onClickBook(item)}
            >
              <Image
                alt="container"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "80%", height: "auto", marginBottom: 20 }}
                src={"/images/BookImg.png"}
              />
              {item.name}
              <p>{item.price}₮</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
