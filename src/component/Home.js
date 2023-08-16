import React from 'react'
import '../component/css/Home.css'
// import Header from './layouts/Header'
// import Footer from './layouts/Footer'
function Home() {
  return (
    <>
    {/* <Header /> */}
      <div className="carousel slide" data-bs-ride="carousel" id="a">
      <div className="carousel-indicators">
        <button type="button"data-bs-target="#a"data-bs-slide-to="0"className="active"></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="1"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="image/banner.png"
            className="w-100 banner1"
            alt="..."/>
          {/* <!--carousel-caption--> */}
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img 
            src="image/slider2.jpg"
            className="w-100 banner1"
            alt="..."
          />
          {/* <!--carousel-caption--> */}
        </div>1
      </div>
      {/* <!--carousel-inner--> */}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#a"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#a"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    {/* <!--slider div end--> */}

    {/* <!-- icons start --> */}
    <div className="container-fluid icons py-sm-3 ">
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3 text-center">
            <i className="fa fa-truck"></i>
            <h3>Quick Delivery</h3>
          </div>

          <div className="col-md-3 text-center">
            <i className="fa fa-credit-card-alt" ></i>
            <h3>Pay with Easy</h3>
          </div>
          <div className="col-md-3 text-center">
            <i className="fa fa-tags"></i>
            <h3>Best Deal</h3>
          </div>
          <div className="col-md-3 text-center">
            <i className="fa fa-shield"></i>
            <h3>Secured Payment</h3>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- icons end --> */}

    {/* <!--brands slider div-->    */}
    <div className="container-fluid brands mt-3">
       <h2 className="text-center a mt-3">
          SHOP BY<b style={{color: '#17a9a9'}}> BRANDS</b>
       </h2>        
      <div className="carousel slide" data-bs-ride="carousel" id="b">
        <div className="container slide2">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">

              <div className="row mt-1 brands-logo">
                <div className="col-md-3">
                  <a href="/">
                    <img className="shadow-lg" src="/image/Apple.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="/image/OnePlus-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Realme-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Vivo-Logo.png"/>
                  </a>
                </div>
              </div>
              <div className="row mb-5 brands-logo">
                <div className="col-md-3">
                  <a href="/">
                    <img className="shadow-lg" src="image/Samsung-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Mi-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Oppo-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Motorola-Logo.png"/>
                  </a>
                </div>
              </div>
            {/* <!--carousel-caption--> */}
            </div>
            <div className="carousel-item" data-bs-interval="3000">
               <div className="row mt-1 brands-logo">
                <div className="col-md-3">
                  <a href="/">
                    <img className="shadow-lg" src="image/Nokia-Logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                   <a href="/">
                    <img className="shadow-lg" src="image/Tecno-logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/">
                    <img className="shadow-lg" src="image/sonylogo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/">
                    <img className="shadow-lg" src="image/Micromax-Logo.png"/>
                  </a>
                </div>
              </div>
              <div className="row mb-5 brands-logo">
                <div className="col-md-3">
                  <a href="">
                    <img className="shadow-lg" src="image/itel-Logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="">
                    <img className="shadow-lg" src="image/Jio-Logo.png"/>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="">
                    <img className="shadow-lg" src="image/lava-logo.png" />
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="">
                    <img className="shadow-lg w-100" src="image/blackberry.png"/>
                  </a>
                </div>
              </div>
            {/* <!--carousel-caption--> */}
            </div>
          </div>
          {/* <!--carousel-inner--> */}
        </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#b"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon btn btn-dark"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#b"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon btn btn-dark"></span>
      </button>
    </div>
    </div>
    {/* <!--slider div end--> */}

    {/* <!-- latest phone --> */}
    <div className="container-fluid mt-4 mb-4">
      <h2 className="text-center a mt-3">
          LATEST<b style={{color: '#17a9a9'}}> 5G MOBILE PHONES</b>
      </h2>        
      
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card">
              <img src="image/s23.jpg"/>
              <div className="card-body">
                <span>
                  <center> Samsung Galaxy S23 Ultra 5G <br/>(Green, 12GB, 256GB Storage)<br/><br/></center>
                </span>
                  <p>
                    Deal Price:<b> ₹1,24,999.00</b><br/>
                    M.R.P: <del>₹1,49,999.00</del>
                  </p>
                <center>
                <button className="btn btn-warning shadow-md">
                  Add To Card
                </button>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-1">
              <img src="image/pixel1.jpg" />
              <div className="card-body">
                <span>
                 <center> Google Pixel 7 Pro (Obsidian,<br/> 128 GB) (12 GB RAM)<br/><br/></center>
                </span>
                  <p>
                    Deal Price:<b> ₹71,520.00</b><br/>
                    M.R.P: <del>₹89,999.00</del>
                  </p>
                <center>
                <button className="btn btn-warning shadow-md">
                  Add To Card
                </button>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="image/i14.jpg"/>
              <div className="card-body">
                <span>
                  <center> Apple iPhone 14 Pro Max<br/> 256GB Deep Purple<br/><br/></center>
                </span>
                  <p>
                    Deal Price:<b> ₹1,27,900.00</b><br/>
                    M.R.P: <del>₹1,39,999.00</del>
                  </p>
                <center>
                <button className="btn btn-warning shadow-md">
                  Add To Card
                </button>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="image/11R.jpg"/>
              <div className="card-body">
                <span>
                  <center> OnePlus 11R 5G (Sonic <br/> Black, 128GB, 8GB RAM)<br/><br/></center>
                </span>
                  <p>
                    Deal Price:<b> ₹39,999.00</b><br/>
                    M.R.P: <del>₹44,999.00</del>
                  </p>
                <center>
                <button className="btn btn-warning shadow-md">
                  Add To Card
                </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- latest phone end--> */}
    {/* <Footer /> */}
    </>
  )
}

export default Home
