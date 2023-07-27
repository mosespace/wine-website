"use client";
import Image from "next/image";
import Slider from "../../public/images/bg3.jpg";
import Slider2 from "../../public/images/bg2.jpg";
import Slider3 from "../../public/images/bg1.jpg";
import React, { useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-section'>
        <div className='hero-text'>
          <h2 className='logo'>LOGO</h2>
          <h1>-10% on Non-Alcoholic Spirits LYYRE's</h1>
          <a href='#' className='read-more'>
            Learn More <AiOutlineArrowRight />
          </a>
        </div>
        <div className='hero-slider'>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image src={Slider} alt='This is a trial image' fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider2} alt='This is a trial image' fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Slider3} alt='This is a trial image' fill />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
