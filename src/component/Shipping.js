import React from 'react'
import '../component/css/Shipping.css'
function Shipping() {
  return (
    <>
    {/* <!-- shipping policy start--> */}

<div className="container-fluid text-center shipping">
  <h1 className="text-center mt-1">SHIPPING POLICY</h1>
  <img  src="image/navber-logo1.png" className="mt-4 mb-3 w-25 "/>
  <div  className="container shadow-lg py-5 px-5 my-5 scroll _ngcontent-wjn-c4">
    {/* <!-- GENERAL SHIPPING --> */}
    <h3  className="">GENERAL SHIPPING</h3>
    <p  className="mt-3 px-5">Please allow 2-4 business days for your order to be processed and shipped (3-5 days during weekends and Holidays). Orders that are placed late Friday afternoon will typically not be shipped until the following Monday. We use USPS as our primary shipping provider. Most of our products qualify for 'Media Mail" in the United States, however not all do and those that do not have different shipping methods.</p>
    <p  className="mt-3 px-5"><a>**Make sure your orders, shipping selection and delivery address are correct before placing your order. We cannot change orders once they have been placed. Once items have been shipped, Mobile Zone is not responsible for orders delivered to the wrong address or lost. We will do all we can to assist you in finding your package or give you recommendations.**</a></p>

    {/* <!-- INTERNATIONAL ORDERS --> */}
    <h3 className="mt-5">INTERNATIONAL ORDERS</h3>
    <p  className="mt-3 px-5">Although we do our best to ship all orders properly, once they leave the U.S., we have no control over any additional cost that may occur. Please be aware that customs charges may apply, depending on delivery address. 
    </p>
    <p className="mt-3 px-5"><a>**Return labels are available only for US domestic orders. They aren't available for US military addresses, US territories, or international addresses.<br/>

    To create return labels for international addressees, US military addresses, or US territories that require a customs form, you can choose one of the following options:<br/>
    <ul className="px-5">
    <li>Order one directly from a shipping carrier.</li>
    <li>Use a third-party service.</li>
    </ul>
    </a></p>
    
    {/* <!-- HOLIDAY SHIPPING --> */}
    <h3 _ngcontent-wjn-c4 className="mt-5">HOLIDAY SHIPPING</h3>
    <p _ngcontent-wjn-c4 className="mt-3 px-5">Please note that between June 25th and July 31st there will be delays in shipping. Shipments may take longer due to weather, staffing, and the sheer volume of mail being sent during these times. Please plan accordingly. </p>

    
  </div>
</div>

    </>
  )
}

export default Shipping
