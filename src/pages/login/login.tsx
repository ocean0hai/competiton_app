import React,{useState} from 'react';
import { Button, message,Checkbox, Form, Input,Select,Space} from 'antd';
import {useNavigate} from 'react-router-dom'

const Options=[
  {
    value:'users',
    label:'用户'
  },
  {
    value:'judge',
    label:'裁判员'
  },
  {
    value:'admin',
    label:'管理员'
  }
]

const login: React.FC = () => {
  const [selectvalue,setSelectvalue]=useState<String>('')
  const [messageApi, contextHolder] = message.useMessage()
  const navigate=useNavigate()
  const Promptinformation = () => {
    messageApi.info('请选择登录身份！')
  }
  //命名
  const onFinish = (values:any) => {
    const username=values.username
    const password=values.password
    if (selectvalue.length===0) {
      Promptinformation()
    }
    if(selectvalue==='users'){
      navigate('/users')
    }
    if (selectvalue==='judge') {
      navigate('/judge')
    } 
    if(selectvalue==='admin') {
      navigate('/admin')
    }
    
  }
  //选择身份
  const handleChange = (value: string) => {
    setSelectvalue(value) 
  }

  return (
    <div className='w-72  bg-blue-200 rounded-xl mx-auto'>
      <div className='w-full py-3 text-center text-2xl '>登录</div>
      <div  className='w-full inline-block'>
        <h4 className='ml-2 w-36 inline-block'>*请选择登录身份：</h4>
        <Select
        className='w-32 inline-block'
          onChange={handleChange}
          options={Options}
    />
      </div>
    <Form
    className='w-52 mx-auto mt-4'
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      >
        <Form.Item
          className='w-full'
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号!'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className='w-52'
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!'}]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item className=''  name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox >记住密码</Checkbox>
        </Form.Item>
        <Form.Item className=' w-full' wrapperCol={{ offset: 8, span: 16 }}>
          {/* 提示 */}
          {contextHolder}
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
      <div className='w-full h-8'>
        <div className='ml-4 text-gray-50' onClick={e=>{console.log('ddd');}}>注册</div>
      </div>
    </div>
    )
}

export default login