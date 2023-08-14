import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import Link from "next/link";

export default function Products({ title, bg, data }) {
  return (
    <section
      id='trends'
      className='trending-section mg-remove'
      style={{ background: bg }}
    >
      <div className='trending-title'>
        <h1>{title}</h1>
        <a href='#'>See More</a>
      </div>
      <div className='trending-grid'>
        {data?.splice(0, 5).map((product, i) => {
          return (
            <Link key={i} href={`/product/${product.slug}`}>
              <div className='card'>
                <div className='upper-icons'>
                  <div className='span-class'>
                    <span className='percentage'>-5%</span>
                    <span>NEW</span>
                  </div>
                  <FiShare className='heart' size={25} />
                </div>
                <div className='image'>
                  <Image src={product.image} alt={product.slug} fill />
                </div>
                <h2>{product.title}</h2>
                <p>{product.brief_description}</p>
                <div className='button-component'>
                  <h3>$ {product.current_price}</h3>
                  <div className='buy-now'>
                    <AiOutlineShoppingCart />
                    Buy
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
