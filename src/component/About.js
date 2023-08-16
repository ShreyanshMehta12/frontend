import React from 'react'
import '../component/css/About.css'

function About() {
  return (
    <>
    <div className="ourstory">
    <h1 className="text-center ourstoryheading">OUR STORY</h1>
    </div>

    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center aboutus mt-5">
         <b> ABOUT US</b>
        </h2>
        <br/>
        <div className="row">
          <div className="col-md-5 mt-2">
            <img
              className="img1 shadow-lg mb-5 w-100"
              src="image/kishan.jpeg"
              alt=""
            />
          </div>
          <div className="col-md-7 welcome">
            <p className="b" style={{fontWeight: '100', fontSize: '18px'}}>
          <b className="head"> Welcome to Mobile Zone! </b> <br/><br/>
            At Mobile Zone, we are passionate about providing you with the best mobile devices and accessories to enhance your digital lifestyle. Our goal is to offer a comprehensive range of cutting-edge smartphones, tablets, wearables, and more, all in one convenient online store.
            As technology enthusiasts ourselves, we understand the importance of staying up-to-date with the latest trends and innovations in the mobile industry. That's why we carefully curate our selection to include only top-quality products from reputable br/ands, ensuring that you have access to the most advanced features and functionalities.<br/><br/>
            Mobile Zone is proudly owned and operated by <span>SHREYANSH MEHTA</span>, a mobile technology enthusiast with a deep understanding of the ever-evolving industry. 
            Thank you for choosing Mobile Zone as your trusted source for all things mobile. We look forward to serving you and helping you discover the perfect mobile companion that empowers your digital lifestyle.
          <br/><br/> Best regards,<br/>
            The Mobile Zone Team
            </p>
          </div>
        </div>
        {/* <!--row end--> */}
      </div>
      {/* <!--container end--> */}
    </div>
    
    </>  
  )
}

export default About
