import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">All Categories</h3>

      <ul className="flex flex-row overflow-x-auto gap-2 pb-2 md:flex-col md:overflow-x-visible md:gap-1 md:pb-0">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`shrink-0 md:shrink cursor-pointer rounded-md font-bold
              ${
                activeId === category.category_id
                  ? "text-[#403F3F] bg-[#E7E7E7]"
                  : "text-[#9F9F9F] hover:text-[#403F3F] hover:bg-[#E7E7E7]"
              }`}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block py-2 px-3 md:py-4 md:px-4 whitespace-nowrap md:whitespace-normal"
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
