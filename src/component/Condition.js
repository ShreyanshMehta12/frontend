import React, {useState} from 'react'

function Condition() {
    const [login,setlogin] = useState()
  return (
    <>
        {
            login==1?
            <h1>Welcome user 1</h1>
            :login==2?<h1>welcome user 2 </h1>
            :<h1>welcome user 3</h1>
        }
    </>
  )
}

export default Condition
