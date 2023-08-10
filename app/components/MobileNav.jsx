import React from "react";
import { HiHome, HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { LuMoreHorizontal } from "react-icons/lu";
import { FaList } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className='mobo-nav'>
      <div className='icons'>
        <ul>
          <Link href='/'>
            <HiHome />
          </Link>
          <Link href='#'>
            <FaList />
          </Link>
          <Link href='#'>
            <HiOutlineShoppingCart />
          </Link>
          <Link href='#'>
            <HiOutlineSearch />
          </Link>
          <Link href='#'>
            <LuMoreHorizontal />
          </Link>
        </ul>
      </div>
    </div>
  );
}
