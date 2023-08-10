import React from "react";
import { GrFormNext } from "react-icons/gr";

function SideBar({ categories }) {
  // console.log(categories);
  return (
    <div className='left-side-bar'>
      <div className='category-list'>
        <div className='show-all-cat-dropdown'>
          <span>
            All Category <GrFormNext />
          </span>
        </div>
        <ul>
          {categories.map((category, id) => {
            return (
              <a key={id} href={`/categories/${category.slug}`}>
                {category.title}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
