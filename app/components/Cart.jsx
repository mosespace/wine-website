"use client";
import React from "react";
import Image from "next/image";
import useableImage from "../../public/images/bg2.jpg";
import Link from "next/link";
import { useApi } from "../context/context";

export default function Cart({ data }) {
  const { cart } = useApi();
  const { removeFromCart } = useApi();
  const totalPrice = cart.reduce(
    (total, item) => total + item.current_price,
    0
  );
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <section className='cart-section'>
      <div className='cart-content'>
        <h1>Cart({cart.length})</h1>
        {data.map((item) => {
          return (
            <div className='cart-card'>
              <div className='card-col-1'>
                <div className='cart-card-image'>
                  <Image src={item.image} alt={item.title} fill />
                </div>
                <div className='cart-product-info'>
                  <h1>{item.title}</h1>
                  <p>{item.brief_description}</p>
                  <div className='remove'>
                    <h3>$ {item.current_price}</h3>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='cart-summary'>
        <h1>CART SUMMARY</h1>
        <div className='price'>
          <h3>Sub Total</h3>
          <span>$ {roundedTotalPrice}</span>
        </div>
        <button>CHECKOUT{roundedTotalPrice}</button>
      </div>
    </section>
  );
}
