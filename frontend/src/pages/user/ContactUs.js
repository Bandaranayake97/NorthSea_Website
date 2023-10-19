import React, { useState } from 'react'
import './ContactUs.css'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressBook, FaMapMarkerAlt } from 'react-icons/fa';

import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';

import HeroSection from '../../components/Hero/HeroSection';


function ContactUs() {

    const [selectedLocation, setSelectedLocation] = useState(1);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            validationErrors.email = 'Enter a valid email address';
        }
        if (!formData.subject) {
            validationErrors.subject = 'Subject is required';
        }
        if (!formData.message) {
            validationErrors.message = 'Message is required';
        }
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            validationErrors.phone = 'Enter a valid phone number';
        }

        if (Object.keys(validationErrors).length === 0) {

            console.log('Form data:', formData);
        } else {
            setErrors(validationErrors);
        }
    };
    return (

        <div className='contact-page'>
            {/* <div className='contact-hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Contact Us</span></h1>
                </div>
            </div> */}
            <HeroSection>
                <h1 className='contact-us-text'><span className='product-text'>Contact Us</span></h1>
            </HeroSection>

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
                            <button className='icon-button'
                                onClick={() => setSelectedLocation(1)}
                            ><FaMapMarkerAlt className='icon' /> </button>
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
                            <button className='icon-button'
                                onClick={() => setSelectedLocation(2)}
                            ><FaMapMarkerAlt className='icon' /> </button>
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
                            <button className='icon-button'
                                onClick={() => setSelectedLocation(3)}
                            ><FaMapMarkerAlt className='icon' /> </button>
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
                            <button className='icon-button'
                                onClick={() => setSelectedLocation(4)}
                            ><FaMapMarkerAlt className='icon' /> </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='map-container'>

                {
                    selectedLocation === 1 ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.386086862832!2d79.85980971454164!3d6.927246600867556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2599d1d5d22a9%3A0x2e6b1c03bee33576!2sNorthsea%20Ltd!5e0!3m2!1sen!2slk!4v1695628843771!5m2!1sen!2slk"
                            width="100%"
                            height="auto"
                            style={{
                                border: '4px solid #ccc',
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>


                    ) : (selectedLocation === 2 ? (
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31655.663534851094!2d79.82512571083983!3d7.3586115000000065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c24e4555e929%3A0x71ba74fdb750d1de!2sNorthsea%20Ltd%20-%20Lunuwila%20Factory!5e0!3m2!1sen!2slk!4v1695632022411!5m2!1sen!2slk"
                            width="100%"
                            height="auto"
                            style={{
                                border: '4px solid #ccc',
                            }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    ) : (selectedLocation === 3 ? (
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.329539766233!2d79.82173021083985!3d6.885669500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc4825fae5f%3A0x1bbbac6250ffc953!2sNorthsea%20Ltd!5e0!3m2!1sen!2slk!4v1695632289075!5m2!1sen!2slk"
                            width="100%"
                            height="auto"
                            style={{
                                border: '4px solid #ccc',
                            }}
                            allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Maps Location3"
                        ></iframe>
                    ) : (

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.560129548874!2d80.62837646857456!3d7.2907820977026265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367cf59506905%3A0x8a5044f4e967decf!2sJaffna%20bus%20stop!5e0!3m2!1sen!2slk!4v1695632413651!5m2!1sen!2slk"
                            width="100%"
                            height="auto"
                            style={{
                                border: '4px solid #ccc',
                            }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        >
                        </iframe>
                    )))
                }
            </div>

            <div className='contact-form-section'>
                <div className='image-container'></div>
                <div className='form-container'>
                    <h1 className='form-title'>Send us a Message</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='name' className='form-label'>
                                    Name
                                </label>
                                <input
                                    id='name'
                                    type='text'
                                    name='name'
                                    className='form-input'
                                    placeholder='Enter your name'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className='error-message'>{errors.name}</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone' className='form-label'>
                                    Phone Number
                                </label>
                                <input
                                    id='phone'
                                    type='tel'
                                    name='phone'
                                    className='form-input'
                                    placeholder='Enter phone number'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <span className='error-message'>{errors.phone}</span>}
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='subject' className='form-label'>
                                    Subject
                                </label>
                                <input
                                    id='subject'
                                    type='text'
                                    name='subject'
                                    className='form-input'
                                    placeholder='Enter the subject'
                                    value={formData.subject}
                                    onChange={handleChange}

                                />
                                {errors.subject && <span className='error-message'>{errors.subject}</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email' className='form-label'>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    className='form-input'
                                    placeholder='Enter your email'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                {errors.email && <span className='error-message'>{errors.email}</span>}
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='message' className='form-label'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                className='form-textarea'
                                placeholder='Write your message here...'
                                value={formData.message}
                                onChange={handleChange}

                            />
                            {errors.message && <span className='error-message'>{errors.message}</span>}
                        </div>

                        <button type='submit' className='submit-button'>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
            <WhatsAppIcon />
        </div>
    );
}

export default ContactUs;