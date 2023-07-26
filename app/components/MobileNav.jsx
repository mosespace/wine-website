import React from "react";
import { HiHome, HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { LuMoreHorizontal } from "react-icons/lu";
import { FaList } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className='mobo-nav'>
      <div className='icons'>
        <Link href='#'>
          <HiHome />
          <FaList />
          <HiOutlineShoppingCart />
          <HiOutlineSearch />
          <LuMoreHorizontal />
        </Link>
      </div>
    </div>
  );
}
