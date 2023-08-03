"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";

export default function DetailedProduct({ data }) {
  return (
    <section className='flex-container'>
      <div className='image-container'>
        <div className='used-image'>
          <Image src={data.image} alt={data.title} fill />
        </div>
      </div>
      <div className='text-container'>
        <p>{data.keywords.splice(0, 2).join(", ")}💚</p>
        <h1 className='main-heading'>{data.title}</h1>
        <h3 className='main-description'>Description:</h3>
        <h3>{data.detailed_description}</h3>
        <div className='price'>
          <span>$ {data.current_price}</span>
        </div>
        <div className='order-now'>
          <button>
            <MdAddShoppingCart size={20} />
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
