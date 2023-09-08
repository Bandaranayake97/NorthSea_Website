import React from 'react'
import "./HomePage.css"
import { LuSearch } from 'react-icons/lu'
import { MdArrowForward } from 'react-icons/md'

function HomePage() {
  return (
    <div>
      <div className='home-page'>
        <h1 className='hero-text'><span className='block-text'>Precision Nets for Precision Fishing</span></h1>
        <p className='hero-para'>Crafting Success, One Net at a Time<span className='new-line'> Elevate Your Fishing Experience with Our Premium Nets!</span></p>

        <button className='explore-button' onClick={() => {  window.location.href = '/planets'} }>
          <span className='button-text'>Explore</span><MdArrowForward /></button>
      </div>
    </div>
  )
}

export default HomePage