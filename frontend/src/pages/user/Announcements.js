import React, { useEffect } from 'react';
import AOS from 'aos';
import "./Announcements.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import announcementImage from "../../images/hiring.jpeg";

import HeroSection from '../../components/Hero/HeroSection';
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';

function Announcements() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="announcement-page">
      <HeroSection>
        <h1 className='hero-text-home'><span className='block-text'>Announcements</span></h1>
      </HeroSection>


      {/*   <h2 className="noTenders">No tenders or announcements available 
            at the moment. Keep in touch !</h2>
       */}


      <h2 className="Announcement-section-title">Tenders</h2>
      <div className="tender-container">
        <ul className="tender-list">
          <p className="tender-item" data-aos="fade-up">
            <span className="bookmark-icon">
              <BsFillBookmarkFill size={25} />
            </span>
            About the tender detail should include here. About the tender detail
            should include here.
          </p>

          <p className="tender-item" data-aos="fade-up">
            <span className="bookmark-icon">
              <BsFillBookmarkFill size={25} />
            </span>
            About the tender detail should include here. About the tender detail
            should include here.
          </p>

          <p className="tender-item" data-aos="fade-up">
            <span className="bookmark-icon">
              <BsFillBookmarkFill size={25} />
            </span>
            About the tender detail should include here. About the tender detail
            should include here.
          </p>
          <p className="tender-item" data-aos="fade-up">
            <span className="bookmark-icon">
              <BsFillBookmarkFill size={25} />
            </span>
            About the tender detail should include here. About the tender detail
            should include here.
          </p>

          {/* Add more tender items as needed */}
        </ul>
      </div>

      {/* Announcements Section */}

      <h2 className="section-title">
        <span className="announce-icon">
          <GrAnnounce size={40} />
        </span>
        Announcements
      </h2>
      <div className="announcement-container">
        <div className="announcement-card" data-aos="fade-up">
          <img
            src={announcementImage}
            className="announcement-image"
            alt="announcement-1"
          />
          <div className="announcement-content">
            <h3 className="announcement-title">Announcement 1</h3>
            <p className="announcement-details">
              Announcement details include here. Announcement details include
              here.
            </p>
            <div className="announcement-date">September 29, 2023</div>
          </div>
        </div>

        <div className="announcement-card" data-aos="fade-up">
          <img
            src={announcementImage}
            className="announcement-image"
            alt="announcement-2"
          />
          <div className="announcement-content">
            <h3 className="announcement-title">Executive manager positions available</h3>
            <p className="announcement-details">
              Announcement details include here. Announcement details include
              here.
            </p>
            <div className="announcement-date">September 29, 2023</div>
          </div>
        </div>

        <div className="announcement-card" data-aos="fade-up">
          <img
            src={announcementImage}
            className="announcement-image"
            alt="announcement-3"
          />
          <div className="announcement-content">
            <h3 className="announcement-title">We are hiring</h3>
            <p className="announcement-details">
              Announcement details include here. Announcement details include
              here.
            </p>
            <div className="announcement-date">September 29, 2023</div>
          </div>

        </div>
        <WhatsAppIcon />
      </div>



    </div>
  );
}

export default Announcements;
