import React, {useState} from 'react'

function Form() {
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const [confirmpassword,setconfirmpassword] = useState()
    function getData(e){
        // alert('hello')
        e.preventDefault()
        console.log(name,email,password,confirmpassword)
    }
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 mt-4'>
                <form onSubmit={getData}>
                    <div className='mb-3'>
                        <label htmlFor="">Name</label>
                        <input onChange={(e)=>setname(e.target.value)} type="text" placeholder='name' className='form-control'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Email</label>
                        <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='email' className='form-control'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Password</label>
                        <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='password' className='form-control'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Confirm Password</label>
                        <input onChange={(e)=>setconfirmpassword(e.target.value)} type="text" placeholder='confirm password' className='form-control'></input>
                    </div>
                    <div>
                        <button className='text-center btn btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form
