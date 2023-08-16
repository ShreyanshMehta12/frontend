import React from 'react'

function brands() {
  return (
    <>
    <div className=" brands size ">
    	<img src="image/Brands123.png" alt=""/>
    </div>

    {/* <!--brands slider div-->    */}
    <div className="container-fluid brands mt-3">
      <div className="container">
      <h2 className="text-center a mt-3">
         SHOP BY<b style={{color: '#17a9a9'}}> BRANDS</b>
      </h2>
      <div className="row">
        <div className="col-md-3">
          <a href="">
            <img className="shadow-lg mt-5" src="image/Apple.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/OnePlus-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Realme-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Vivo-Logo.png"/>
          </a>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-3">
          <a href="">
            <img className="shadow-lg mt-5" src="image/Samsung-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Mi-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Oppo-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Motorola-Logo.png"/>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <a href="">
            <img className="mt-5 shadow-lg" src="image/Nokia-Logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
           <a href="">
            <img className="shadow-lg mt-5" src="image/Tecno-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
          <a href="">
            <img className="shadow-lg brandsize mt-5" src="image/sonylogo.png"/>
          </a>
        </div>
        <div className="col-md-3">
          <a href="">
            <img className="shadow-lg brandsize mt-5" src="image/Micromax-Logo.png"/>
          </a>
        </div>
      </div>
      <div className="row mb-4 ">
        <div className="col-md-3">
          <a href="/">
            <img className="shadow-lg brandsize mt-5" src="image/itel-Logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
          <a href="">
            <img className="shadow-lg brandsize mt-5" src="image/Jio-Logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/">
            <img className="shadow-lg brandsize mt-5" src="image/lava-logo.png"/>
          </a>
        </div>
        <div className="col-md-3">
          <a href="/">
            <img className="shadow-lg w-100 brandsize mt-5" src="image/blackberry.png"/>
          </a>
        </div>
      </div>        
    </div>
    </div>

    </>
  )
}

export default brands
