import React from 'react'
import { Link } from 'react-router-dom'
 function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html"><img className="logo" src="image/navber-logo1.png" alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto list text-center">
              <li className="nav-item">
                <Link className="nav-link rang" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rang" to="/brands">BRANDS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rang" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rang" to="/contact">CONTACTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rang" to="/shipping">SHIPPING</Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link login" data-bs-toggle="modal" data-bs-target="#login" href="/">LOGIN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{color: '#0ccfcf'}} href="/">
                  <i className="fa-solid fa-cart-shopping" ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    <div class="modal fade" id="signup">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">REGISTRATION</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
      </div>
      {/* <!--modal-header end--> */}
      <div class="modal-body">
        <form onsubmit="return validation()">
          <center>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" style={{marginRight: "5px"}} data-bs-target="#signup">Signup</button>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#login">Login</button>
          </center>
          <div class="mb-3 mt-3">
            <label>Name</label>
            <input type="text" name="name" class="form-control" required/>
            <span id="name1"></span>
          </div>
          <div class="mb-3">
            <label>Email</label>
            <input type="text" name="email" class="form-control" required/>
            <span id="email1"></span>
          </div>
          <div class="mb-3">
            <label>Mobile no.</label>
            <input type="text" name="mobile" class="form-control" required/>
            <span id="mobileno"></span>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" name="password" class="form-control" required/>
            <span id="passw"></span>
          </div>
          <div class="mb-3">
            <label>Confirm Password</label>
            <input type="password" name="cpassword" class="form-control" required/>
            <span id="cpassw"></span>
          </div>
          <center>
            <button class="btn btn-warning">Register</button>
          </center>
        </form>
      </div>
      {/* <!--modal-body end--> */}
    </div>
    {/* <!--modal-content end--> */}
  </div>
  {/* <!--modal-dialog modal-sm end--> */}
</div>
{/* <!---modal signup end---> */}

{/* <!-- Button trigger modal login--> */}
<div class="modal fade" id="login">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
      </div>
      {/* <!--modal-header end--> */}
      <div class="modal-body">
        <form onsubmit="return validation()">
          <center>
          <button type="button" class="btn btn-warning" style={{marginRight: "5px"}} data-bs-toggle="modal" data-bs-target="#signup">Signup</button>
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#login" >Login</button>
          </center>
          <div class="mb-3 mt-3">
            <label>Username</label>
            <input type="text" name="username" class="form-control" required/>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" name="password" class="form-control" required/>
          </div>
          <div class="mb-3 form-check">  
            <input type="checkbox" name="remember" id="r" class="form-check-input" value="yes"/>
            <label class="form-check-label" for="r">Remember me</label>
          </div>
          <center>
            <button class="btn btn-warning text-center">Login</button>
          </center>
        </form>
      </div>
      {/* <!--modal-body end--> */}
    </div>
    {/* <!--modal-content end--> */}
  </div>
  {/* <!--modal-dialog modal-sm end--> */}
</div>
{/* <!---modal login end---> */}

    </>
  )
}
export default Header
