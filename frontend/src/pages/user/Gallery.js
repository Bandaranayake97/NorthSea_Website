import React from 'react'
import './Gallery.css'

import article_image_01 from '../../images/article-01.png'
import article_image_02 from '../../images/article-02.png'
import article_image_03 from '../../images/article-03.png'

import place_image_01 from '../../images/place-01.png'
import place_image_02 from '../../images/place-02.png'
import place_image_03 from '../../images/place-03.png'
import place_image_04 from '../../images/place-03.png'

function Gallery() {
    return (
        <div className='gallery--section'>
            <div className='gallery--hero'>
                <div className='section-content-container'>
                    <h1 className='hero-text'><span className='block-text'>Gallery</span></h1>
                </div>
            </div>

            <div className='gallery--container'>
                <div className='gallery--section--container'>
                    <div className='gallery--section--row--container'>

                        <div className='gallery--section--row'>
                                <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={article_image_01} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">In this Section there will be a small description about the pitcher</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={place_image_02} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={article_image_03} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                        </div>
{/*Second Row */}

<div className='gallery--section--row'>
                                <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={place_image_04} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={article_image_01} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={article_image_02} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                        </div>
{/* Third ROW */}
                        <div className='gallery--section--row'>
                                <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={place_image_01} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={place_image_02} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='gallery--section--card'>
                                        <div className="gallery--section--img">
                                            <img src={place_image_03} alt="Placeholder" />
                                        </div>                       
                                        <div className='gallery--section--card--content'>
                                            <div>
                                                <h3 className="gallery--section--title">Image Title</h3>
                                                <p className="gallery--section--description">Image small description</p>
                                                <p className="gallery--section--description">Date: 13/12/2022</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                        </div>
                            

                    </div>
                    
                    

                </div>

            </div>

        </div>
        
    );
}

export default Gallery;