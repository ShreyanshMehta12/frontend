import React from 'react'
import B from './B'

function A() {
    const data = 'shreyansh mehta'
  return (
    <>
     <h1>A Component</h1> 
     <B data = {data}/>
    </>
  )
}

export default A
