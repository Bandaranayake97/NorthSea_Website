import React from 'react'
import './FooterBar.css'
import natiion from '../../assetrs/sllogo.png'
import logo from '../../assetrs/logo512.png'

import { BiHome,BiEnvelope,BiGlobe,BiPhone } from 'react-icons/bi';
const FooterBar = () => {
  return (
    <div className='footerbar'>
      <div className='footerbar-up-side'>
       <div className='footer-content-title'>
          <img src={natiion} alt="Mountain"height = "70px" width="50px"/>
          <p> North Sea LTD </p>
         <img src={logo} alt="Mountain" height = "70" width="50"/>
        </div>
        <div className='footer-content-conect'>
          <div className='footer-content-link'>
            <h3>Quick Link</h3>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="aboutus">
              <p>About Us</p>
            </a>
            <a href="/our-products">
              <p>Our Products</p>
           </a>
           <a href="/announcements">
             <p>Announcements</p>
           </a>
            <a href="/gallery">
              <p>Gallery</p>
           </a>
            <a href="/contact-us">
             <p>Contact Us</p>
            </a>
            <a href="/join-us">
             <p>Join Us</p>
            </a>
          </div>
          <div  className='footer-contact'>
            <h3>Contact us</h3>
            <a  className='footer-contact-us'>
              <BiHome size= '30px' className='footer-contact-us-icon'/> No,45,North Sea, Colombo
            </a>
            <a href="info@northsea.lk" className='footer-contact-us'>
              <BiEnvelope size= '30px' className='footer-contact-us-icon'/>info@northsea.lk
            </a>
            <a href="https://www.northsea.lk" className='footer-contact-us'>
              <BiGlobe size= '30px' className='footer-contact-us-icon'/>https://www.northsea.lk
            </a>
            <a  className='footer-contact-us'>
              <BiPhone size= '30px' className='footer-contact-us-icon'/>0113434377
            </a>
          </div>
        </div>      
      </div>
      <div className='footer-down-bar'>
          <p>All  rights reserved. &copy; 2023 Copyright. <span className='company'> North Sea Limited</span></p>
        </div>
    </div>
  )
}

export default FooterBar