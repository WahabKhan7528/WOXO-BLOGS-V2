import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser, FaClock, FaTag } from "react-icons/fa";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
    tags,
  } = data[0];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ lineHeight: "1.5" }}
        >
          <span className="text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse">
            {category}
          </span>
        </h2>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {/* Image */}
              <div className="mb-8">
                <img
                  src={image}
                  alt={title}
                  className="w-full rounded-xl object-cover"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
                {title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                <div className="flex items-center">
                  <FaUser className="mr-2 text-orange-500" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-orange-500" />
                  <span>{reading_time}</span>
                </div>
                <div className="flex items-center">
                  <FaTag className="mr-2 text-orange-500" />
                  <span>{published_date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {content}
                </p>
              </div>

              {/* Tags */}
              {tags && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
