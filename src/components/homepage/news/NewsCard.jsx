import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { FaEye, FaStar, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, details, image_url, author, rating, total_view } = news;

  const formatDate = (dateStr) => format(new Date(dateStr), "MMMM dd, yyyy");

  return (
    <div className="rounded shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between px-5 pt-5 pb-3 bg-[#F3F3F3]">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img || "https://i.pravatar.cc/40"}
            alt={author?.name || "author"}
            width={40}
            height={40}
            className="rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm leading-tight">
              {author?.name}
            </p>
            <p className="text-gray-400 text-xs">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-400 cursor-pointer">
          <FaRegBookmark size={17} />
          <BiShareAlt size={17} />
        </div>
      </div>

      <h2 className="text-lg font-bold px-5 py-3 text-gray-900">{title}</h2>

      <div className="px-5">
        <Image
          src={image_url || "https://placehold.co/600x300?text=No+Image"}
          alt={title || "news-image"}
          width={600}
          height={208}
          className="w-full object-cover rounded"
        />
      </div>

      <div className="px-5 py-4">
        <p className="text-gray-500 text-sm line-clamp-3">{details}</p>

        <Link
          href={`/news/${news._id}`}
          className="text-[#F75B5F] text-sm font-semibold mt-2 cursor-pointer hover:underline inline-block"
        >
          Read More
        </Link>
      </div>

      <hr className="mx-5 border-gray-100" />

      <div className="flex items-center justify-between px-5 py-3">
        {/* Star rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              size={17}
              className={
                i < Math.round(rating?.number)
                  ? "text-[#F75B5F]"
                  : "text-gray-200"
              }
            />
          ))}
          <span className="text-gray-600 text-sm font-semibold ml-1">
            {rating?.number}
          </span>
        </div>

        {/* View count */}
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <FaEye size={17} />
          <span>{total_view?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
