import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getNewsDetailsById } from "@/service/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  const { title, details, image_url, category_id } = news;

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 my-12 px-4">
      <div className="col-span-1 md:col-span-9">
        <h3 className="text-xl font-semibold mb-4 text-[#403F3F]">
          Dragon News
        </h3>
        <div className="border border-gray-200 rounded p-6">
          <figure className="mb-6">
            <Image
              src={image_url || "https://placehold.co/800x400?text=No+Image"}
              alt={title || "news-image"}
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded"
            />
          </figure>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#403F3F] ">
              {title}
            </h2>
            <p className="text-[#706F6F] mb-8 text-base ">
              {details}
            </p>
            <div className="card-actions">
              <Link
                href={`/category/${category_id}`}
                className="bg-[#D72050] text-white hover:bg-[#b0163e] px-6 py-2 flex items-center gap-2 w-max"
              >
                <FaArrowLeft />
                <span>All news in this category</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
