import { useEffect } from "react"
import Child from "./Child"

export default ()=>{
  debugger
  useEffect(()=>{
    console.log('hello ahaaha')
  },[])
  return <div onClick={()=>console.log('outer')}>
    <div onClick={()=>console.log('inner')}>hello</div>
    <Child/>
  </div>
}
