import React from 'react'
import { Table } from 'antd'

const colums=[
  {title: '比赛',width: 50,dataIndex: 'competition',key: 'competition'},
  {title: '裁判',width: 50,dataIndex: 'judge',key: 'judge'},
  {title: '比赛规则',width: 50,dataIndex: 'rules',key: 'rules'}
]


const judgemessage = () => {
  return (
    <>
    <div>
      <div className='inline-block'>
        图片
      </div>
      <div className='inline-block'>
        <div>
          <div>姓名：</div>
          <div>职务：</div>
        </div>
        <div>
          <div>从教时间：</div>
          <div>特点：</div>
        </div>
      </div>

    </div>
     <div>
      <span className='text-center'>誓言:</span>
      <div>
        坚决服从裁判长指挥，严格遵守竞赛规则和裁判员纪律，尊重参赛选手，文明裁判，严肃认真，不循私情，
        秉公办事，做到公平、公正、公开，为运动会的进行凉爽而尽心、尽责，圆满完成各项裁判工作。
      </div>
     </div>
     <div>
      <Table columns={colums}></Table>
     </div>       
    </>
  )
}

export default judgemessage
