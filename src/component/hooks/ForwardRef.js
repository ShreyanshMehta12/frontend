import React,{forwardRef} from 'react'

function ForwardRef(Props,ref) {
  return (
    <>
     <h1>hello</h1> 
     <input ref = {ref} type='text'/>
    </>
  )
}

export default forwardRef(ForwardRef)
