import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import newArrival Styles
import "./newArrival.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import images
import slide_image_1 from '/smart-watch1.png';
import slide_image_2 from '/smart-watch2.png';
import slide_image_3 from '/electro-casque-blue.png';
import slide_image_4 from '/electro-ecouteurs.png';


function NewArrival() {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                speed={500} // +
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
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]} // +
                className="swiper_container"
            >
                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_1} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_2} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>
                
                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_3} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_4} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_1} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_1} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_1} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="trending_slides">
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >

                        <div className="trending_title">
                            {/* {product.name} */}
                            Headphones
                        </div>
                        <figure className="trending_img">
                            <img
                                src={slide_image_1} alt="slide_image"
                            />
                        </figure>
                        <h2 className="trending_products_price">
                            <span className="trending_final_price">
                                {/* {product.newPrice} */}
                                49
                            </span> &nbsp;
                            <small>
                                <del className="trending_old_price">
                                    {/* {product.oldPrice} */}
                                    199
                                </del>
                            </small>
                            <h2 className="trending_badge_title text-xl ml-2">
                                <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md text-3xl">NEW 🔥</span>
                            </h2>
                        </h2>
                        <div className='flex justify-center items-center'>

                            {/* ___ Add To Cart Button ___ */}
                            <button className='bg-indigo-600 hover:bg-indigo-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition w-1/2'
                            >
                                Buy Now
                            </button>
                        </div>
                    </a>
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

export default NewArrival