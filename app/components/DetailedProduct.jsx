"use client";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
export default function DetailedProduct({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className='flexs-container'>
      <div className='image-container'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          {data.images.map((image, id) => {
            return (
              <SwiperSlide key={id}>
                <img src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {data.images.map((image, id) => {
            return (
              <SwiperSlide key={id}>
                <img src={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='text-container'>
        <p>{data.keywords.splice(0, 2).join(", ")}💚</p>
        <h1 className='main-heading'>{data.title}</h1>
        <h3 className='main-description'>Description:</h3>
        <h3>{data.detailed_description}</h3>
        <div className='price'>
          <span>$ {data.current_price}</span>
        </div>
        <Link href={`/booking-form/${data.slug}`}>
          <div className='order-now'>
            <button>
              <MdAddShoppingCart size={20} />
              ORDER NOW
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}
