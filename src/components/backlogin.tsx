import {useNavigate} from 'react-router-dom'
import { Button } from 'antd'
const backlogin=()=>{
  const navigate=useNavigate() 
  const gologin=()=>{
    navigate('/login')
  }
  return(
    <div>
       <Button onClick={gologin} >&lt;</Button>
    </div>
  )
}
export default backlogin