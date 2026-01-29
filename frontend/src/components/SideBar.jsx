import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { blogsData } from "../data/blogsData";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    // Use dummy data instead of fetching from backend
    setPopularBlogs(blogsData.slice(0, 15));
  }, []);

  return (
    <div className="space-y-10">
      {/* Latest Blogs Section */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-8 pb-2 border-b-4 border-orange-500 inline-block">
          Latest Blogs
        </h3>
        <div className="space-y-6">
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0"
            >
              <div className="flex gap-4 items-start">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 mb-2">
                    {blog.title}
                  </h4>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors duration-300"
                  >
                    Read more{" "}
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs Section */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-8 pb-2 border-b-4 border-orange-500 inline-block">
          Popular Blogs
        </h3>
        <div className="space-y-6">
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0"
            >
              <div className="flex gap-4 items-start">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 mb-2">
                    {blog.title}
                  </h4>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors duration-300"
                  >
                    Read more{" "}
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
