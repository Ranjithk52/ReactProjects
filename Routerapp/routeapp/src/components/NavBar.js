import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'

const NavBar = () => {
  return (
    <div >
        <BrowserRouter>
        <ul>
            <li><Link to="/home">Home</Link></li>                
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>          
        </ul>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default NavBar
