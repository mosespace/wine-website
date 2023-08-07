"use client";
import Link from "next/link";
import React from "react";
import trialImage from "../../public/images/bg1.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function BookingForm({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className='booking-form'>
        <div className='booking-image'>
          <div className='product-img'>
            <Image src={data.image} alt={data.slug} fill />
          </div>
        </div>
        <div className='booking-info'>
          <form onSubmit={handleSubmit(data)} />
          <h1>Confrim Your Order</h1>
          <div class='elem-group'>
            <label for='name'>Your Name;</label>
            <input
              type='text'
              id='name'
              {...register("client_name")}
              placeholder='John Doe'
              pattern='[A-Z\sa-z]{3,20}'
              required
            />
          </div>
          <div class='elem-group'>
            <label for='email'>Your E-mail;</label>
            <input
              type='email'
              id='email'
              {...register("vistor_name")}
              placeholder='kiskayemoses@gmail.com'
              required
            />
          </div>
          <div class='elem-group'>
            <label for='phone'>Your Phone;</label>
            <input
              type='tel'
              id='phone'
              {...register("client_phone")}
              placeholder='+256-770981193'
              pattern='(\d{3})-?\s?(\d{3})-?\s?(\d{4})'
              required
            />
          </div>
          <hr />
          <div class='elem-group inlined'>
            <label for='checkout-date'>Delivery Date;</label>
            <input type='date' id='checkout-date' name='checkout' required />
          </div>
          <div class='elem-group'>
            <label for='message'>More Info Else?;</label>
            <textarea
              id='message'
              {...register("visitor_message")}
              placeholder='Tell us anything else that might be important.'
              required
            ></textarea>
          </div>
          <button type='submit'>Order Now</button>
          <form />
        </div>
      </div>
    </section>
  );
}
