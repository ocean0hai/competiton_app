import React, { useState } from 'react'
import { useNavigate,Outlet } from 'react-router-dom';
import Backlogin from '../../components/backlogin'
import { Button } from 'antd';

const menuArrayObj=[
  {
    name:'比赛规则',
    id:'competitonrules'
  },
  {
    name:'填写成绩',
    id:'writescore'
  },
  {
    name:'个人中心',
    id:'judgemessage'
  }
]

const index: React.FC = () => {
  const navigate=useNavigate()
  const select=(value:string)=>{
    navigate(value)
  }
  return (
    <div className='mx-auto bg-blue-100'>
      <div className='w-full h-1/3 bg-blue-200' >
        <Backlogin></Backlogin>
        <div>理工赛事</div>
      </div>
      <div className='w-full'>
        {
          menuArrayObj.map((item)=>{
            return (
              <div className='inline-block' key={item.id}>
                <Button onClick={(e)=>{select(item.id)}} >{item.name}</Button>
              </div>
            )
          })
        }
      </div>
      <Outlet></Outlet>
    </div>
    );
};

export default index