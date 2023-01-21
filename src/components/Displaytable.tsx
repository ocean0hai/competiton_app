import React, { useState } from 'react';
import { Table,Input,Button,Pagination, Divider,ConfigProvider } from 'antd'
import Actionform from './Actionform';
import Upload from '../assets/上传.svg'
import add from '../assets/添加.svg'
import deletesvg from '../assets/删除.svg'
import modify from '../assets//修改.svg'
import zh_CN from 'antd/es/locale/zh_CN'
import { onSearch,DeleteData,AddData,Modify,UploadData } from '../utils/table';
const {Search}=Input


const Displaytable:React.FC<any> = (props:any) => {
  const [display,setDisplay]=useState<string>('none')
  
  //数据参数
  const colums:Array<any>=props.colums
  const tablesize=props.tablesize
  const datasource=props.datasource
  const displayblock=()=>{
    setDisplay('block')
  }
  const displaynone=()=>{
    setDisplay('none')
  }

  return(
  <div>
    <Actionform colums={colums} display={display} displaynone={displaynone}></Actionform>
    <Search placeholder="输入账号或名字" allowClear  onSearch={onSearch} enterButton />
    <Button onClick={displayblock}><img  className='w-5 h-5 text-center' src={add} alt=""/>添加</Button>
    <Button onClick={DeleteData}><img  className='w-5 h-5 text-center' src={deletesvg} alt="" />删除</Button>
    <Button><img  className='w-5 h-5 text-center' src={modify} alt="" />修改</Button>
    <Button className='' ><img  className='w-5 h-5 text-center' src={Upload} alt="" />上传名单</Button>
    <Table 
    columns={colums}  
    scroll={tablesize} 
    dataSource={datasource} 
    pagination={false} />
    <ConfigProvider locale={zh_CN}>
      <Pagination 
        defaultCurrent={1} 
        defaultPageSize={10} 
        total={100} 
        showSizeChanger={false} 
        onChange={(e)=>console.log(e+' ')}
        showQuickJumper={true}
      />
    </ConfigProvider>

  </div>
  );
}

export default Displaytable