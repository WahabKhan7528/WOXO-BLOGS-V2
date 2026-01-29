import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      {/* Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div>
            <h2 className='text-2xl font-bold text-white mb-6'>
              WOXO <span className='text-orange-500'>BLOGS</span>
            </h2>
            <p className='text-gray-300 mb-6'>
              Empowering voices, sharing stories, and connecting communities through thoughtful content.
            </p>
            <div className='flex gap-4'>
              <a href="#" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>
                <FaFacebook size={24} />
              </a>
              <a href="#" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>
                <FaTwitter size={24} />
              </a>
              <a href="#" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>
                <FaInstagram size={24} />
              </a>
              <a href="#" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold text-white mb-6'>Quick Links</h3>
            <ul className='space-y-4'>
              <li>
                <Link to="/" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>About Us</Link>
              </li>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Contact</Link>
              </li>
              <li>
                <Link to="/services" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>services</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-xl font-semibold text-white mb-6'>Categories</h3>
            <ul className='space-y-4'>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Startups</Link>
              </li>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Security</Link>
              </li>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Ai</Link>
              </li>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Apps</Link>
              </li>
              <li>
                <Link to="/blogs" className='text-gray-300 hover:text-orange-500 transition-colors duration-300'>Tech</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-xl font-semibold text-white mb-6'>Newsletter</h3>
            <p className='text-gray-300 mb-4'>Subscribe to our newsletter for updates and exclusive content.</p>
            <form className='space-y-3'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors duration-300'
              />
              <button 
                type="submit" 
                className='w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-center md:text-left'>
              © {new Date().getFullYear()} WOXO BLOGS. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <Link to="/privacy" className='text-gray-400 hover:text-orange-500 transition-colors duration-300'>Privacy Policy</Link>
              <Link to="/terms" className='text-gray-400 hover:text-orange-500 transition-colors duration-300'>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer