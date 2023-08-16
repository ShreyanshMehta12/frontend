import React from 'react'

function Click() {
    let name ='kishan'
    function hello(a){
        name = a
        alert(a)
    }
    console.log('hello gwalior')
  return (
    <>
    <h1>hello{name}</h1>
    <button onClick={hello}>Update </button>
    <button onClick={()=>hello('raj')}>Click me</button>
    </>
  )
}

export default Click
