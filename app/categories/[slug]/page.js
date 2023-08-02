import { getCategories } from "@/app/api/categories/route";
import { getProducts } from "@/app/api/products/route";
import DetailedCategories from "@/app/components/DetailedCategories";
import Products from "@/app/components/Products";
import SideBar from "@/app/components/SideBar";
import React from "react";

export default async function page({ params: { slug } }) {
  const categories = await getCategories();

  const category = categories?.find((category) => category.slug == slug);

  const products = await getProducts();

  const catId = category.id;
  const catProducts = products.filter(
    (product) => product.category_id == catId
  );

  return (
    <section className='container'>
      <SideBar />
      <div className='category_products'>
        <Products data={catProducts} title='All PRODUCTS' />
      </div>
    </section>
  );
}
