/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:07
* @improvements: Book search logic with screen

*/

import React, { Dispatch } from "react"

type SearchContainerProps = {
  sValue: string
  setValue: Dispatch<string>
  onSearch: () => void
}

// Өгөгдөл хайх компонент
export default function SearchContainer({
  setValue,
  sValue,
  onSearch,
}: SearchContainerProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-2/3">
        <input
          placeholder="ХАЙХ"
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#E8E8E8] rounded-[20px] bg-white"
          value={sValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
