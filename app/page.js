import Image from "next/image";
import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Trending from "./components/Trending";
import MobileNav from "./components/MobileNav";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero />
      <MobileNav />

      {/* CATEGORY  LISTING */}
      <CategoryListing />

      {/* Tranding Today */}
      <Trending />

      {/* FAQs */}
      <Faq />

      {/* Call To Action */}
      <CallToAction />

      {/* FOoter Section */}
      <Footer />
    </main>
  );
}
