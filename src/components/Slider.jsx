
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

function Slider() {


  return (
   
   

// import required modules



  
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw584fcdaf/images/GotaGirls-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw7a8c214f/images/homepage/001-9-28-2023-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwa39ec040/images/Fall-Edit-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw13a85696/images/Batik-Desk-Web-Banner-1920x825.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw59257c22/images/SmartCasuals-Desk-Web-Banner-1920x825.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw59601e81/images/Sale-Desk-Web-Banner-1920x825-3.jpg" alt="" /></SwiperSlide>
     
      </Swiper>
    </>
 

    
  )
}

export default Slider