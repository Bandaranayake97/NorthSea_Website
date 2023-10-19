import React from 'react';
import './JoinUs.css'
import data from "../../data/index.json";

import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import HeroSection from '../../components/Hero/HeroSection';

function JoinUs() {


    return (
        <div>
            <HeroSection>
                <h1 className='hero-text-home'><span className='block-text'>Join Us</span></h1>
            </HeroSection>

            <div className='Joinus--section--container'>
                <div className='joinus--section'>
                    {data?.joinus?.map((item, index) => (
                        <div key={index} className='joinus--section--card'>

                            <div className='joinus--section--img'>
                                <h1 className='joinus--title'>Join Us</h1>
                            </div>

                            <p className='joinus--section--description'>{item.description}</p>

                            <div className="joinus--section--btn--container">
                                <button className="btn btn-outline-primary"
                                    onClick={() => {
                                        window.location.href = '/contact-us';
                                        window.scrollTo(0, document.documentElement.scrollTop);
                                    }}
                                >Join Us</button>
                            </div>

                        </div>

                    ))}
                </div>
                <WhatsAppIcon />
            </div>
        </div>
    );
}

export default JoinUs;