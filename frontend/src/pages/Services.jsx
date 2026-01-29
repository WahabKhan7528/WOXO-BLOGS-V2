import React, { useState } from 'react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const servicesList = [
    { id: 1, name: "Content Creation", description: "We create engaging and informative content tailored to your audience.", category: "Writing", icon: "✍️" },
    { id: 2, name: "SEO Optimization", description: "Optimize your content to rank higher in search engine results.", category: "Marketing", icon: "🎯" },
    { id: 3, name: "Social Media Management", description: "Manage your social media presence to increase engagement.", category: "Marketing", icon: "📱" },
    { id: 4, name: "Email Marketing", description: "Craft effective email campaigns to reach your audience.", category: "Marketing", icon: "📧" },
    { id: 5, name: "Consultation Services", description: "Provide expert advice to help you grow your online presence.", category: "Consulting", icon: "💡" },
  ];

  const categories = ["All", "Writing", "Marketing", "Consulting"];

  const filteredServices = selectedCategory === 'All' 
    ? servicesList 
    : servicesList.filter(service => service.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className='py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5' style={{ lineHeight: '1.5' }}>
          <span className='text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse'>SERVICES</span>
          <span className='bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text'>What We Offer</span>
        </h2>
      </div>

      <div className='max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10'>
        {/* Overview Section */}
        <section className='mb-20 bg-white rounded-2xl p-8 shadow-xl'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Our Expertise</h3>
          <p className='text-xl text-gray-700 leading-relaxed'>
            At WOXO BLOGS, we are dedicated to providing a wide range of services designed to help individuals and businesses enhance their online presence and achieve their goals.
          </p>
        </section>

        {/* Services Filter */}
        <section className='mb-10'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)} 
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                  ? 'bg-orange-500 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*:hover]:-translate-y-2'>
          {filteredServices.map(service => (
            <div key={service.id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white'>
                <span className='text-4xl'>{service.icon}</span>
                <h3 className='text-2xl font-bold mt-2'>{service.name}</h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-700'>{service.description}</p>
                <div className='mt-4 flex justify-between items-center'>
                  <span className='text-sm text-orange-500 font-medium'>{service.category}</span>
                  <button className='px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 transition-colors duration-300'>
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Services;
