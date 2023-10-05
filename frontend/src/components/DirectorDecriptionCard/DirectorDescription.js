import React from 'react'





const DirectorDescriptionCard = ({ props }) => {
    return (
        <div className='directD-card'>
            <div class="description-card-content">
                <h4 className='directD-name'>{props.member_name}</h4>
                <h4 className='directD-post'>{props.member_post}</h4>
                <h4 className='directD-ministry'>{props.member_ministry}</h4>
                <h4 className='directD-tel'>Tel : {props.member_tel}</h4>
                <h4 className='directD-fax'>Fax : {props.member_fax}</h4>
                <h4 className='directD-mail'>E-mail : {props.member_mail}</h4>
            </div>
        </div>
    )
}

export default DirectorDescriptionCard;