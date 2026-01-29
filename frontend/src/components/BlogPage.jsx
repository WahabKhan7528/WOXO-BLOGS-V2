import React, { useState, useMemo } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import { blogsData } from "../data/blogsData";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Number of blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const blogs = useMemo(() => {
    if (selectedCategory && selectedCategory !== "All") {
      return blogsData.filter((blog) => blog.category === selectedCategory);
    }
    return blogsData;
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "All" ? null : category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Categories section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Blog Cards */}
        <div className="lg:w-2/3">
          <BlogCards
            blogs={blogs}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />

          {/* Pagination */}
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            blogs={blogs}
            pageSize={pageSize}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
