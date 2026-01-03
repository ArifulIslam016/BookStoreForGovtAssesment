import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import fristimg from '../../assets/b1.jpg'
import second from '../../assets/b2.jpg'
import third from '../../assets/b3.jpg'

export default function Slider() {
  return (
    <>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper max-h-[400px]"
      >
        <SwiperSlide><img className='rounded-2xl' src={fristimg} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={second} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={third} alt="" /></SwiperSlide>
         
      </Swiper>
    </>
  );
}
