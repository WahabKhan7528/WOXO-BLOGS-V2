import React from 'react'

const LearnMore = () => {
  return (
    <div className="bg-gray-50">
      <div className='py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5' style={{ lineHeight: '1.5' }}>
          <span className='text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse'>MORE</span>
          <span className='bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text'>About Us</span>
        </h2>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10'>
        <section className='mb-20 bg-white rounded-2xl p-8 shadow-xl'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Our Mission</h3>
          <p className='text-xl text-gray-700 leading-relaxed'>
            At WOXO BLOGS, our mission is to empower individuals and businesses to enhance their online presence through quality content and effective digital marketing strategies.
          </p>
        </section>
        <section className='mb-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Our Values</h3>
          <ul className='grid md:grid-cols-2 gap-6 text-lg text-gray-700'>
            <li className='flex items-center space-x-3'>
              <span className='text-orange-500 text-2xl'>★</span>
              <span><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</span>
            </li>
            <li className='flex items-center space-x-3'>
              <span className='text-orange-500 text-2xl'>★</span>
              <span><strong>Quality:</strong> We strive for excellence in every project we undertake.</span>
            </li>
            <li className='flex items-center space-x-3'>
              <span className='text-orange-500 text-2xl'>★</span>
              <span><strong>Innovation:</strong> We embrace change and seek out new ideas to improve our services.</span>
            </li>
            <li className='flex items-center space-x-3'>
              <span className='text-orange-500 text-2xl'>★</span>
              <span><strong>Collaboration:</strong> We work together with our clients to achieve their goals.</span>
            </li>
          </ul>
        </section>
        <section className='mb-20'>
          <h3 className='text-4xl font-bold mb-10 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>What Our Clients Say</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*:hover]:-translate-y-2'>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"WOXO BLOGS transformed our online presence! Their content strategy is top-notch."</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Happy Client</h4>
                <p className='text-orange-500'>CEO, Tech Company</p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"The team at WOXO BLOGS is incredibly professional and dedicated."</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Satisfied Customer</h4>
                <p className='text-orange-500'>Marketing Director</p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"The results exceeded our expectations! Highly recommend their services."</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Impressed Entrepreneur</h4>
                <p className='text-orange-500'>Startup Founder</p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"Their innovative approach helped us reach a wider audience. Thank you, WOXO BLOGS!"</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Grateful Business Owner</h4>
                <p className='text-orange-500'>Retail Owner</p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"The content quality is exceptional, and the team is a pleasure to work with."</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Thrilled Marketer</h4>
                <p className='text-orange-500'>Digital Marketing Manager</p>
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-orange-500 text-4xl opacity-20 mb-2'>"</div>
              <p className='text-lg text-gray-700 mb-4'>"WOXO BLOGS has been a game-changer for our marketing strategy. We couldn't be happier!"</p>
              <div className='border-t pt-4'>
                <h4 className='font-bold text-gray-900'>Loyal Client</h4>
                <p className='text-orange-500'>E-commerce Business Owner</p>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-20 bg-white rounded-2xl p-8 shadow-xl'>
          <h3 className='text-4xl font-bold mb-10 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Frequently Asked Questions</h3>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>What services do you offer?</h4>
              <p className='text-gray-700'>We offer content creation, digital marketing, and SEO services.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>How can I contact you?</h4>
              <p className='text-gray-700'>You can reach us through the contact form on our website or via email.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>Do you provide custom solutions?</h4>
              <p className='text-gray-700'>Yes, we tailor our services to meet the specific needs of our clients.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>How long does it take to see results?</h4>
              <p className='text-gray-700'>Results typically begin to show within 3-6 months, depending on the scope of your project.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>Do you work with international clients?</h4>
              <p className='text-gray-700'>Yes, we serve clients globally and can accommodate different time zones.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>What industries do you specialize in?</h4>
              <p className='text-gray-700'>We have experience across various sectors including tech, healthcare, finance, and e-commerce.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>What is your pricing structure?</h4>
              <p className='text-gray-700'>We offer flexible pricing packages based on your specific requirements and project scope.</p>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-gray-900 mb-2'>Do you offer content strategy consultation?</h4>
              <p className='text-gray-700'>Yes, we provide comprehensive content strategy planning and consultation services.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LearnMore
