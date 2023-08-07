import { getProducts } from "@/app/api/products/route";
import BookingForm from "@/app/components/BookingForm";
import React from "react";

export default async function page({ params: { slug } }) {
  const products = await getProducts();

  const product = products?.find((product) => product.slug == slug);
  const catId = product.category_id;
  const prodId = product.id;
  return (
    <div>
      <BookingForm data={product} />
    </div>
  );
}
