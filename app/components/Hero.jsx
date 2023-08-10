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
  const sliderContent = [
    {
      text: "Raise a Toast to Unwind and Celebrate Life's Joys.",
      path: "/",
      img: Slider2,
    },
    {
      text: "Celebrating Life's Beauty with Wine, Women, and Wonderful Times.",
      path: "/",
      img: Slider3,
    },
    {
      text: "Sip, Savor, Repeat: Embrace the Elegance of Wine Moments.",
      path: "/",
      img: Slider,
    },
  ];
  return (
    <section className='real-hero-section'>
      <div className='hero-section'>
        <div className='hero-slider'>
          <Swiper // This is the whole Swiper Section
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              // type: "progressbar",
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            {sliderContent.map((slide) => {
              return (
                <SwiperSlide>
                  <div className='slide-content'>
                    <div className='hero-text'>
                      {/* <img
                        src={
                          "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.328acc3f.png&w=2048&q=75"
                        }
                        alt='Wines'
                        width='100'
                        height='100'
                      /> */}
                      <h1>{slide.text}</h1>
                      <a href={slide.path} className='read-more'>
                        Learn More <AiOutlineArrowRight />
                      </a>
                    </div>
                    <div className='slider-image'>
                      <Image src={slide.img} alt='This is a trial image' fill />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
