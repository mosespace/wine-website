"use client";
import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Products from "./components/Products";
import MobileNav from "./components/MobileNav";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import { useApi } from "./context/context";
import Skeleton from "./components/Skeleton";

// import { getProducts } from "./api/products/route";
// import { getCategories } from "./api/categories/route";

export default function Home() {
  const { categories, products, loading } = useApi();
  // console.log(categories);
  // console.log(categories);

  const featuredProducts = products.filter(
    (product) => product.isFeatured == true
  );
  // console.log(featuredProducts);

  const allSpirits = products.filter((product) => product.category_id == 2);

  const allWeddingWines = products.filter(
    (product) => product.category_id == 8
  );

  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero />
      <MobileNav />

      {/* CATEGORY  LISTING */}
      {/* <CategoryListing /> */}
      <CategoryListing data={categories} />

      {/* All Products */}
      {loading === true ? (
        <div>
          <Skeleton />
        </div>
      ) : (
        <>
          <Products
            title='Trending Wines'
            bg='#fca5a5'
            data={featuredProducts}
          />
          <Products title='Spirits' bg='#f59e0b' data={allSpirits} />
          <Products title='Wedding wines' bg='#a8a29e' data={allWeddingWines} />
        </>
      )}

      {/* FAQs */}
      <Faq />

      {/* Call To Action */}
      <CallToAction />
    </main>
  );
}
