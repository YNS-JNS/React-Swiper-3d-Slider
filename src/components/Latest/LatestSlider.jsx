import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import trending Styles
import "./latestSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from '../Product/Card';

function LatestSlider() {
    return (
        <div className="container">
            <h1 className="heading">Latest Products</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
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

                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='latest_slides'>
                    <Card />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                        <FaArrowRight />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default LatestSlider;