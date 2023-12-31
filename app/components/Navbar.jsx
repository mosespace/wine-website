"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3, BsPaypal, BsSearch, BsTelephoneFill } from "react-icons/bs";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import { useApi } from "../context/context";

function Navbar() {
  const navLinks = [
    {
      name: "Whiskey",
      path: "/whiskey",
    },
    {
      name: "Spirit",
      path: "/spirit",
    },
    {
      name: "Champegane & Sparkling",
      path: "/champegane-&-Sparkling",
    },
    {
      name: "Wine",
      path: "/wine",
    },
    {
      name: "Liqueurs",
      path: "/liqueurs",
    },
    {
      name: "Beer and Cider",
      path: "/beer-and-cider",
    },
    {
      name: "Mixers & Soft Drinks",
      path: "/mixers-&-soft-drinks",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const { cart } = useApi();

  useEffect(() => {
    const triggerScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", triggerScroll);
    return () => {
      window.removeEventListener("scroll", triggerScroll);
    };
  }),
    [];

  return (
    <>
      <div className={`top-nav ${scrolled ? "scrolled" : ""}`}>
        <div className='flex-works'>
          <div>
            <ul>
              <Link href='/'>
                <h1>E&D </h1>
                {/* <div className='logo-nav'>
                  <Image src={Logo} alt='E and D Wines' fill />
                </div> */}
              </Link>
              <li>
                <BsTelephoneFill className='inline-icon' />
                +(256) 782654491
              </li>
              <li>
                <Link className='search-btn' href='#'>
                  <BsSearch className='icon' />
                  <input
                    className='search-field'
                    type='text'
                    placeholder='Search...'
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='social-media'>
          <Link href='/cart'>Cart({cart.length})</Link>
          <Link className='pay-now' href='#trends'>
            {/* <BsPaypal className='icon3' size={20} /> */}
            Hot Deals
          </Link>
        </div>
        <div className='humberg'>
          <AiOutlineMenu size={30} />
        </div>
      </div>

      <div className='down-navbar'>
        <ul>
          {navLinks.map((link, i) => {
            return (
              <li key={i} href={link.path}>
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
