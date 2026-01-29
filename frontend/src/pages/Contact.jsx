import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className='py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5' style={{ lineHeight: '1.5' }}>
          <span className='text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse'>CONTACT</span>
          <span className='bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text'>Get In Touch</span>
        </h2>
      </div>

      <div className='max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10'>
        {/* Contact Info Cards */}
        <section className='grid md:grid-cols-3 gap-8 mb-20'>
          <div className='bg-white p-8 rounded-2xl shadow-xl text-center'>
            <div className='text-4xl text-orange-500 mb-4'>📧</div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Email Us</h3>
            <p className='text-gray-600'>support@woxoblogs.com</p>
          </div>
          <div className='bg-white p-8 rounded-2xl shadow-xl text-center'>
            <div className='text-4xl text-orange-500 mb-4'>📞</div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Call Us</h3>
            <p className='text-gray-600'>+1 (123) 456-7890</p>
          </div>
          <div className='bg-white p-8 rounded-2xl shadow-xl text-center'>
            <div className='text-4xl text-orange-500 mb-4'>📍</div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Visit Us</h3>
            <p className='text-gray-600'>123 Blog Street, Suite 100<br/>Blog City, BC 12345</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className='bg-white rounded-2xl p-8 shadow-xl mb-20'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Send us a Message</h3>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>First Name</label>
                <input 
                  type='text' 
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300'
                  placeholder='John'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>Last Name</label>
                <input 
                  type='text' 
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300'
                  placeholder='Doe'
                />
              </div>
            </div>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Email Address</label>
              <input 
                type='email' 
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300'
                placeholder='john@example.com'
              />
            </div>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Message</label>
              <textarea 
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 h-32'
                placeholder='Your message here...'
              ></textarea>
            </div>
            <button 
              type='submit'
              className='bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium'
            >
              Send Message
            </button>
          </form>
        </section>

        {/* FAQ Section */}
        <section className='bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl mb-20'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>FAQ</h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg p-6 shadow-md'>
              <h4 className='font-bold text-gray-900 mb-2'>What is your response time?</h4>
              <p className='text-gray-700'>We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-md'>
              <h4 className='font-bold text-gray-900 mb-2'>Do you offer urgent support?</h4>
              <p className='text-gray-700'>Yes, we provide priority support for urgent matters through our dedicated hotline.</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className='mb-20 bg-white rounded-2xl p-8 shadow-xl'>
          <h3 className='text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block'>Our Location</h3>
          <div className='w-full rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645363506215!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className='rounded-xl'
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
