import Link from "next/link";
import React from "react";
import { BsCart3, BsPaypal, BsSearch, BsTelephoneFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className='top-nav'>
        <div className='flex-works'>
          <div>
            <ul>
              <h1>Logo</h1>
              <li>
                <BsTelephoneFill className='inline-icon' />
                +(256) 770981193
              </li>
              <li>
                <a className='search-btn' href='#'>
                  <BsSearch className='icon' />
                  <input
                    className='search-field'
                    type='text'
                    placeholder='Search...'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='social-media'>
          <BsCart3 className='icon2' />
          <a className='pay-now' href='#'>
            <BsPaypal className='icon2' size={20} />
            Pay Now
          </a>
        </div>
      </div>

      <div className="down-navbar">
        <Link href="#">
            <ul>
                <li>Whiskey</li>
                <li>Spirit</li>
                <li>Champegane & Sparkling</li>
                <li>Wine</li>
                <li>Liqueurs</li>
                <li>Beer and Cider</li>
                <li>Mixers & Soft Drinks</li>
            </ul>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
