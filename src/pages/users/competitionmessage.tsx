import React from 'react'
import Displaytable from '../../components/Displaytable'
import { Table,Input,Space,Select } from 'antd'
const {Search}=Input
const colums=[
  {title: '比赛',width: 50,dataIndex: 'competition',key: 'competition'},
  {title: '比赛信息',width: 50,dataIndex: 'information',key: 'information'},
  {title: '比赛规则',width: 50,dataIndex: 'rules',key: 'rules'},
  {title: '比赛位置',width: 50,dataIndex: 'position',key: 'position'},
  {title: '裁判员',width: 50,dataIndex: 'referee',key: 'referee'},
  {title: '状态',width: 50,dataIndex: 'state',key: 'state'}
]

const onSearch=(value:string)=>{
  console.log(value)
}
const allcompetition=[
  { value: 'all', label: '全部' },
  { value: '100', label: '100米' },
]
const sex=[
  { value: 'w', label: '女' },
  { value: 'n', label: '男' },
  { value: 'all', label: '全部' },
]
const  selectCompetition=()=>{

}
const  selectSex=()=>{
  
}

function CompetitionMessage() {
  return (
    <div>
      <div className='w-1/2 mx-auto'>
      <Search placeholder="关键词" onSearch={onSearch} allowClear enterButton />
      </div>
      <div>
      <Select defaultValue="全部" options={allcompetition} onChange={selectCompetition} className='w-1/2' />
      <Select defaultValue="全部" options={sex} onChange={selectSex} className='w-1/2' />
      </div>
      <Table columns={colums} ></Table>
    </div>
  )
}

export default CompetitionMessage
