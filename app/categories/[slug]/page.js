import { getCategories } from "@/app/api/categories/route";
import React from "react";

export default async function page({ params: { slug } }) {
  const categories = await getCategories();

  const category = categories?.find((category) => category.slug == slug);
  return (
    <section className='detailed-section'>
      <h1>Hello {slug} </h1>
    </section>
  );
}
