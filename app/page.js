import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Trending from "./components/Trending";
import MobileNav from "./components/MobileNav";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { getProducts } from "./api/products/route";
import { getCategories } from "./api/categories/route";

export default async function Home() {
  const categories = await getCategories();
  // console.log(categories);

  const products = await getProducts();
  // console.log(products);

  const featuredProducts = products.filter(
    (product) => product.isFeatured == true
  );

  // console.log(featuredProducts);
  const allSpirits = products.filter((product) => product.category_id == 2);
  // console.log(spirits);

  const allWeddingWines = products.filter(
    (product) => product.category_id == 8
  );

  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero />
      <MobileNav />

      {/* CATEGORY  LISTING */}
      <CategoryListing data={categories} />

      {/* Tranding Today */}
      <Trending title='Trending Wines' bg='#fca5a5' data={featuredProducts} />

      <Trending title='Spirits' bg='#99f6e4' data={allSpirits} />
      <Trending title='Wedding wines' bg='#a8a29e' data={allWeddingWines} />

      {/* FAQs */}
      <Faq />

      {/* Call To Action */}
      <CallToAction />

      {/* FOoter Section */}
      <Footer />
    </main>
  );
}
