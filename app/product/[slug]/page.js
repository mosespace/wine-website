import { getProducts } from "@/app/api/products/route";
import DetailedProduct from "@/app/components/DetailedProduct";
import Products from "@/app/components/Products";
import React from "react";

export default async function page({ params: { slug } }) {
  const products = await getProducts();

  const product = products?.find((product) => product.slug == slug);
  const catId = product.category_id;
  const prodId = product.id;

  const similarData = products.filter(
    (product) => product.category_id == catId
  );

  const similarProducts = similarData.filter((product) => product.id != prodId);
  return (
    <>
      <DetailedProduct data={product} />
      <Products
        data={similarProducts.splice(0, 4)}
        title='Related Products 😎😎'
      />
    </>
  );
}
