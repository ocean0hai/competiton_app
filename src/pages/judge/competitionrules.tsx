import React from 'react'
import { Button,Table } from 'antd'

const colums=[
  {title: '比赛',width: 50,dataIndex: 'competition',key: 'competition'},
  {title: '裁判',width: 50,dataIndex: 'judge',key: 'judge'},
  {title: '比赛规则',width: 50,dataIndex: 'rules',key: 'rules'},
]


const competitionrules = () => {
  return (
    <>
      <div>
        <Table columns={colums}></Table>
      </div>
    </>
  )
}

export default competitionrules
