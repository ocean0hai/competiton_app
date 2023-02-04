import React from 'react'
import { Input,Form,Button,Select, Space } from "antd"
import type { SelectProps } from 'antd'
const {TextArea}=Input

//裁判员
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`)
}
const onFinish=(value)=>{
  console.log(value);
  
}

const create:React.FC = () => {


  
  return (
    <div>
      <Form
      onFinish={onFinish}
      autoComplete="off"
      >
        <Form.Item
        name="competition"
        label="比赛"
        className='w-1/2' 
        rules={[{ required: true, message: '比赛名称' }]}
      >
        <Input  allowClear />
      </Form.Item>   

      <Form.Item
        name="information"
        label="比赛信息"
        className='w-full' 
        rules={[{ required: true}]}
      >
        <TextArea  className='w-5/6' />
      </Form.Item> 
      <Form.Item
        name="rules"
        label="比赛规则"
        className='w-full' 
        rules={[{ required: true}]}
      >
        <TextArea  className='w-5/6'/>
      </Form.Item>   
      <Form.Item
        name="postiton"
        label="比赛位置"
        className='w-full' 
        rules={[{ required: true}]}
      >
        <Input className=' w-3/4' allowClear/>
      </Form.Item>      

      <Form.Item
        label="选择裁判员"
        className='w-full' 
        rules={[{ required: true}]}
      >
        <Space className='inline-block w-4/6' direction="vertical">
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="请选择"
              onChange={handleChange}
              options={options}
            />
          </Space>
      </Form.Item>  
        <Form.Item className='w-full'>
          <Button className='mx-32' type="primary" htmlType="submit" >确定</Button>
        </Form.Item>
      </Form>
      
    </div>
  )
}

export default create
