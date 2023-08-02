import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Use from "../../public/images/Spirits.png";

import { GrFormNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import Products from "./Products";

export default async function DetailedCategories({ data }) {
  return (
    <div className='container'>
      <SideBar />
      <div className='category_products'>
        <Products/>
      </div>
    </div>
  );
}
