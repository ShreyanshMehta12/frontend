import React, { useEffect, useState } from 'react'

function CertificateDisplay() {
  const[user,setItems]=useState([])
    useEffect(()=>{
    fetch('https://ecommerceapi-d3ul.onrender.com/api/getalluser')
    .then((response) => response.json())
    .then(json=>{setItems(json.getalluser)});
    // console.log('hello')
  },[]);  
  console.log(user)
  return (
    <>
    <div className='container mt-5'>
    <table className='table table-success table-striped'>
        <thead>
            <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            </tr>
        </thead>  
        <tbody>
            { user.map((item,i)=>
          
             <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                {/* <td>{item.courseDuration}</td> */}
             </tr>
            )
            
            }
        </tbody>  
    </table> 
    </div>
    </>
  )
}

export default CertificateDisplay
