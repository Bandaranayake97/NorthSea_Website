import React from 'react';
import './JoinUs.css'
import data from "../../data/index.json";

function JoinUs() {

   

    return (
        <div>
            <div className='Joinus--hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Join Us</span></h1>
                </div>
            </div>

            <div className='Joinus--section--container'>
                <div className='joinus--section'>
                {data?.joinus?.map((item, index) => (
                    <div key={index} className='joinus--section--card'>

                            <div className='joinus--section--img'>
                                <h1 className='joinus--title'>Join Us</h1>
                            </div>

                            
                            <div className='joinus--section--description'>
                                <p>{item.description}</p>
                            </div>
                            <div className="joinus--section--btn--container">   
                                <button className="btn btn-outline-primary"
                                onClick = {() => {
                                    window.location.href = '/contact-us';
                                    window.scrollTo(0, document.documentElement.scrollTop);
                                }}
                                >Join Us</button>
                            </div>               

                    </div>

                ))}
                </div>
            </div>
        </div>
    );
}

export default JoinUs;