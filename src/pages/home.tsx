import React from "react"
import TabBar from "src/components/TabBar"

const Home = () => {
  return (
    <div className="flex w-screen h-screen bg-[#E8E8E8] ">
      <TabBar
        onClickBook={() => console.log("book")}
        onClickProfile={() => console.log("Profile")}
      />
      <div className="flex w-1/2 h-1/2 bg-black">hahaT</div>
    </div>
  )
}

export default Home
