import React from 'react'
import './HeroSection.css'

const HeroSection = (props) => {
    return (
        <>
            <div className='hero'>
                <div className='section-content-wrapper'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default HeroSection