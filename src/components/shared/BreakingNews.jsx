import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    newsTitle: "Bangladesh launches new digital initiative",
  },
  {
    id: 2,
    newsTitle: "Global tech companies focus on AI growth",
  },
  {
    id: 3,
    newsTitle: "Climate change impacts increase worldwide",
  },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto flex justify-baseline gap-4 bg-[#F3F3F3] py-2 px-4">
      <button className="btn bg-[#D72050] hover:bg-[#b01a40] rounded-none text-white">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {news.map((n) => (
          <span key={n.id} className="mx-2 text-sm font-medium">
            {n.newsTitle}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
