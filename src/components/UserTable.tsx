/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: User Table screen

*/

import { Button, Space, Table } from "antd"
import Image from "next/image"
import React from "react"
import { User } from "src/generated"

type UserTableProps = {
  data: User[] | null
  onAddUser: () => void
}

export default function UserTable({ data, onAddUser }: UserTableProps) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record: User) => (
        <Space size="middle">
          <Button type="primary" onClick={() => console.log(record)}>
            <Image src="/images/deleteIcon.png" width={18} height={18} alt="" />
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="h-full w-full">
        <Table
          dataSource={data || []}
          columns={columns}
          scroll={{ y: "calc(60vh)" }}
        />
      </div>
      <button
        className="bg-white text-black border-[2px] border-[#C4C4C4] w-[190px] rounded-[22px] h-[40px] mt-[8px]"
        onClick={onAddUser}
      >
        Хэрэглэгч нэмэх
      </button>
    </div>
  )
}
