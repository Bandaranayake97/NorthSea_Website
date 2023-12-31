import React, { useState } from 'react';
import './NavBar.css';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import logo from './logo.png';
import gov from '../../../src/assetrs/sl-logo.png'

const NavBar = ({ isScrolled }) => {

  const [clicked, setClicked] = useState(false);

  const toggleIcon = () => {
    setClicked(!clicked);
  }

  return (
    <div className='navigation'>
      <div className={`navbar ${isScrolled ? "opaque" : ""}`}>

        <div className={clicked ? 'desktop-nav' : 'desktop-nav active-mobile-nav'}>
          <div className='logo-section'>
            <div className='logo1'>
              <img src={gov} alt="logo" height="50" />
            </div>
            <div className='logo logo-desktop'>
              <a href='/' className='logo-link'>North Sea Ltd</a>
            </div>
            <div className='logo1'>
              <img src={logo} alt="logo" height="50" />
            </div>
          </div>

          <div className='main-menu'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="aboutus" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>About Us</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/our-products" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Our Products</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/announcements" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Announcements</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/gallery" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Gallery</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/contact-us" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Contact Us</NavLink>
              </li>
              {/* <li className='nav-item'>
                <NavLink to="/join-us" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Join Us</NavLink>
              </li> */}
            </ul>
          </div>


          {/* <div className='login-menu'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/signup" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Sign Up</NavLink>
              </li>
              <li className='nav-item'>
                <a href='/login' className='nav-link login-button'>Login</a>
              </li>
            </ul>
          </div> */}


        </div>
        <div id='mobile'>
          <div className='mobile-logo-section'>
            <div className='logo1'>
              <img src={gov} alt="logo" height="50" />
            </div>
            <div className='logo'>
              <a href='/' className='logo-link'>North Sea</a>
            </div>
            <div className='logo1'>
              <img src={logo} alt="logo" height="50" />
            </div>
          </div>
          {clicked ? <MdClose className='close-icon icon' onClick={toggleIcon} color='white' /> : <MdMenu className='menu-icon icon' onClick={toggleIcon} color='white' />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
