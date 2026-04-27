import EmptyNews from '@/components/homepage/news/EmptyNews';
import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/service/data';
import React from 'react';



const NewsCategoryPage = async ({params}) => {
    const {id} = await params;

      const categories = await getCategories();
      const news = await getNewsByCategoryId(id);
 
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-12 px-4">
        <div className="col-span-1 md:col-span-3">
          <LeftSidebar categories={categories} activeId={id} />
        </div>

        <div className="col-span-1 md:col-span-6">
          <h3 className="text-xl font-semibold mb-4">Dragon News Home</h3>
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} news={n}></NewsCard>)
          ) : (
            <EmptyNews/>
          )}
        </div>

        <div className="col-span-1 md:col-span-3 ">
          <RightSidebar />
        </div>
      </div>
    );
};

export default NewsCategoryPage;