import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import featured Styles
import "./featuredSlider.css";
// Import React Router Dom
// import { Link } from "react-router-dom";
// Import Images
import img1 from '/smart-watch1.png'


const FeaturedSlider = () => {

  const products = [
    {
      id: 1, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 2, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 3, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 4, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 5, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 6, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },

  ];

  return (
    <>
      <div className='container mx-auto'>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-1xl font-medium tracking-tight text-black">Featured Products</h2>
          <a href="#" className="hidden text-1xl font-semibold text-blue-600 hover:text-cyan-500 sm:block">
            See more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      <Swiper
        modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
        loop={true}
        speed={500}
        spaceBetween={150}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 50,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
        }}
        className="featured_swiper"
      >
        {
          products.map((product, index) => {
            return (
              <SwiperSlide key={index} className="featured_slides">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="featured_title">{product.name}</div>
                  <figure className="featured_img">
                    <img src={product.image} alt={product.name} />
                  </figure>
                  <h2 className="products_price">
                    <span className="final_price">{product.newPrice}</span> &nbsp;
                    <small>
                      <del className="old_price">{product.oldPrice}</del>
                    </small>
                  </h2>
                </a>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
};

export default FeaturedSlider;