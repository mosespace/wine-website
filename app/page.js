import Image from "next/image";
import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Trending from "./components/Trending";
export default function Home() {
  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero />
      {/* CATEGORY  LISTING */}
      <CategoryListing />
      {/* Tranding Today */}
      <Trending />
    </main>
  );
}
