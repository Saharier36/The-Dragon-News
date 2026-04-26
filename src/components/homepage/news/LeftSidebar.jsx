import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">All Categories</h3>
      <ul className="flex flex-col gap-1">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`cursor-pointer ${activeId === category.category_id ? "text-[#403F3F] bg-[#E7E7E7] font-bold" : "text-[#9F9F9F] hover:text-[#403F3F] hover:bg-[#E7E7E7]"}  font-bold rounded-md`}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block py-4 px-4"
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;

// btn btn-ghost text-[#9F9F9F] hover:text-[#403F3F] hover:bg-[#E7E7E7]  justify-start