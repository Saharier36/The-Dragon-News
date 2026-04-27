import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 my-12 px-4 min-h-screen">
      <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 md:flex">
        <div className="skeleton h-8 w-2/3 mb-2"></div>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="skeleton h-14 w-full rounded-md"></div>
        ))}
      </div>

      <div className="col-span-1 lg:col-span-6 flex flex-col gap-8">
        <div className="skeleton h-8 w-1/2 md:w-1/3 mb-2"></div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-4 w-full border border-base-200 p-4 rounded-lg"
          >
            <div className="flex gap-4 items-center">
              <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-2 w-full">
                <div className="skeleton h-4 w-32"></div>
                <div className="skeleton h-3 w-24"></div>
              </div>
            </div>

            <div className="skeleton h-6 w-5/6"></div>
            <div className="skeleton h-62.5 md:h-87.5 w-full rounded-md"></div>

            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-4/5"></div>
          </div>
        ))}
      </div>

      <div className="col-span-1 lg:col-span-3 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="skeleton h-8 w-2/3 mb-2"></div>
          <div className="skeleton h-12 w-full rounded-md"></div>
          <div className="skeleton h-12 w-full rounded-md"></div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="skeleton h-8 w-2/3 mb-2"></div>
          <div className="flex flex-col border border-base-200 rounded-lg overflow-hidden">
            <div className="skeleton h-14 w-full rounded-none border-b border-base-200"></div>
            <div className="skeleton h-14 w-full rounded-none border-b border-base-200"></div>
            <div className="skeleton h-14 w-full rounded-none"></div>
          </div>
        </div>

        <div className="skeleton h-100 w-full rounded-md"></div>
      </div>
    </div>
  );
};

export default Loading;
