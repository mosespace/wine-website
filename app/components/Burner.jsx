import React from "react";
import Use from "../../public/images/Mixers & Soft Drinks.png";
import Image from "next/image";

export default function Burner() {
  return (
    <div className='burner'>
      <div className='burner-details'>
        <div className='left-col'>
          <h1>Mixers & Soft Drinks 🍷</h1>
          <p>
            Print custom business cards in a variety of high-quality paper
            stocks, finishes, and sizes. Showcase your professional edge today.
          </p>
          <ul>
            <li>mixers</li>
            <li>soft drinks</li>
            <li>soda</li>
            <li>tonic water</li>
          </ul>
        </div>
        <div className='right-col'>
          {/* <h1>Hello World</h1> */}
          <div className='col-image'>
            <Image src={Use} alt='Hello World' fill />
          </div>
        </div>
      </div>
    </div>
  );
}
