import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function Products({ title, bg, data }) {
  return (
    <section className='trending-section' style={{ background: bg }}>
      <div className='trending-title'>
        <h1>{title}</h1>
        <a href='#'>See More</a>
      </div>
      <div className='trending-grid'>
        {data?.splice(0, 5).map((product, i) => {
          return (
            <Link href={`/product/${product.slug}`}>
              <div className='card' key={i}>
                <div className='upper-icons'>
                  <div className='span-class'>
                    <span className='percentage'>-5%</span>
                    <span>NEW</span>
                  </div>
                  <AiOutlineHeart className='heart' size={25} />
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
