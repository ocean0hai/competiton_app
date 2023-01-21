import {Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import Displaytable from '../../components/Displaytable'
import {Dropdown,Button,Space,Select} from 'antd'
import type { MenuProps } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
//导航栏
interface Columsobj{
  key:string;
  title:string;
  width:number;
  dataIndex:string;

}
interface DataType {
  name:string,
  account:string,
  password:string,
  state:string,
  key: React.Key;
}


const tablesize:object={
  x:150,
  y:400
}
const manageusers = (props)=> {
  let [dataSource,setDataSource]=useState<DataType[]>([])
  for (let i = 0; i < 20; i++) {
    dataSource.push({
      name:`${i}`,
      account:`${i}`,
      password:`${i}`,
      state:`${i}`,
      key:i
    })
  }
  ``
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const changeselect=(key: React.Key)=>{
    console.log(key);
  }
  const colums:ColumnsType<Columsobj>=[
    {title: '名字',width: 50,dataIndex: 'name',key: 'name'},
    {title: '账号',width: 50,dataIndex: 'account',key: 'account'},
    {title: '密码',width: 50,dataIndex: 'password',key: 'password'},
    {title: '状态',width: 50,dataIndex: 'state',key: 'state'},
    {
      title: '',
      width: 50,
      dataIndex: 'operation',
      key: 'operation',
      render:(_,record: { key: React.Key }) =>
         dataSource.length >= 1 ? <input type="checkbox" onChange={()=>changeselect(record.key)}/>:null
  }
]
  return (
    <>
    <div>     
      <Select
        defaultValue="普通用户"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'users', label: '普通用户' },
          { value: 'judge', label: '裁判' },
        ]}
      />
    </div>
      <Displaytable datasource={dataSource} colums={colums} tablesize={tablesize}></Displaytable>
    </>
  )
}

export default manageusers
