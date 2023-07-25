import Image from "next/image";
import Hero from "./components/Hero";
import CategoryListing from "./components/CategoryListing";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className='navbar-section'>
      {/* HERO COMPONENT */}
      <Hero/>
      {/* CATEGORY  LISTING */}
      <CategoryListing/>
    </main>
  );
}
