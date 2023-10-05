import React from 'react'
import './MemberCard.css'




const MemberCard = ({ props }) => {
    return (
        <div className='description-card'>
            <div >
                <img src={props.image} className='mem-image' alt='IMG' />
            </div>
            <div class="description-card-content">
                <h4 className='member-name'>{props.member_name}</h4>
                <h4 className='member-post'>{props.member_post}</h4>
                <h4 className='member-ministry'>{props.member_ministry}</h4>
                <h4 className='member-tel'>Tel : {props.member_tel}</h4>
                <h4 className='member-fax'>Fax : {props.member_fax}</h4>
                <h4 className='member-mail'>E-mail : {props.member_mail}</h4>
            </div>
        </div>
    )
}

export default MemberCard;