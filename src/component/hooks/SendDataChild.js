import React from 'react'

function SendDataChild(props) {
    const data = {name:'ram',email:'ram@gmail.com'}
    // console.log(props)
  return (
    <>
      {/* <h1>{props.data}</h1> */}
      <button onClick={()=>{props.alert(data)}}>send data</button>
    </>
  )
}

export default SendDataChild
