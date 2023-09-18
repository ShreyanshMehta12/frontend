import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

function UseCallBack() {
    const [count,setCount] = useState(0)
    console.log('Parent Re-render')
    // Example 2
    const [count1,setCount1] = useState(0)

    const IncrementCount = useCallback(()=>{
        // setCount1((PrevCount)=>PrevCount+1)
        console.log('Use CallBack Hook')
    },[])

    // const IncrementCount = ()=>{
    //   console.log('hello react')
    // }
  return (
    <>
      <h1>Use CallBack</h1>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>increment count</button>
      <br /><br />
      <h2>count:{count1}</h2>
      <ChildComponent increment = {IncrementCount}/>
      {/* <ChildComponent /> */}
    </>
  )
}

export default UseCallBack
