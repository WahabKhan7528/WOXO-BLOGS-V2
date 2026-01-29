import React, { useState } from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "All",
    "Startups",
    "Security",
    "AI",
    "Apps",
    "Tech",
    "Health",
    "Fintech",
    "Gadgets",
    "Enterprise",
    "Growth",
    "Work",
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">
        Categories
      </h2>
      <div className="relative">
        <div className="flex flex-wrap gap-4 mt-6 transition-all duration-500 ease-in-out">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md
                ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-50 text-gray-700 hover:bg-orange-100"
                }
                ${
                  index >= 5 && !showAll
                    ? "scale-0 h-0 opacity-0 p-0 m-0 overflow-hidden"
                    : "scale-100 opacity-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        {categories.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-110"
          >
            {showAll ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-300 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-300 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          More</button>
        )}
      </div>
    </div>
  );
};

export default CategorySelection;
