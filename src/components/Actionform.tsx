import React from 'react'
import { Button,Input,Form } from 'antd'


const  Actionform:React.FC<any>=(props:any)=> {
  const colums:Array<any>=props.colums
  let obj=new Object()
  colums.map((item)=>{
    if(item.title)
      obj[item.key]=''
    })

  const inpuobj=(value:string,key:string)=>{
    obj[key]=value
    console.log(obj);
  }
  const onFinish=(value)=>{
  console.log(value);
  
  }
  
  return (
    <div className='fixed w-full h-full opacity-90 top-0  right-0 bg-gray-200 z-50'>
        <Button onClick={props.displaynone}>&times;</Button>
        <Form
        onFinish={onFinish}
        >
          <div className='w-full h-60 float'>
            {
              colums.map((item)=>{
                if(item.title !=''){
                  return(         
                    <Form.Item 
                    label={item.title}
                    name={item.key}
                    className='float-left w-1/2' 
                    key={item.key}
                    >
                      <Input 
                      // onChange={(e)=>{inpuobj(e.target.value,item.key)}} 
                      className='inline-block w-3/4'
                      />
                    </Form.Item>
                  )
                }
              
              })
            }
          </div>
          <Form.Item className='ml-32'>
            <Button type="primary" htmlType="submit" >确定</Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Actionform
