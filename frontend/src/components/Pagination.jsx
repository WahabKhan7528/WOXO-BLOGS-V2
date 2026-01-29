import React from 'react'

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
  const totalItems = blogs.totalBlogs || blogs.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const renderPaginantionLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li 
        className={`${pageNumber === currentPage ? "activerPagination" : ""} hover:bg-gray-100`} 
        key={pageNumber}
      >
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
        >
          {pageNumber}
        </a>
      </li>
    ))
  }

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className={`hover:text-orange-500 ${currentPage === 1 ? 'text-gray-300' : ''}`}
        >
          Previous
        </button>
      </li>
      <div className='flex gap-1'>
        {renderPaginantionLinks()}
      </div>
      <li>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`hover:text-orange-500 ${currentPage === totalPages ? 'text-gray-300' : ''}`}
        >
          Next
        </button>
      </li>
    </ul>
  )
}

export default Pagination
