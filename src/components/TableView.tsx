/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Data Table using antd

*/
import React from "react"

import { Button, Space, Table } from "antd"
import Image from "next/image"
import { Book } from "src/generated"

type TableViewProps = {
  onEdit: () => void
  data: Book[] | []
}

export default function TableView({ data, onEdit }: TableViewProps) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Writer",
      dataIndex: "publisher",
      key: "publisher",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Released Year",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Remains",
      dataIndex: "limit",
      key: "limit",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={onEdit}>
            <Image src="/images/editIcon.png" width={18} height={18} alt="" />
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
      <button className="bg-white text-black border-[2px] border-[#C4C4C4] w-[190px] rounded-[22px] h-[40px] mt-[8px]">
        Ном нэмэх
      </button>
    </div>
  )
}
