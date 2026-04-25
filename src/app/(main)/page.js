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
        <h3 className="text-xl font-semibold mb-4">All Categories</h3>
        <ul className="flex flex-col gap-5">
          {categories.map((category) => (
            <p
              key={category.category_id}
              className="btn btn-ghost text-[#9F9F9F] hover:text-[#403F3F] hover:bg-[#E7E7E7]  justify-start"
            >
              {category.category_name}
            </p>
          ))}
        </ul>
      </div>
      <div className="font-bold text-2xl bg-red-300 col-span-6">All news</div>
      <div className="font-bold text-2xl bg-blue-300 col-span-3">
        social icons
      </div>
    </div>
  );
}
