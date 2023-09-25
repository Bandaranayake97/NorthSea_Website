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
          <img src={natiion} alt="Nation Image"height = "70px" width="50px"/>
          <p> North Sea LTD </p>
         <img src={logo} alt="Logo Image" height = "70" width="50"/>
        </div>

        <div className='footer-content-link'>
          <h4>Quick Link</h4>
          <a hret="/home">
            <p>Home</p>
          </a>
          <a hret="/about us ">
            <p>About Us</p>
          </a>
          <a hret="/Our_proucts">
            <p>Our Products</p>
          </a>
          <a hret="/announcements">
            <p>Announcements</p>
          </a>
          <a hret="/gallery">
            <p>Gallery</p>
          </a>
          <a hret="/contact_us">
            <p>Contact Us</p>
          </a>
          <a hret="/join_us">
            <p>Join Us</p>
          </a>
        </div>
        <div  className='footer-contact'>
          <h4>Contact us</h4>
          <a hret="/addres" className='footer-contact-us'>
          <BiHome size= '30px' className='footer-contact-us-icon'/> No,45,North Sea,Colombo
          </a>
          <a hret="/email" className='footer-contact-us'>
            <BiEnvelope size= '30px' className='footer-contact-us-icon'/>info@northsea.lk
          </a>
          <a hret="/wevsite" className='footer-contact-us'>
          <BiGlobe size= '30px' className='footer-contact-us-icon'/>https://www.northsea.lk
          </a>
          <a hret="/contact" className='footer-contact-us'>
          <BiPhone size= '30px' className='footer-contact-us-icon'/>0113434377
          </a>
        </div>      
      </div>
      <div className='footer-down-bar'>
          <p>All rights reserved. &copy; 2023 Copyright. <span className='company'> North Sea Limited</span></p>
        </div>
    </div>
  )
}

export default FooterBar