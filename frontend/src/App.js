import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/layout/NavBar';
import FooterBar from './pages/layout/FooterBar';
import { AuthProvider } from './common/context';

import Home from './pages/user/HomePage';
import Aboutus from './pages/user/Aboutus';
import OurProducts from './pages/user/OurProducts';
import Announcements from './pages/user/Announcements';
import Gallery from './pages/user/Gallery';
import ContactUs from './pages/user/ContactUs';
import JoinUs from './pages/user/JoinUs';
import SignUp from './pages/admin/SignUp';
import Login from './pages/admin/Login';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <AuthProvider>
      <NavBar isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {/* <FooterBar /> */}
    </AuthProvider>
  );
}

export default App;
