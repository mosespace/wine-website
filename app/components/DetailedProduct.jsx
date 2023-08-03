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

      {/* <div className='left-side-bar'>
        <div className='category-list'>
          <div className='show-all-cat-dropdown'>
            <span>
              Show All Category <GrFormNext />
            </span>
          </div>
          <div className='category-title' href='#'>
            Television
          </div>
          <ul>
            <a href='#'>4K UHD TVS</a>
            <a href='#'>Digital TVS</a>
            <a href='#'>Smart TVS</a>
            <a href='#'>ULED TVS</a>
          </ul>
        </div>
        <div className='filter-section'>
          <div className='electro_product_filter'>
            <h3>Filters</h3>
          </div>
          <div className='brands'>
            <h3>Brands</h3>
            <form action='#' className='checkmark'>
              <input
                type='checkbox'
                id='checkmark'
                name='checkmark'
                value='check'
              />
              <label for='checkmark'>Hiscense</label>
            </form>
          </div>
        </div>
      </div> */}
      {/* <div className='main-site-map'>
        <div className='categories'>
          <Image src={data.image} alt={data.brief_description} fill />
        </div>
        <div className='real-text'>
          <p>{data.keywords.splice(0, 2).join(", ")}💚</p>
          <h1 className='main-heading'>{data.title}</h1>
          <h3 className='main-description'>Description:</h3>
          <h3>{data.detailed_description}</h3>
        </div>
      </div> */}
    </section>
  );
}
