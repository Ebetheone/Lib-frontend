import React, { PropsWithChildren } from "react"

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="container flex rounded-2xl bg-white h-full w-full p-[45px]">
      {children}
    </div>
  )
}
