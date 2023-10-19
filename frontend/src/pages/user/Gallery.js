import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

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
        <div className='gallery-page'>
            <HeroSection>
                <h1 className='gallery-text'><span className='block-text'>Gallery</span></h1>
            </HeroSection>

            <div className='container'>
                <div className='row-container'>
                    {data?.gallery?.map((item, index) => (
                        <div key={index} className='card' data-aos="fade-up">
                            <div className="image">
                                <img src={item.src} alt="Placeholder" className="card-image" />
                            </div>
                            <div className='content'>
                                <h3 className="title">{item.title}</h3>
                                <p className="description">{item.description}</p>
                            </div>
                            <p className="date">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <WhatsAppIcon />
        </div>
    );
}

export default Gallery;
