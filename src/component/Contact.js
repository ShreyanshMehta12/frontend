import React from 'react'
function Contact() {
  return (
    <>
    
    {/* <!-- Contact info start --> */}
<div class="container-fluid contact-info">
  <div class="container">
    <div class="row mt-5 mb-5 ">
      <div class="col-md-6 px-5 py-3" style={{paddingright: '5%'}}>
        <h2 style={{paddingbottom: '4%', fontWeight: '300'}}>SEND US MESSAGE</h2>
        <form>
          <input type="text" name="name" placeholder="Name" class="form-control mt-3 mb-3" required/>
          <input type="email" name="email" placeholder="Email" class="form-control mb-3" required/>
          <input type="number" name="phone" placeholder="Phone" class="form-control mb-3" required/>
          <textarea name="message" placeholder="Message" class="form-control mb-3" required></textarea>
          <a href="/" class="btn btn-warning button mb-3">Submit</a>
        </form>
      </div>
      <div class="col-md-6 px-5 py-3">
        <h2 style={{paddingbottom: '4%', fontWeight: '300'}}>CONTACT INFO</h2>
        <h3>Address</h3>
        <p>6, Indrapuri Colony, Bhawarkua ,AB Road, Indore 451010</p>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14724.482249076204!2d75.8592541216367!3d22.686555409557347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcefd3fa0725%3A0x7c70f357d1388c17!2sIndrapuri%20Colony%2C%20Bhanwar%20Kuwa%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1655543051827!5m2!1sen!2sin" width="400" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <h3 class="mt-3">Other Enquiry</h3>
        <p>Phone: <span>01141187447</span><br/>
            Email: <span>customercare@bookcorner.in</span><br/>
            Open: Monday – Saturday 10:30 – 19:30</p>
      </div>
    </div>
  </div>
</div>
{/* <!-- Contact info end --> */}


    </>
  )
}

export default Contact
