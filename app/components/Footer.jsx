import React from "react";
import { GoMail } from "react-icons/go";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <main>
      <div className='footer-section'>
        <div className='footer-columns'>
          <div className='col-1'>
            <div className='logo'>
              <Image src={Logo} alt='Wines' fill  sizes={20}/>
            </div>
            <p>Copyright &copy; 2021 Kireka Shopping Centre</p>
          </div>
          <div className='col-2'>
            <h1>Categories</h1>
            <ul>
              <li>Whiskey</li>
              <li>Spirits</li>
              <li>Champagane & </li>
              <li>Champagane & arkling</li>
              <li>Wine</li>
              <li>Liquers</li>
              <li>Beers and ciders</li>
              <li>Soft Drinks & Minutes</li>
            </ul>
          </div>
          <div className='col-3'>
            <h1>Information</h1>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Delivery Information</li>
              <li>Return Policy</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='col-4'>
            <h1>+256 77098 1193</h1>
            <ul>
              <li className='mail'>
                <GoMail className='icon' />{" "}
                <a href='mailto:kiskayemoses@gmail.com'>
                  Kisakyemoses@gmail.com
                </a>
              </li>

              <div className='social-media'>
                <a href='https://instagram.com/typifymedia'>
                  <FiInstagram />
                </a>
                <a href='https://twitter.com/bantu_creative'>
                  <FiTwitter />
                </a>
                <a href='https://github.com/mosespace'>
                  <BsGithub />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
