import React from 'react'
import { Input,Form,Button,Space,Select } from 'antd'
import type { SelectProps } from 'antd'
const competitors=[
  {
    name:'名字',
    id:'name'
  },
  {
    name:'学号',
    id:'number'
  },
  {
    name:'学院',
    id:'college'
  },
]
const onFinish=(value)=>{
  console.log(value);
  
}
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

const signup = () => {
  return (
    <>
      <Form
      className='mx-auto'
      onFinish={onFinish}
      autoComplete="off"
      >
        <div>
          {
            competitors.map((item)=>{
              return(
                <Form.Item
                name={item.id}
                label={item.name}
                key={item.id}
                rules={[{ required: true}]}
                >
                  <Input allowClear></Input>
                </Form.Item>
              )
            })
          }
          
        </div>
        <Form.Item
        label="比赛"
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
        <Form.Item>
          <Button type="primary" htmlType="submit" >确定</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default signup
