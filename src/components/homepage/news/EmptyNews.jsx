
import React from "react";
import { FaNewspaper } from "react-icons/fa";

const EmptyNews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="bg-gray-100 rounded-full p-6 mb-5">
        <FaNewspaper size={40} className="text-gray-300" />
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-700 mb-2">No News Found</h3>

      {/* Subtext */}
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        There are no articles in this category yet. Please check back later or
        explore another category.
      </p>
    </div>
  );
};

export default EmptyNews;
