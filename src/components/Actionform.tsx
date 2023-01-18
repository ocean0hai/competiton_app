import React from 'react'
import { Button } from 'antd'
const  Actionform:React.FC<any>=(props)=> {
  return (
    <div className='fixed w-full h-full opacity-90 top-0 letf-0 right-0 bg-gray-200 z-50'  style={{display:props.display}} >
        <div className='fixed h-80 w-60 right-1/3 top-1/4 bg-red-600 opacity-100 ' >
        <Button onClick={props.displaynone}>&times;</Button>
        <div>
             
        </div>
        <Button className=''>确定</Button>
        </div>
    </div>
  )
}

export default Actionform
