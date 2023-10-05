import React from 'react'
import './DirectorCard.css'




const DirectorCard = ({ props }) => {
    return (
        <div className='direct-card'>
            <div >
                <img src={props.image} className='direct-image' alt='IMG' />
            </div>
            <div class="description-card-content">
                <h4 className='direct-name'>{props.member_name}</h4>
                <h4 className='direct-post'>{props.member_post}</h4>
                <h4 className='direct-ministry'>{props.member_ministry}</h4>
                <h4 className='direct-tel'>Tel : {props.member_tel}</h4>
                <h4 className='direct-fax'>Fax : {props.member_fax}</h4>
                <h4 className='direct-mail'>E-mail : {props.member_mail}</h4>
            </div>
        </div>
    )
}

export default DirectorCard;