import React from "react";

const BlogTable = ({ blogs, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Existing Blogs</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow"
          >
            <span className="text-gray-200">{blog.title}</span>
            <div>
              <button
                onClick={() => onEdit(blog)}
                className="bg-orange-500 text-white px-3 py-1 rounded mr-2 hover:bg-orange-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTable;
