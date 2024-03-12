import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/global.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper main-body"
      >
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide >
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden rounded-lg h-60 w-40'>
          <img className = 'h-full w-full object-cover' src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
