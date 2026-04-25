import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-4 text-center">
        <h1 className="text-7xl font-bold text-[#D72050]">404</h1>
        <p className="text-3xl font-medium">Page Not Found</p>
        <p className="text-[#403F3F]">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className="flex justify-center">
          <button className="btn bg-[#403F3F] text-white hover:bg-[#353333]">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
