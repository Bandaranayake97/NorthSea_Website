import React from 'react'
import './Announcements.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Announcements() {

    return (

        <div className='announcement-page'>

            <div className='home-hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Precision Nets for Precision Fishing</span></h1>
                </div>
            </div>


            <div className="tender-container">
            <h2 className='section-title'>Tenders</h2>
                <ul className="tender-list">
                    {/* Each tender is a list item */}
                    <li><span className="bullet-icon">📌</span> Tender 1</li>
                    <li><span className="bullet-icon">📌</span> Tender 2</li>
                    <li><span className="bullet-icon">📌</span> Tender 3</li>
                    {/* Add more tender items as needed */}
                </ul>
            </div>

            {/* Announcements Section */}
            <div className="announcement-container">
                <h2 className='section-title'>Announcements</h2>
                <div className="announcement-card">
                    {/* Each announcement is a card */}
                    <div className="announcement-image">
                        <img src="announcement-image-1.jpg" alt="Announcement 1" />
                    </div>
                    <div className="announcement-content">
                        <h3>Announcement 1</h3>
                        <p>Content for Announcement 1 goes here.</p>
                    </div>
                </div>

                <div className="announcement-card">
                    {/* Another announcement card */}
                    <div className="announcement-image">
                        <img src="announcement-image-2.jpg" alt="Announcement 2" />
                    </div>
                    <div className="announcement-content">
                        <h3>Announcement 2</h3>
                        <p>Content for Announcement 2 goes here.</p>
                    </div>
                </div>
                {/* Add more announcement cards as needed */}
            </div>

        </div>
    )
}

export default Announcements;