import React from 'react'
import "./HomePage.css"

import PlaceCard from '../../components/Place/Place'
import ArticleCard from '../../components/Article/Article'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import product_img_01 from "../../images/product-photo-01-in-home-page.png"
import product_img_02 from "../../images/product-photo-02-in-home-page.png"
import product_img_03 from "../../images/product-photo-03-in-home-page.png"
import product_img_04 from "../../images/product-photo-04-in-home-page.png"
import product_img_05 from "../../images/product-photo-05-in-home-page.png"
import product_img_06 from "../../images/product-photo-06-in-home-page.png"
import product_img_07 from "../../images/product-photo-07-in-home-page.png"

function HomePage() {
  return (
    <div>
      <div className='home-page'>
        <div className='home-hero'>
          <div className='section-content-container'>
            <h1 className='hero-text'><span className='block-text'>Precision Nets for Precision Fishing</span></h1>
            <p className='hero-para'>Crafting Success, One Net at a Time<span className='new-line'> Elevate Your Fishing Experience with Our Premium Nets!</span></p>
          </div>
        </div>
        <div className="our-story">
          <div className='section-content-container'>
            <h2 className='section-title'>Our Story</h2>
            <p className='our-story-content'>"From humble beginnings on the shores of North Sea, our company embarked on a journey in [Year]. Over the decades, we've evolved into a trusted name in fishing nets. Our dedication to craftsmanship and innovation has driven us to create nets that withstand the rigors of the sea, empowering fishermen worldwide. Join us as we share our story of passion, growth, and commitment to providing the finest fishing nets."</p>

          </div>
        </div>
        <div className='discover-us'>
          <div class="section-content-container">
            <h2 className='section-title'>Discover Us</h2>
            <div className='places-carousel'>
              <PlaceCard />
              {/* <PlaceCard /> */}
            </div>
          </div>
        </div>
        <div className='our-products'>
          <div class="section-content-container">
            <h2 className='section-title'>Our Products</h2>
            <div className='product-image-carousel'>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={4}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <img src={product_img_01} className='product-img' alt="product 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_02} className='product-img' alt="product 02" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_03} className='product-img' alt="product 03" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_04} className='product-img' alt="product 04" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_05} className='product-img' alt="product 05" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_06} className='product-img' alt="product 06" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product_img_07} className='product-img' alt="product 07" />
                </SwiperSlide>

                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>

            </div>
            <a className='more-details-button' href='/our-products'>More Details</a>
          </div>
        </div>
        <div className='featured-articles'>
          <div class="section-content-container">
            <h2 className='section-title'>Featured Articles</h2>
            <div className='article-carousel'>
              <ArticleCard />
              {/* <ArticleCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage