"use client";
import BookingForm from "@/app/components/BookingForm";
import { useApi } from "@/app/context/context";
import React from "react";

export default function page({ params: { slug } }) {
  const { products } = useApi();

  const product = products?.find((product) => product.slug == slug);
  const catId = product.category_id;
  const prodId = product.id;
  return (
    <div>
      <BookingForm
        title={product.title}
        img={product.image}
        price={product.initial_price}
      />
    </div>
  );
}
