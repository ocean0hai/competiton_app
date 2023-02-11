import React from 'react'
import { Button } from 'antd'
import { NavLink,Outlet,useNavigate } from 'react-router-dom'
import Backlogin from '../../components/backlogin'
const menuArrayObj=[
  {
    name:'比赛信息',
    id:'competitionmessage'
  },
  {
    name:'比赛',
    id:'scoreboard'
  },
  {
    name:'记录榜',
    id:'recordlist'
  },
  {
    name:'报名',
    id:'signup'
  },
  {
    name:'个人中心',
    id:'usermessage'
  }
]
function index() {
  const navigate=useNavigate()
  const select=(value:string)=>{
    navigate(value)
  }
  return (
    <>
      <div className='w-full h-1/3 bg-red-200' >
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
    </>
  )
}

export default index
