import React, { useState } from 'react';
import { Table,Input,Button,Pagination, Divider,ConfigProvider } from 'antd'
import Upload from '../assets/上传.svg'
import zh_CN from 'antd/es/locale/zh_CN'
import { onSearch,DeleteData,AddData,Modify,UploadData } from '../utils/table';
const {Search}=Input


const Displaytable:React.FC<any> = (props:any) => {
  //数据参数
  const colums=props.colums
  const tablesize=props.tablesize
  const datasource=props.datasource
  return(
  <div>
    <div className=''>
    <Search placeholder="输入账号或名字" allowClear  onSearch={onSearch} enterButton />
      <Button>增加</Button>
      <Button>删除</Button>
      <Button>修改</Button>
      <Button >上传名单<img  className='w-5 h-5 text-center' src={Upload} alt="" /></Button>
    </div>
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