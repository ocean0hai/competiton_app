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
  competition:string,
  information:string,
  referee:string,
  state:string,
  position:string,
  rule:string,
  key:number
}


const tablesize:object={
  x:150,
  y:400
}
const managecompetition = (props)=> {
  //测试数据
  let [dataSource,setDataSource]=useState<DataType[]>([])
  for (let i = 0; i < 20; i++) {
    dataSource.push({
      competition:`${i}`,
      information:`${i}`,
      referee:`${i}`,
      rule:`${i}`,
      position:`${i}`,
      state:`${i}`,
      key:i
    })
  }
  //选择器
  const selectlist=[
    { value: '100meters', label: '100米' },
    { value: '200meters', label: '200米' },
    { value: '300meters', label: '300米' },
    { value: '400meters', label: '400米' },
    { value: '800meters', label: '800米' }
  ]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const changeselect=(key: React.Key)=>{
    console.log(key);
  }
  //表头
  const colums:ColumnsType<Columsobj>=[
    {title: '比赛',width: 50,dataIndex: 'competition',key: 'competition'},
    {title: '比赛信息',width: 50,dataIndex: 'information',key: 'information'},
    {title: '比赛规则',width: 50,dataIndex: 'rules',key: 'rules'},
    {title: '比赛位置',width: 50,dataIndex: 'position',key: 'position'},
    {title: '裁判员',width: 50,dataIndex: 'referee',key: 'referee'},
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
      <Displaytable datasource={dataSource} colums={colums} tablesize={tablesize}></Displaytable>
    </>
  )
}

export default managecompetition
