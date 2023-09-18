import React from 'react'

function User() {
  return (
    <>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h1 className='text-center bg-info mb-2'>User Registration </h1>
                <form action="">
                    <div className='mb-3'>
                        <label>Name</label>
                        <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input type="email" className='form-control' placeholder='email' />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input type="password" className='form-control' placeholder='Password' />
                    </div>
                    <button type='submit' className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    </div> 
    </>
  )
}

export default User
