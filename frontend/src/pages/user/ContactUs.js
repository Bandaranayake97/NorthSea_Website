import React from 'react'
import './ContactUs.css'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressBook, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
    return (

        <div className='contact-page'>
            <div className='contact-hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Contact Us</span></h1>
                </div>
            </div>

            <div className='contact-content'>
                <div className='section-container'>
                    <div className='card'>
                        <h1 className='section-title1'>Colombo</h1>
                        <p className='section-title2'>-Head Office-</p>
                        <div className='sub-content'>
                            <span className='icon'>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            <h1 className='contact-title3'><FaRegAddressBook size={18} />  Address</h1>
                            <p className='contact-text'>No. 45, North Sea, Colombo</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><BsTelephone size={18} />  Telephone</h1>
                            <p className='contact-text'>0113434377</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><HiOutlineMail size={20} />  E-mail</h1>
                            <p className='contact-text'>northsea@gmail.com </p>
                        </div>
                        <div className='sub-content-button '>
                            <h1 className='contact-title4'>View the Location</h1>
                            <button className='icon-button' ><FaMapMarkerAlt className='icon' /> </button>
                        </div>
                    </div>
                </div>
                <div className='section-container'>
                    <div className='card'>
                        <h1 className='section-title1'>Lunuwila</h1>
                        <p className='section-title2'>-Factory-</p>
                        <div className='sub-content'>
                            <span className='icon'>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            <h1 className='contact-title3'><FaRegAddressBook size={18} />  Address</h1>
                            <p className='contact-text'>No. 45, North Sea, Colombo</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><BsTelephone size={18} />  Telephone</h1>
                            <p className='contact-text'>0113434377</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><HiOutlineMail size={20} />  E-mail</h1>
                            <p className='contact-text'>northsea@gmail.com </p>
                        </div>
                        <div className='sub-content-button '>
                            <h1 className='contact-title4'>View the Location</h1>
                            <button className='icon-button' ><FaMapMarkerAlt className='icon' /> </button>
                        </div>
                    </div>
                </div>
                <div className='section-container'>
                    <div className='card'>
                        <h1 className='section-title1'>Weerawila</h1>
                        <p className='section-title2'>-Factory-</p>
                        <div className='sub-content'>
                            <span className='icon'>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            <h1 className='contact-title3'><FaRegAddressBook size={18} />  Address</h1>
                            <p className='contact-text'>No. 45, North Sea, Colombo</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><BsTelephone size={18} />  Telephone</h1>
                            <p className='contact-text'>0113434377</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><HiOutlineMail size={20} />  E-mail</h1>
                            <p className='contact-text'>northsea@gmail.com </p>
                        </div>
                        <div className='sub-content-button '>
                            <h1 className='contact-title4'>View the Location</h1>
                            <button className='icon-button' ><FaMapMarkerAlt className='icon' /> </button>
                        </div>
                    </div>
                </div>
                <div className='section-container'>
                    <div className='card'>
                        <h1 className='section-title1'>Jaffna</h1>
                        <p className='section-title2'>-Factory-</p>
                        <div className='sub-content'>
                            <span className='icon'>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            <h1 className='contact-title3'><FaRegAddressBook size={18} />  Address</h1>
                            <p className='contact-text'>No. 45, North Sea, Colombo</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><BsTelephone size={18} />  Telephone</h1>
                            <p className='contact-text'>0113434377</p>
                        </div>
                        <div className='sub-content'>
                            <h1 className='contact-title3'><HiOutlineMail size={20} />  E-mail</h1>
                            <p className='contact-text'>northsea@gmail.com </p>
                        </div>
                        <div className='sub-content-button '>
                            <h1 className='contact-title4'>View the Location</h1>
                            <button className='icon-button' ><FaMapMarkerAlt className='icon' /> </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='map-container'>
                
            </div>

        </div>
    );
}

export default ContactUs;