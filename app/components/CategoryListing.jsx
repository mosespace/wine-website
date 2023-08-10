"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function CategoryListing({ data}) {
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
          {data.map((category, id) => {
            return (
              <SwiperSlide key={id}>
                <Link href={`/categories/${category.slug}`}>
                  <div className='slide-image'>
                    <Image
                      src={category.image}
                      alt={category.description}
                      fill
                    />
                  </div>
                  <h2>{category.title}</h2>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
