import React from "react"
import Image from "next/image"

import Container from "src/components/Container"
import TabBar from "src/components/TabBar"
import BookList from "src/components/BookList"

const Home = () => {
  return (
    <div className="flex w-screen h-screen bg-[#E8E8E8] ">
      <TabBar
        onClickBook={() => console.log("book")}
        onClickProfile={() => console.log("Profile")}
      />
      <div className="container w-full h-full flex flex-col p-[50px] space-y-[30px]">
        <div className="container flex items-center justify-end text-black font-medium text-[18px]">
          Хэрэглэгчийн нэр
          <Image
            src="/images/profileIcon.png"
            width={25}
            height={25}
            alt="icon"
            className="ml-[30px]"
          />
        </div>
        <Container>
          <BookList onClickBook={() => console.log("selectedBook")} />
        </Container>
      </div>
    </div>
  )
}

export default Home
