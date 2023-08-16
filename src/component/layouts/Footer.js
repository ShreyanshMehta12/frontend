import React from 'react'

 function Footer() {
  return (
    <>
      <div className="Footer">
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-5 text-center mb-5 mt-5">
            <img
              className="image mt-5"
              src="image/logo.png"
              alt=""
            />
          </div>
          <div className="col-md-7 mt-5 padding">
            <h2
              style={{
                fontFamily: 'prague',
                lineHeight: "50px",
                color: "#fff",
                fontSize: "38px",
              }}
            >
              <b className="col1">CONTACT</b> US
            </h2>
            <p className="p2">
              Mobile Zone is your one-stop shop for all things mobile. We offer a wide selection of the latest mobile phones from the top brands, as well as a range of accessories to enhance your mobile experience. Our expert team is always on hand to help you find the perfect phone for your needs and budget. Plus, with our competitive prices and special offers, you can get the latest technology without breaking the bank. Visit us in-store or online to discover the world of mobile technology with Mobile Zone.
            </p>
            <div className="Address mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="col bold">Address</h4>
                  <p className="p2">6, Indrapuri Colony, Bhawarkua ,AB Road, Indore 451010
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="col bold">Franchise Enquiry</h4>
                  <p className="p2">
                    Mobile: <b className="col bold"> +91 9313663486</b><br />
                    Email: <b className="col bold"> franchise@mobilezone.in</b>
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4 className="col bold">Quick Links</h4>
                  <p className="p2">
                    <a href="Brands.html" className="nav-link">Brands</a>
                    <a href="About.html" className="nav-link">About Us</a>
                    <a href="Contact.html" className="nav-link">Contacts</a>
                    <a href="Shipping.html" className="nav-link">Shipping</a>
                    <a href="" className="nav-link">Return Policy</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="col bold">Other Enquiry</h4>
                  <p className="p2">
                    Email: <b className="col bold">customercare@mobilezone.in</b>
                  </p>
                </div>
              </div>
            </div>
            {/* <!--addres end--> */}
            <div className="last mb-4" style={{display: "flex", color: "#1ecbcb"}}>
              <i style={{fontSize: "32px"}} className="fa-brands fa-linkedin"></i
              >&nbsp;&nbsp;
              <i
                style={{fontSize: "32px"}}
                className="fa-brands fa-square-facebook"
              ></i
              >&nbsp;&nbsp;
              <i style={{fontSize: "32px"}} className="fa-brands fa-twitter"></i>&nbsp;&nbsp;
              <i
                style={{fontSize: "32px"}}
                className="fa-brands fa-instagram"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Footer