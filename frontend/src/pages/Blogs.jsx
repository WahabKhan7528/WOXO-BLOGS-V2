import React from "react";
import BlogPage from "../components/BlogPage";
const Blogs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ lineHeight: "1.5" }}
        >
          <span className="text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse">
            BLOGS
          </span>
          <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Explore Our Articles
          </span>
        </h2>
      </div>

      {/* Blogs Container */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <BlogPage />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
