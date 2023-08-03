import { getCategories } from "@/app/api/categories/route";
import { getProducts } from "@/app/api/products/route";
import Burner from "@/app/components/Burner";
import Products from "@/app/components/Products";
import SideBar from "@/app/components/SideBar";
import React from "react";

export default async function page({ params: { slug } }) {
  // Fetching all Categories from API
  const categories = await getCategories();

  // Finding a single category whose slug matches the category slug
  const category = categories?.find((category) => category.slug == slug);

  // Fetching all Products from API
  const products = await getProducts();

  // Finding the Category ID
  const catId = category.id;

  //Finding the Category whose products category ID is equal to the category ID
  const catProducts = products.filter(
    (product) => product.category_id == catId
  );

  // Filtering Out a All Categories apart from the one am on.
  const similarCategories = categories.filter(
    (category) => category.id != catId
  );

  return (
    <section className='detailed-categories'>
      <Burner data={category} />
      <div className='category-flex-container'>
        <SideBar categories={similarCategories} />
        <div className='category_products'>
          <Products data={catProducts} title={category.title} bg='none' />
        </div>
      </div>
    </section>
  );
}
