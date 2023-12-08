/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:07
* @improvements: Book search logic with screen

*/

import React, { Dispatch } from "react"

type SearchContainerProps = {
  value: string
  setValue: Dispatch<string>
  onSearch: () => void
}

export default function SearchContainer({
  setValue,
  value,
  onSearch,
}: SearchContainerProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-2/3">
        <input
          placeholder="ХАЙХ"
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#E8E8E8] rounded-[20px] bg-white"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <button onClick={onSearch} className="absolute end-[100px]">
          <Image
            src="/images/searchIcon.png"
            width={24}
            height={24}
            alt="icon"
          />
        </button> */}
      </div>
    </div>
  )
}
