import React,{useRef} from 'react'

function UseRef() {
    let inputRef = useRef(null)
    function controlInput(){
        inputRef.current.value = 'kishan mehta'
        inputRef.current.focus()
        inputRef.current.style.color = 'white'
        inputRef.current.style.backgroundColor = 'green'
    }
  return (
    <>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>handle input</button>
    </>
  )
}

export default UseRef
