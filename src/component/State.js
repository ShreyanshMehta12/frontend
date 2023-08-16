import React,{useState} from 'react'

function State() {
    const[data,setdata]= useState('kishan')
    function updatedata() {
        setdata('raj')
    }
    console.log('hello state')
  return (
    <>
    <h1>hello {data}</h1>
    <button onClick={updatedata} >onclick</button>
    </>
  )
}

export default State
