import React from "react";
import { CgFormatJustify, CgMenuGridR } from "react-icons/cg";
import { BsListCheck, BsListUl } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Use from "../../public/images/Spirits.png";

import { GrFormNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

export default async function DetailedCategories({ data }) {
  return (
    <div className='container'>
      <div className='left-side-bar'>
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
          <div className='price-filter'>
            <h3>Price</h3>
            <div className='price_slider_amount'>
              <button>Filter</button>
            </div>
          </div>
        </div>
      </div>
      <div className='main-site-map'>
        <div className='first-line'>
          <h1>Wines</h1>
          <p>Showing all 17 results</p>
        </div>
        <div className='categories'>
          <div className='cat-1'>
            <Link href='#'>
              <h3>Hiscence 32" Full HD Smart TV with digital</h3>
              <div className='cat-img'>
                <Image src={Use} alt='title goes here' fill />
              </div>
              <div className='price'>
                <h1>UGX 650,000</h1>
                <AiOutlineShoppingCart />
              </div>
            </Link>
          </div>
          <div className='cat-1'>
            <h3>Hiscence 32" Full HD Smart TV with digital</h3>
            <div className='cat-img'>
              <Image src={Use} alt='title goes here' fill />
            </div>
            <div className='price'>
              <h1>UGX 650,000</h1>
              <AiOutlineShoppingCart className='icon' />
            </div>
          </div>
          <div className='cat-1'>
            <h3>Hiscence 32" Full HD Smart TV with digital</h3>
            <div className='cat-img'>
              <Image src={Use} alt='title goes here' fill />
            </div>
            <div className='price'>
              <h1>UGX 650,000</h1>
              <AiOutlineShoppingCart className='icon' />
            </div>
          </div>
          <div className='cat-1'>
            <h3>Hiscence 32" Full HD Smart TV with digital</h3>
            <div className='cat-img'>
              <Image src={Use} alt='title goes here' fill />
            </div>
            <div className='price'>
              <h1>UGX 650,000</h1>
              <AiOutlineShoppingCart className='icon' />
            </div>
          </div>
          <div className='cat-1'>
            <h3>Hiscence 32" Full HD Smart TV with digital</h3>
            <div className='cat-img'>
              <Image src={Use} alt='title goes here' fill />
            </div>
            <div className='price'>
              <h1>UGX 650,000</h1>
              <AiOutlineShoppingCart className='icon' />
            </div>
          </div>
          <div className='cat-1'>
            <h3>Hiscence 32" Full HD Smart TV with digital</h3>
            <div className='cat-img'>
              <Image src={Use} alt='title goes here' fill />
            </div>
            <div className='price'>
              <h1>UGX 650,000</h1>
              <AiOutlineShoppingCart className='icon' />
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Hello {data.slug} </h1> <p>Hello</p> */}
    </div>
  );
}
