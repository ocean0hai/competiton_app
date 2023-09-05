import {useEffect, useState} from 'react'
import { Table,Button,Input, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'
const {Search}=Input
import ChangeScore from '../../components/ChangeScore'
interface Columsobj{
  key:string;
  title:string;
  width:number;
  dataIndex:string;
}

interface scoreobj{
  id:string,
  count:number,
  score:string
}
interface DataType {
  id:string
  name:string,
  number:string,
  college:string,
  competition:string,
  score:string,
  key: React.Key;
}


const changeselect=(key: React.Key)=>{
  console.log(key);
}
const onSearch=(value:string)=>{
  console.log(value);

}

const writescore = (props:any) =>{
  const [inputValue, setInputValue] = useState<string>('')
  const [display,setDisplay]=useState<string>('none')
  const [switchdisplay,setswitchDisplay]=useState<string>('block')
  
  let [noscore,setNoscore]=useState<any>([])
  let [hadscore,setHadscore]=useState<any>([])
  if(noscore.length<1){
    for (let i = 0; i < 20; i++) {
      noscore.push({
        id:`${i}`,
        name:`${i}`,
        number:`${i}`,
        college:`${i}`,
        competition:`${i}`,
        score:'',
        operation:`${i}`,
        key:i
      })
    }
  }

  //输入成绩的函数
  const InputScore=()=> {
    noscore[0].score=inputValue,
    hadscore=[noscore[0],...hadscore]
    const new_noscore=noscore.slice(1)
    setNoscore(new_noscore)
    setHadscore(hadscore)
    setInputValue('')
  }

  //显示与隐藏
  const displayblock=()=>{
    setDisplay('block')
    setswitchDisplay('none')
  }
  const displaynone=()=>{
    setDisplay('none')
    setswitchDisplay('block')
  }
  
  //对成绩进行修改
  const changescore=(obj:scoreobj)=>{
    hadscore.map((item)=>{
      if(item.id===obj.id) {
        item.score=obj.score
      }
    })
    console.log(hadscore);
    setHadscore(hadscore)
  }

  //对排行榜进行排序
  const arraysort=()=>{
    
  }
  
  //没有成绩的表格
  const colums:ColumnsType<Columsobj>=[
    {title: '号码布',width: 50,dataIndex: 'id',key: 'id'},
    {title: '名字',width: 50,dataIndex: 'name',key: 'name'},
    {title: '学号',width: 50,dataIndex: 'number',key: 'number'},
    {title: '学院',width: 50,dataIndex: 'college',key: 'college'},
    {title: '比赛',width: 50,dataIndex: 'competition',key: 'comptetion'},
    {title: '成绩',width: 50,dataIndex: 'score',key: 'score'}
  ]
  return (
    <>
     <div>
        <div className='w-full'>
          <Input 
          placeholder='请输入成绩点击确定' 
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)  
          }}
          onPressEnter={(e) => {         
            InputScore()
          }}
          className='w-4/5 inline-block'/>
          <Button className='w-1/5 inline-block'onClick={e=>InputScore()} >确定</Button>
        </div>
      </div>

      {/* 没有记录成绩的 */}
      <div>
        <Table columns={colums} dataSource={noscore} ></Table> 
      </div>
      <div className='w-full'>
        <div className='text-center text-xl '>已填好成绩</div>
        <div className='w-full'> 
          <hr />
        </div>
      </div>

      {/*已记录成绩 */}
      <div>
        <Table columns={colums} dataSource={hadscore}></Table> 
      </div>
      
      <div className='w-full' >
        <ChangeScore display={display} changescore={changescore} displaynone={displaynone} ></ChangeScore>
      </div>
      <div className='w-full' style={{display:switchdisplay}}  >
        <Search
        className='w-1/2 inline-block'
          placeholder="请输入进入下一轮人数"
          allowClear
          enterButton="确定"
          size="large"
          onSearch={onSearch}
        />
        <Button className='inline-block'>进行排序</Button>
        <Button onClick={displayblock}>修改成绩</Button>
        <div className='w-full text-center'>
          <Button className='w-1/3'>结束比赛</Button>
        </div>
      </div>
    </>
  )
}

export default writescore
