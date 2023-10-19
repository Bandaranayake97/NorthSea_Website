import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './Gallery.css'
import data from "../../data/index.json";

import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import HeroSection from '../../components/Hero/HeroSection';

function Gallery() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='Gallery-page'>
            <HeroSection>
                <h1 className='gallery-text'><span className='block-text'>Gallery</span></h1>
            </HeroSection>

            <div className='Gallery-container'>
                <div className='Gallery-row-container'>
                    {data?.gallery?.map((item, index) => (
                        <div key={index} className='Gallery-card' data-aos="fade-up">
                            <div className="Gallery-image">
                                <img src={item.src} alt="Placeholder" className="Gallery-card-image" />
                            </div>
                            <div className='Gallery-content'>
                                <h3 className="Gallery-title">{item.title}</h3>
                                <p className="Gallery-description">{item.description}</p>
                            </div>
                            <p className="Gallery-date">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <WhatsAppIcon />
        </div>
    );
}

export default Gallery;
