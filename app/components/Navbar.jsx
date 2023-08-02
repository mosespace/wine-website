import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3, BsPaypal, BsSearch, BsTelephoneFill } from "react-icons/bs";

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
                <h1>Logo</h1>
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
