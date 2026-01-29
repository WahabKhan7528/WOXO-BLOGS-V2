import React, { useEffect, useState } from "react";

const BlogForm = ({ onSubmit, blog }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    author: "",
    published_date: "",
    reading_time: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        image: blog.image,
        category: blog.category,
        author: blog.author,
        published_date: blog.published_date,
        reading_time: blog.reading_time,
        content: blog.content,
        tags: blog.tags.join(", "), // Assuming tags is an array
      });
    } else {
      setFormData({
        title: "",
        image: "",
        category: "",
        author: "",
        published_date: "",
        reading_time: "",
        content: "",
        tags: "",
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };
    
    // If editing, include the ID from the existing blog
    if (blog) {
      submissionData.id = blog.id;
    }
    
    onSubmit(submissionData);
    
    // Only reset form if not editing
    if (!blog) {
      setFormData({
        title: "",
        image: "",
        category: "",
        author: "",
        published_date: "",
        reading_time: "",
        content: "",
        tags: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-6 bg-gray-700 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-200">
        {blog ? "Edit Blog" : "Create Blog"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="published_date"
          value={formData.published_date}
          onChange={handleChange}
          placeholder="Published Date"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="reading_time"
          value={formData.reading_time}
          onChange={handleChange}
          placeholder="Reading Time"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
        />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="border border-gray-600 bg-gray-600 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200"
      >
        {blog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
