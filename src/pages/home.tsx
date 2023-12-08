import React, { useState } from "react"
import Image from "next/image"

import Container from "src/components/Container"
import TabBar from "src/components/TabBar"
import BookList from "src/components/BookList"
import BookDetail from "src/components/BookDetail"
import Profile from "src/components/Profile"
import { useAuth } from "src/hooks/useAuth"

enum ChildrensEnum {
  BookDetail = "BookDetail",
  BookList = "BookList",
  Profile = "Profile",
}

const Home = () => {
  const [tab, setTab] = useState<ChildrensEnum>(ChildrensEnum.BookList)
  const [selectedBook, setSelectedBook] = useState(null)

  const { user } = useAuth()

  const childrens: Record<ChildrensEnum, React.JSX.Element> = {
    [ChildrensEnum.BookDetail]: (
      <BookDetail
        book={selectedBook}
        onBack={() => setTab(ChildrensEnum.BookList)}
      />
    ),
    [ChildrensEnum.BookList]: (
      <BookList
        onClickBook={(e) => {
          setSelectedBook(e)
          setTab(ChildrensEnum.BookDetail)
        }}
      />
    ),
    [ChildrensEnum.Profile]: (
      <Profile onExit={() => setTab(ChildrensEnum.BookList)} />
    ),
  }

  return (
    <div className="flex w-screen h-screen bg-[#E8E8E8] ">
      <TabBar
        onClickBook={() => setTab(ChildrensEnum.BookList)}
        onClickProfile={() => setTab(ChildrensEnum.Profile)}
      />
      <div className="container w-full h-full flex flex-col p-[50px] space-y-[30px]">
        <div className="container flex items-center justify-end text-black font-medium text-[18px] cursor-pointer">
          {`${user?.profile?.firstName} ${user?.profile?.lastName}` ||
            "Хэрэглэгчийн нэр"}
          <Image
            src="/images/profileIcon.png"
            width={25}
            height={25}
            alt="icon"
            className="ml-[30px] cursor-pointer"
          />
        </div>
        <Container>{childrens[tab]}</Container>
      </div>
    </div>
  )
}

export default Home
