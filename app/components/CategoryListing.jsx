"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Liquer from "../../public/images/liquer.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function CategoryListing() {
  return (
    <section className='category-listing'>
      <div className='real-section'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className='categorySwiper'
        >
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Spirits</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Champegane & Sparkling</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Wine</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Liquer</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-image'>
              <Image src={Liquer} alt='the alt tag goes here' fill />
            </div>
            <h2>Whiskey</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
