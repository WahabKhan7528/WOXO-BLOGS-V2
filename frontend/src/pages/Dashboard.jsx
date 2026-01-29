import React, { useState, useEffect } from "react";
import BlogForm from "../components/BlogForm";
import BlogTable from "../components/BlogTable";
import { blogsData } from "../data/blogsData";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  // Load blogs from localStorage or use default dummy data
  useEffect(() => {
    const savedBlogs = localStorage.getItem("dashboardBlogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(blogsData);
      localStorage.setItem("dashboardBlogs", JSON.stringify(blogsData));
    }
  }, []);

  // Save blogs to localStorage whenever they change
  const saveBlogs = (updatedBlogs) => {
    setBlogs(updatedBlogs);
    localStorage.setItem("dashboardBlogs", JSON.stringify(updatedBlogs));
  };

  const handleAddBlog = (newBlog) => {
    const blogToAdd = {
      ...newBlog,
      id: blogs.length > 0 ? Math.max(...blogs.map((b) => b.id)) + 1 : 1,
    };
    const updatedBlogs = [...blogs, blogToAdd];
    saveBlogs(updatedBlogs);
  };

  const handleUpdateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog,
    );
    saveBlogs(updatedBlogs);
    setEditingBlog(null);
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    saveBlogs(updatedBlogs);
  };

  return (
    <div className=" mx-auto py-16 px-4 md:px-8 lg:px-10 bg-gray-800 text-gray-200">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-orange-500 transition-transform transform hover:scale-110 animate-pulse ">
        WOXO BLOGS
      </h1>
      <BlogForm
        onSubmit={editingBlog ? handleUpdateBlog : handleAddBlog}
        blog={editingBlog}
      />
      <BlogTable
        blogs={blogs}
        onEdit={setEditingBlog}
        onDelete={handleDeleteBlog}
      />
    </div>
  );
};

export default Dashboard;
