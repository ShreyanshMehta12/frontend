import Home from './component/Home'
import './App.css'
import './component/css/Home.css'
// import './component/css/About.css'
// import './component/css/Brands.css'
// import './component/css/Contact.css'
// import './component/css/Shipping.css'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
// import {Route, Routes }from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import PageNotFound from './component/PageNotFound'
import Shipping from './component/Shipping'
import Brands from './component/Brands'
import Click from './component/Click'
import State from './component/State'
import StateOne from './component/StateOne'
import Props from './component/Props'
import HideShowToggle from './component/HideShowToggle'
import Condition from './component/Condition'
import Form from './component/Form'
import { useState } from 'react'
import User from './component/User'
import CState from './component/CState'
import Constructor from './component/lifecyclemethod/Constructor'
import Render1 from './component/lifecyclemethod/Render1'
import ComponentDidMount from './component/lifecyclemethod/ComponentDidMount'
import UseState from './component/hooks/UseState'
import UseEffect from './component/hooks/UseEffect'
import UseEffect1 from './component/hooks/UseEffect1'
import UseEffectAPI from './component/hooks/UseEffectAPI'
import Nextedlist from './component/hooks/Nextedlist'
import CertificateDisplay from './component/hooks/CertificateDisplay'
// import Render1 from './component/lifecyclemethod/Render1'
function App(){
  // const [data,setdata] = useState('kishan mehta')
  // let name = 'kishan'
  return(
    <>
     <Header /> 
     {/* <Click/> */}
     {/* <State/> */}
     {/* <StateOne/> */}
     {/* <Props name={data}/> */}
     {/* <button onClick={()=>setdata('ram')}>click me</button> */}
     {/* <HideShowToggle/> */}
     {/* <Condition/> */}
     {/* <Form/> */}
     {/* <User n = {name}/> */}
     {/* <CState/> */}
     {/* <Constructor/> */}
      {/* <Render1/> */}
    {/* <ComponentDidMount/> */}

    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseEffect1/> */}
    {/* <UseEffectAPI/> */}
    {/* <Nextedlist/> */}
    <CertificateDisplay/>

      {/* <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping/>} />
        {/* page not found alwasys write in down */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* </Routes> */}
     {/* <Footer /> */}
    </>
  )
}

export default App;