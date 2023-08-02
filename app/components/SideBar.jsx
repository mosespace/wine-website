import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Use from "../../public/images/Spirits.png";
import { GrFormNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
function SideBar() {
  return (
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
  );
}

export default SideBar;
