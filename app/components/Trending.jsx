import React from "react";
import Liquer from "../../public/images/Whiskey.png";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function Trending() {
  return (
    <section className='trending-section'>
      <div className='trending-title'>
        <h1>Trending Today</h1>
      </div>
      <div className='trending-grid'>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='upper-icons'>
            <div className='span-class'>
              <span className='percentage'>-5%</span>
              <span>NEW</span>
            </div>
            <AiOutlineHeart size={25} />
          </div>
          <div className='image'>
            <Image
              src={Liquer}
              alt='the alt tag goes here'
              width={50}
              height={50}
            />
          </div>
          <h2>Wine</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, suscipit.
          </p>
          <div className='button-component'>
            <h3>$3000</h3>
            <a href='#'>
              <AiOutlineShoppingCart />
              Buy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
