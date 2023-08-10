import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdShareLocation } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function CallToAction() {
  return (
    <section className="calltoaction-section">
      <div className='call-to-action'></div>
      <div className='call-to-action-grid'>
        <div className='grid-1'>
          <div className='icon'>
            <MdShareLocation />
          </div>
          <h1>More Than 4000 items</h1>
          <p>and +500 brands</p>
        </div>
        <div className='grid-2'>
          <div className='icon-two'>
            <TbTruckDelivery />
          </div>
          <h1>Free Delivery</h1>
          <p>When Order From Kampala</p>
        </div>

        <div className='grid-3'>
          <div className='icon-three'>
            <RiCustomerService2Fill />
          </div>
          <h1>Customer Care</h1>
          <p>Always active 24/7</p>
        </div>
      </div>
    </section>
  );
}
