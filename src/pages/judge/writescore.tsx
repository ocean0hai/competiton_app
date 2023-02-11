import {useState} from 'react'
import { Table,Button,Input } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import ChangeScore from '../../components/changeScore'
const {Search}=Input

interface Columsobj{
  key:string;
  title:string;
  width:number;
  dataIndex:string;

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

const writescore = () => {
  const [inputValue, setInputValue] = useState<string>('')
  let [noscore,setNoscore]=useState<any>([])
  let [hadscore,setHadscore]=useState<DataType[]>([])
  let [diplay,setDisplay]=useState<string>('none')
  for (let i = 0; i < 20; i++) {
    noscore.push({
      id:`${i}`,
      name:`${i}`,
      number:`${i}`,
      college:`${i}`,
      competition:`${i}`,
      score:'',
      key:i
    })
  }
  //输入成绩的函数
  function inputscore():void{
    noscore[0].score=inputValue
    setNoscore(noscore)
    hadscore=[noscore[0],...hadscore]
    console.log(hadscore);
    setHadscore(hadscore)
    setInputValue('')
  }

  //修改display中的值
  const changedisplay=()=>{
    setDisplay('block')
  }



  const colums:ColumnsType<Columsobj>=[
    {title: '号码布',width: 50,dataIndex: 'id',key: 'id'},
    {title: '名字',width: 50,dataIndex: 'name',key: 'name'},
    {title: '学号',width: 50,dataIndex: 'number',key: 'number'},
    {title: '学院',width: 50,dataIndex: 'college',key: 'college'},
    {title: '比赛',width: 50,dataIndex: 'competition',key: 'comptetion'},
    {title: '成绩',width: 50,dataIndex: 'score',key: 'score'},
    {
      title: '',
      width: 50,
      dataIndex: 'operation',
      key: 'operation',
      render:(_,record: { key: React.Key }) =>
        noscore.length >= 1 ? <input type="checkbox" onChange={()=>changeselect(record.key)}/>:null
    }
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
            inputscore()
          }}
          className='w-4/5 inline-block'/>
          <Button className='w-1/5 inline-block'onClick={inputscore} >确定</Button>
        </div>

        <div style={{display:diplay}}>
          <ChangeScore ></ChangeScore>
        </div>
      </div>

      <div>
        <Table columns={colums} dataSource={noscore} ></Table> 
      </div>
      <div className='w-full'>
        <div className='text-center text-xl '>已填好成绩</div>
        <div className='w-full'> 
          <hr />
        </div>
      </div>
      {/* 记录成绩的 */}
      <div>
        <Table columns={colums} dataSource={hadscore}></Table> 
      </div>
      <div className='w-full'>
        <Search
        className='w-1/2 inline-block'
          placeholder="请输入进入下一轮人数"
          allowClear
          enterButton="确定"
          size="large"
          onSearch={onSearch}
        />
        <Button className=' inline-block'>进行排序</Button>
        <Button >修改成绩</Button>
        <div className='w-full text-center'>
          <Button className='w-1/3'>结束比赛</Button>
        </div>
      </div>
    </>
  )
}

export default writescore
