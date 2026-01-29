import React from 'react';
import { Link } from 'react-router-dom';


const Terms = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ lineHeight: '1.5' }}>
          <span className="text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse">Terms of Service</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Introduction</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome to WOXO BLOGS! By accessing our website, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Use of the Site</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Intellectual Property</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            All content on this site, including text, graphics, logos, and images, is the property of WOXO BLOGS and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Limitation of Liability</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            WOXO BLOGS shall not be liable for any damages arising from the use or inability to use the site or any content provided on the site.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Changes to Terms</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Contact Us</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at <Link to="/contact" className='text-orange-500 font-bold hover:underline'>Support Center</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
