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
  number:string,
  college:string,
  competition:string,
  score:string,
  key: React.Key;
}


const tablesize:object={
  x:150,
  y:400
}
const competitors = (props)=> {
  //测试数据
  let [dataSource,setDataSource]=useState<DataType[]>([])
  for (let i = 0; i < 20; i++) {
    dataSource.push({
      name:`${i}`,
      number:`${i}`,
      college:`${i}`,
      competition:`${i}`,
      score:`${i}`,
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
    {title: '名字',width: 50,dataIndex: 'name',key: 'name'},
    {title: '学号',width: 50,dataIndex: 'number',key: 'number'},
    {title: '学院',width: 50,dataIndex: 'college',key: 'college'},
    {title: '比赛',width: 50,dataIndex: 'competition',key: 'comptetion'},
    {title: '成绩',width: 50,dataIndex: 'score',key: 'score'},
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
        defaultValue="100米"
        style={{ width: 120 }}
        onChange={handleChange}
        options={selectlist}
      />
    </div>
      <Displaytable datasource={dataSource} colums={colums} tablesize={tablesize}></Displaytable>
    </>
  )
}

export default competitors
