import React from 'react'
import './Place.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Place = () => {
    return (
        <div className='place-card'>
            <div className='place-card-image'></div>
            <div class="place-card-content">
                <h4 className='place-title'>Lunuwila</h4>
                <div className='address-container'>
                    <AiOutlineHome size={24} color='white' /><p className='place-detail'>No. 45, North Sea, Colombo.</p>
                </div>
                <div className='phone-container'>
                    <AiOutlinePhone size={24} color='white' /><p className='place-detail'>(+94)113434377</p>
                </div>
            </div>
        </div>
    )
}

export default Place;