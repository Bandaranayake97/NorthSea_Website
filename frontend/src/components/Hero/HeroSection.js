import React from 'react'
import './HeroSection.css'

const HeroSection = (props) => {
    return (
        <>
            <p>HeroSection</p>
            {props.children}
        </>
    )
}

export default HeroSection