import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Outlet,useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Backlogin from '../../components/backlogin'

//菜单栏
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('用户管理', '1', <MailOutlined />),
  getItem('比赛管理', 'sub1', <MailOutlined />, [
    getItem('创建比赛', '2'),
    getItem('比赛名单', '3'),
    getItem('比赛管理', '4')
  ])
]

// submenu keys of first level

const Admin: React.FC = () => {
  const navigate=useNavigate()
  const selectchange=(key:string)=>{
    const selectarray=['manageusers','create','competitors','managecompetition']
    const value=selectarray[Number(key)-1]
    navigate(value)
  }

  return (
    <div className='w-2xl bg-red-100'>
      <div className='w-full bg-blue-200 h-12 text-center'>管理</div>
       <Backlogin></Backlogin>
      <div className='flex'>
        <Menu
          className='w-3/12  inline-block'
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={e=>selectchange(e.key)}
          items={items}
        />
        <div className='w-9/12 bg-blue-200 inline-block'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin