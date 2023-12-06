import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function Banner() {
  return (<div className='container my-10 mx-auto h-96 rounded-md'>
    <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='h-screen rounded-md'
    >
      <SwiperSlide><img src='/img/banner/img-1.jpg' alt='Nicté Club'/></SwiperSlide>
      <SwiperSlide><img src='/img/banner/img-2.jpg' alt='Nicté Club'/></SwiperSlide>
      <SwiperSlide><img src='/img/banner/img-3.jpg' alt='Nicté Club'/></SwiperSlide>
    </Swiper>
  </div>)
}
