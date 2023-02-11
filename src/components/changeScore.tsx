import React,{useState} from 'react'
import {Input,Button} from 'antd'
const changeScore:React.FC<any> = (props:any) =>{
  const [inputValue,setInputValue]=useState<string>('')
  function sendtodolist():void{
    console.log(inputValue);
      setInputValue('')
  }
  return (
    <div>
         <div className='' >
          <Input 
          placeholder='修改成绩' 
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)  
          }}
          onPressEnter={(e) => {
            sendtodolist()
          }}
          className='w-4/5 inline-block'/>
          <Button className='w-1/5 inline-block' onClick={sendtodolist}>确定</Button>
        </div>
    </div>
  );
}

export default changeScore
