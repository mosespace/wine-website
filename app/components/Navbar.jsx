import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3, BsPaypal, BsSearch, BsTelephoneFill } from "react-icons/bs";
import Logo from "../../public/images/bg1.jpg";
import Image from "next/image";

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
  return (
    <>
      <div className='top-nav'>
        <div className='flex-works'>
          <div>
            <ul>
              <Link href='/'>
                <img
                  src={
                    "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.328acc3f.png&w=2048&q=75"
                  }
                  alt='Wines'
                  width='100'
                  height='100'
                />
              </Link>
              <li>
                <BsTelephoneFill className='inline-icon' />
                +(256) 770981193
              </li>
              <li>
                <a className='search-btn' href='#'>
                  <BsSearch className='icon' />
                  <input
                    className='search-field'
                    type='text'
                    placeholder='Search...'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='social-media'>
          <BsCart3 className='icon2' />
          <a className='pay-now' href='#'>
            <BsPaypal className='icon2' size={20} />
            Pay Now
          </a>
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
