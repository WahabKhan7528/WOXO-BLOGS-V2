import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaClock, FaTag } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          key={blog.id}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
        >
          {/* Image Container */}
          <div className="aspect-video overflow-hidden relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
              {blog.title}
            </h3>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <FaUser className="mr-2 text-orange-500" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-orange-500" />
                <span>{blog.reading_time}</span>
              </div>
            </div>

            {/* Preview Text */}
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">
                Published: {blog.published_date}
              </span>
              <span className="text-orange-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Read More →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
