import React from 'react'
import './VissionMission.css'


const VissionMission = ({ props }) => {
    return (
        <div className='vm-card'>
            <div className='vm-image'>
                <img src={props.image} className='image' alt='IMG' />
            </div>
            <div class="vm-card-content">
            <h4 className='title'>{props.title}</h4>
                <p className='content'>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default VissionMission;