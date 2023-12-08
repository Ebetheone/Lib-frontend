/*

* @author: Sarnai
* @version: 1.0.0
* @date: 2023:12:08
* @improvements: Data Table using antd

*/
import React from "react"

import { Button, Space, Table } from "antd"
import Image from "next/image"

interface DataType {
  id: string
  name: string
  writer: string
  type: string
  releasedYear: number
  remains: number
}

type TableViewProps = {
  onEdit: () => void
}

const data: DataType[] = [
  {
    id: "1",
    name: "John Brown",
    writer: "Hello",
    type: "New York No. 1 Lake Park",
    releasedYear: 2018,
    remains: 20,
  },
  {
    id: "2",
    name: "Jim Green",
    writer: "Hello",
    type: "London No. 1 Lake Park",
    releasedYear: 2018,
    remains: 20,
  },
  {
    id: "3",
    name: "Joe Black",
    writer: "Hello",
    type: "Sydney No. 1 Lake Park",
    releasedYear: 2018,
    remains: 20,
  },
]

export default function TableView({ onEdit }: TableViewProps) {
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
      dataIndex: "writer",
      key: "writer",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Released Year",
      dataIndex: "releasedYear",
      key: "releasedYear",
    },
    {
      title: "Remains",
      dataIndex: "remains",
      key: "remains",
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
      <div style={{ height: "100vh" }}>
        <Table
          dataSource={data}
          columns={columns}
          scroll={{ y: "calc(100vh - 48px)" }}
        />
      </div>
      <button className="bg-white text-black border-[2px] border-[#C4C4C4] w-[190px] rounded-[22px] h-[40px] mt-[8px]">
        Ном нэмэх
      </button>
    </div>
  )
}
