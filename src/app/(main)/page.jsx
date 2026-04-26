import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-12">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null} />
      </div>
      <div className="font-bold text-2xl bg-red-300 col-span-6">All news</div>
      <div className="font-bold text-2xl bg-blue-300 col-span-3">
        social icons
      </div>
    </div>
  );
}
