import React from 'react'
import './Gallery.css'
import data from "../../data/index.json";


import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';

function Gallery() {
    return (
        <div className='gallery--section'>
            <div className='gallery--hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Gallery</span></h1>
                </div>
            </div>

            <div className='gallery--container'>
                <div className='gallery--section--container'>
                    <div className='gallery--section--row--container'>

                        <div className='gallery--section--row'>
                        {data?.gallery?.map((item, index) => (
                                    <div key={index} className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={item.src} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">{item.title}</h3>
                                                <p className="gallery--section--description">{item.description}</p>
                                                <p className="gallery--section--description">{item.date}</p>
                                            </div>
                                        </div>     
                                    </div>
                                ))}
                        </div>
                    </div>                   
                </div>
                
            </div>
            <WhatsAppIcon />
        </div>       
    );
}

export default Gallery;