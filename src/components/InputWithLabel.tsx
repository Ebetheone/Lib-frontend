/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: InputWithLabel component adding

*/
import React, { Dispatch } from "react"

// Хэрэглэчээс оролт авах мөн гарчигтай компонент
type InputWithLabelProps = {
  title: string
  sValue: string
  setValue: Dispatch<string>
  bDisable: boolean
}

export default function InputWithLabel({
  bDisable,
  setValue,
  title,
  sValue,
}: InputWithLabelProps) {
  return (
    <div className="flex flex-col text-[#182747] text-[14px] font-normal w-full">
      {title} *
      <input
        value={sValue}
        onChange={(e) => setValue(e.target.value)}
        disabled={bDisable}
        className="block bg-[#F9FAFC] w-full rounded-[20px] p-[8px] h-[40px] text-[#182747] font-normal text-[14px] border border-[#DEDEDE] mt-[5px]"
      />
    </div>
  )
}
