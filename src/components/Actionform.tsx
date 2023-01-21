import React from 'react'
import { Button,Input } from 'antd'

const  Actionform:React.FC<any>=(props:any)=> {
  const colums:Array<any>=props.colums
 console.log(colums);
 
  return (
    <div className='fixed w-full h-full opacity-90 top-0  right-0 bg-gray-200 z-50'  style={{display:props.display}} >
        <div className='fixed h-80 w-80  left-1/5 top-1/4 bg-red-600 opacity-100 ' >
        <Button onClick={props.displaynone}>&times;</Button>
        <div className='w-full h-60 float'>
          {
            colums.map((item)=>{
              if(item.title)
              return(         
                <div className='float-left w-1/2' key={item.key}>
                  <span className='inline-block w-1/4'>{item.title}:</span>
                  <Input className='inline-block w-3/4'></Input>
                </div>
              )
            })
          }

        </div>
        <div className='ml-32'>
           <Button >确定</Button>
        </div>

        </div>
    </div>
  )
}

export default Actionform
