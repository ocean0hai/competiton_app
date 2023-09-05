import React,{useState} from 'react'
import {Input,Select,Button,Form} from 'antd'

const options=[
    { value: 'first', label: '1' },
    { value: 'second', label: '2' },
    { value: 'third', label: '3' }
]


const changeScore:React.FC<any>=(props:any)=> {
  const [selectvalue,setSelectvalue]=useState<number>(1)
  const changescore=props.changescore
  //
  const handleChange = (value: string) => {
    const num=Number(value)
    setSelectvalue(num)
  }
  //提交表单
  const onFinish=(value)=>{
      value.count=selectvalue
      console.log(value);
      changescore(value)
    }

  return (
    <div style={{display:props.display}} >
      <button onClick={props.displaynone}>x</button>
      <Form className='w-4/5 mx-auto' onFinish={onFinish}  >
        <Form.Item label="请输入号码布" name="id">
          <Input />
        </Form.Item>
        <Form.Item>
          <span>将要修改第</span>
          <Select
            defaultValue="1"
            style={{ width: 120 }}
            onChange={handleChange}
            options={options}
            />
          <span>次成绩</span>
        </Form.Item>
        <Form.Item label="请输入成绩" name="score">
          <Input/>
        </Form.Item>
        <Form.Item className='text-center'>
          <Button type="primary" htmlType="submit" >确定</Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default changeScore
