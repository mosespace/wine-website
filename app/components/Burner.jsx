import React from "react";
import Image from "next/image";

export default function Burner({ data, bg='#fff'}) {
  return (
    <div className='burner'>
      <div className='burner-details' style={{background: bg}}>
        <div className='left-col'>
          <h1>{data.title} 🍷</h1>
          <p>{data.description}</p>
          <ul>
            <li>{data.keywords.splice(0, 4).join(" ")}</li>
          </ul>
        </div>
        <div className='right-col'>
          <div className='col-image'>
            <Image src={data.image} alt={data.slug} fill />
          </div>
        </div>
      </div>
    </div>
  );
}
