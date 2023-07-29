import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Trending from "./components/Trending";
import MobileNav from "./components/MobileNav";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { getProducts } from "./api/products/route";

export default async function Home() {
  const products = await getProducts();
  // console.log(products);

  const featuredProducts = products.filter(
    (product) => product.IsFeatured == true
  );
  // console.log(featuredProducts);
  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero />
      <MobileNav />

      {/* CATEGORY  LISTING */}
      <CategoryListing />

      {/* Tranding Today */}
      <Trending title='Trending Wines' bg='red' data={featuredProducts} />
      <Trending title='Spirits' bg='blue' />
      <Trending title='Wedding wines' bg='green' />

      {/* FAQs */}
      <Faq />

      {/* Call To Action */}
      <CallToAction />

      {/* FOoter Section */}
      <Footer />
    </main>
  );
}
