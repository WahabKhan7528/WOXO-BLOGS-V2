import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ lineHeight: '1.5' }}>
          <span className="text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse">Privacy Policy</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Introduction</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            At WOXO BLOGS, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Information We Collect</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email address, and any other information you provide when you contact us or subscribe to our newsletter.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">How We Use Your Information</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We use your information to improve our services, communicate with you, and provide updates about our content and offerings.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Data Security</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Changes to This Policy</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">Contact Us</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at support@woxoblogs.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
