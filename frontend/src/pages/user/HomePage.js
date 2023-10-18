import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomePage.css"

import PlaceCard from '../../components/Place/Place'
import ArticleCard from '../../components/Article/Article'

import place_image_01 from '../../images/place-01.png'
import place_image_02 from '../../images/place-02.png'
import place_image_03 from '../../images/place-03.png'
import place_image_04 from '../../images/place-03.png'

import article_image_01 from '../../images/article-01.png'
import article_image_02 from '../../images/article-02.png'
import article_image_03 from '../../images/article-03.png'
import article_image_04 from '../../images/article-03.png'

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
import HeroSection from '../../components/Hero/HeroSection';

function HomePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='home-page'>
        <div className='home-hero'>
          <div className='section-content-wrapper'>
            <h1 className='hero-text-home'><span className='block-text'>Precision Nets for Precision Fishing</span></h1>
            <p className='hero-para'>Crafting Success, One Net at a Time<span className='new-line'> Elevate Your Fishing Experience with Our Premium Nets!</span></p>
          </div>
        </div>
        {/* <HeroSection><p>Children</p></HeroSection> */}
        <div className="our-story">
          <div className='section-content-wrapper'>
            <h2 className='section-title'>Our Story</h2>
            <p className='our-story-content'>"From humble beginnings on the shores of North Sea, our company embarked on a journey in [Year]. Over the decades, we've evolved into a trusted name in fishing nets. Our dedication to craftsmanship and innovation has driven us to create nets that withstand the rigors of the sea, empowering fishermen worldwide. Join us as we share our story of passion, growth, and commitment to providing the finest fishing nets."</p>

          </div>
        </div>
        <div className='discover-us'>
          <div class="section-content-wrapper">
            <h2 className='section-title'>Discover Us</h2>
            <div className='places-carousel'>
              <Slider {...settings} className='places-slider'>
                <PlaceCard className="place-card" props={{ image: place_image_01, place_title: "Lunuwila", place_address: "No. 45, North Sea, Colombo.", place_phone: "0113434377" }} />
                <PlaceCard className="place-card" props={{ image: place_image_02, place_title: "Weerawila", place_address: "No. 45, North Sea, Colombo.", place_phone: "0113434377" }} />
                <PlaceCard className="place-card" props={{ image: place_image_03, place_title: "Jaffna", place_address: "No. 45, North Sea, Colombo.", place_phone: "0113434377" }} />
                <PlaceCard className="place-card" props={{ image: place_image_04, place_title: "Jaffna", place_address: "No. 45, North Sea, Colombo.", place_phone: "0113434377" }} />
              </Slider>
            </div>
          </div>
        </div>
        <div className='our-products'>
          <div class="section-content-wrapper">
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
                className="swiper-container"
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
          <div class="section-content-wrapper">
            <h2 className='section-title'>Featured Articles</h2>
            <div className='articles-carousel'>
              <Slider {...settings} className='articles-slider'>
                <ArticleCard className="article-card" props={{ image: article_image_01, article_title: "Teaching the Next Generation: Fishing Net Donations for Youth Education", article_content: "North Sea LTD believes in nurturing the passion for fishing among young minds. Our fishing net donation program supports educational initiatives for aspiring fishermen." }} />
                <ArticleCard className="article-card" props={{ image: article_image_02, article_title: "Empowering Coastal Communities Through Fishing Net Donations", article_content: " At North Sea LTD, we are dedicated to making a positive impact on coastal communities through our fishing net donation initiatives." }} />
                <ArticleCard className="article-card" props={{ image: article_image_03, article_title: "Supporting Sustainable Fishing: Our Fishing Net Recycling Program", article_content: "Sustainability is a cornerstone of North Sea LTD's ethos. Our innovative fishing net recycling program aims to minimize marine pollution." }} />
                <ArticleCard className="article-card" props={{ image: article_image_04, article_title: "Supporting Sustainable Fishing: Our Fishing Net Recycling Program", article_content: "Sustainability is a cornerstone of North Sea LTD's ethos. Our innovative fishing net recycling program aims to minimize marine pollution." }} />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage