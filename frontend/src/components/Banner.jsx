import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='min-h-screen relative bg-black'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-black/50'></div>

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 py-32 lg:py-40 flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className='text-5xl lg:text-7xl font-bold mb-8 text-white'>
          <span className='block text-orange-500 mb-4 animate-pulse lg:text-9xl '>
            WOXO
          </span>
          <span className='bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text'>
            BLOGS
          </span>
        </h1>

        <p className='text-gray-200 text-lg  lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light'>
          <span className='text-orange-500 font-bold'>WOXO</span> <span className='font-bold'>BLOGS</span> is a platform dedicated to reading and exploring a wide range of topics through engaging blog posts. 
          Dive into our collection to discover new ideas and insights!
        </p>

        <Link 
          to="/learn-more" 
          className="group bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-orange-500 transition-all duration-300 inline-flex items-center gap-2"
        >
          Learn More 
          <FaArrowRight className='group-hover:translate-x-2 transition-transform duration-300'/>
        </Link>
      </div>
    </div>
  )
}

export default Banner
