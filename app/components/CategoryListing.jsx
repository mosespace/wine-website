"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Liquer from "../../public/images/liquer.png";
import Champagane from "../../public/images/Champagane.png";
import Spirits from "../../public/images/Spirits.png";
import Whiskey from "../../public/images/Whiskey.png";
import Wine from "../../public/images/Wine.png";

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
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className='categorySwiper'
        >
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Spirits</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Champegane & Sparkling</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Wine</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Liquer</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />{" "}
            <h2>Whiskey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
            <h2>Whiskey</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

{
  /* <div className='category-card'>
<div className='card-slider'>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>
</div>
{/* <div className='card-slider'>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
    possimus Hello.
  </p>

</div> */
}
