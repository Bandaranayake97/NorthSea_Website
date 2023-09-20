import React from 'react'
import './Place.css'

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Place = ({ props }) => {
    return (
        <div className='place-card'>
            <div className='place-card-image'>
                <img src={props.image} className='place-image' alt='place 01' />
            </div>
            <div class="place-card-content">
                <h4 className='place-title'>{props.place_title}</h4>
                <div className='address-container'>
                    <AiOutlineHome size={24} color='white' /><p className='place-detail'>{props.place_address}</p>
                </div>
                <div className='phone-container'>
                    <AiOutlinePhone size={24} color='white' /><p className='place-detail'>{props.place_phone}</p>
                </div>
                <a href='/contact-us' className='map-button'>Map</a>
            </div>
        </div>
    )
}

export default Place;