"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function BookingForm({ title, img, price }) {
  const { handleSubmit, register } = useForm();
  const [form, setFormData] = useState({
    productTitle: title,
    productImage: img,
  });

  function onSubmit(data) {
    const initialPrice = price * Number(data.client_quantity);
    setFormData((prevData) => ({
      ...data,
      ...prevData,
      finalPrice: initialPrice,
    }));
  }
  // console.log(form);

  return (
    <section>
      <div className='booking-form'>
        <div className='booking-image'>
          <div className='product-img'>
            <Image src={img} alt={title} fill />
          </div>
        </div>
        <div className='booking-info'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Confrim Your Order</h1>
            <div className='elem-group'>
              <label>Your Name;</label>
              <input
                type='text'
                id='name'
                {...register("client_name")}
                placeholder='John Doe'
              />
            </div>
            <div className='elem-group'>
              <label>Your E-mail;</label>
              <input
                type='email'
                id='email'
                {...register("vistor_name")}
                placeholder='kiskayemoses@gmail.com'
              />
            </div>
            <div className='elem-group'>
              <label>Your Phone;</label>
              <input
                type='tel'
                id='phone'
                {...register("client_phone")}
                placeholder='+256-770981193'
              />
            </div>
            <div className='elem-group'>
              <label>Enter Quantity</label>
              <input
                type='tel'
                id='phone'
                {...register("client_quantity")}
                placeholder='1-10'
              />
            </div>
            <hr />
            <div className='elem-group inlined'>
              <label>Delivery Date;</label>
              <input type='date' id='checkout-date' name={...register("client_pickupdate")} />
            </div>
            <div className='elem-group'>
              <label>More Info Else?;</label>
              <textarea
                id='message'
                {...register("visitor_message")}
                placeholder='Tell us anything else that might be important.'
              ></textarea>
            </div>
            <button type='submit'>
              Order Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
