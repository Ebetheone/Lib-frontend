/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Home screen drawing

*/

/*

* @author: Elbeg
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: fetching book data

*/

import React, { useState } from "react"
import Image from "next/image"

import Container from "src/components/Container"
import TabBar from "src/components/TabBar"
import BookList from "src/components/BookList"
import BookDetail from "src/components/BookDetail"
import Profile from "src/components/Profile"
import { useAuth } from "src/hooks/useAuth"
import TableView from "src/components/TableView"
import { Book, useBooksQuery } from "src/generated"
import { showError } from "src/utils/errorHandler"
import UserTable from "src/components/UserTable"

// Tab Navigation enums
enum ChildrensEnum {
  BookDetail = "BookDetail",
  BookList = "BookList",
  Profile = "Profile",
  Table = "Table",
  UserTable = "UserTable",
}

const Home = () => {
  console.log("HomeScreen rendering")

  const { user } = useAuth()
  const isAdmin = user?.role === "ADMIN"

  const [tab, setTab] = useState<ChildrensEnum>(
    isAdmin ? ChildrensEnum.Table : ChildrensEnum.BookList,
  )

  // Book selected state management
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  // Бүх номны датаг өгөгдлийн сангаас татах
  const { data } = useBooksQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: {},
      take: 20,
      skip: 0,
    },
    onError: (error) => {
      showError(error)
    },
  })

  const childrens: Record<ChildrensEnum, React.JSX.Element> = {
    [ChildrensEnum.BookDetail]: (
      <BookDetail
        book={selectedBook}
        onBack={() =>
          setTab(isAdmin ? ChildrensEnum.Table : ChildrensEnum.BookList)
        }
        isAdmin={isAdmin}
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
      <Profile
        onExit={() =>
          setTab(isAdmin ? ChildrensEnum.UserTable : ChildrensEnum.BookList)
        }
      />
    ),
    [ChildrensEnum.Table]: (
      <TableView
        addBook={() => setTab(ChildrensEnum.BookDetail)}
        data={data?.books?.data}
        onEdit={async (book) => {
          console.log("going Book Detail")
          await setSelectedBook(book)
          await setTab(ChildrensEnum.BookDetail)
        }}
      />
    ),
    [ChildrensEnum.UserTable]: (
      <UserTable
        data={[]}
        onAddUser={() => {
          console.log("going to profile Screen")
          setTab(ChildrensEnum.Profile)
        }}
      />
    ),
  }

  return (
    <div className="flex w-full h-full bg-[#E8E8E8] ">
      <TabBar
        isAdmin={true}
        onExit={() => {
          // Аккаунтаас гарах
        }}
        onClickBook={() =>
          setTab(isAdmin ? ChildrensEnum.Table : ChildrensEnum.BookList)
        }
        onClickProfile={() =>
          setTab(isAdmin ? ChildrensEnum.UserTable : ChildrensEnum.Profile)
        }
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
