import React from 'react'
import { Table,Input,Space } from 'antd'
const {Search}=Input

const colums=[
  {title: '比赛',width: 50,dataIndex: 'competition',key: 'competition'},
  {title: '时间',width: 50,dataIndex: 'time',key: 'time'},
  {title: '地点',width: 50,dataIndex: 'position',key: 'position'}
]
const data=[

]
const onSearch=(value:string)=>{
  console.log(value)
}

const usermessage = () => {
  return (
    <div>
      <div>
        <div>
          名字
        </div>
      </div>
      <div className='full' >
        <span className='inline-block '>修改密码 </span> <div className='inline-block float-right'>&gt;</div>
      </div>
      <div className='w-full'>
        <div className='w-1/2 mx-auto'>
        <Search  placeholder="关键词" onSearch={onSearch} allowClear enterButton />
        </div>
        <Table columns={colums} dataSource={data}></Table>
      </div>
      
    </div>
  )
}

export default usermessage
