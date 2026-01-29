import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4 md:py-40 bg-gradient-to-b from-black to-gray-900 text-center text-white">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
          style={{ lineHeight: "1.5" }}
        >
          <span className="text-orange-500 text-7xl md:text-9xl block mb-4 animate-pulse">
            ABOUT
          </span>
          <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Our Story
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        {/* History Section */}
        <section className="mb-20 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">
            Our History
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            WOXO BLOGS was founded in 2020 with a mission to empower individuals
            and businesses to enhance their online presence. Over the years, we
            have grown from a small team of passionate writers to a full-fledged
            digital marketing agency, serving clients across various industries.
          </p>
        </section>

        {/* Achievements Section */}
        <section className="mb-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl">
          <h3 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">
            Our Achievements
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">★</span>
              <span>Over 500 successful projects completed</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">★</span>
              <span>Recognized as a top digital marketing agency</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">★</span>
              <span>95% client satisfaction rate</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-orange-500 text-2xl">★</span>
              <span>Expanded services across multiple domains</span>
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h3 className="text-4xl font-bold mb-10 text-gray-800 border-b-4 border-orange-500 pb-2 inline-block">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*:hover]:-translate-y-2">
            {/* Team Cards */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Alice Smith"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">Alice Smith</h4>
                <p className="text-orange-500 mb-4">Chief Marketing Officer</p>
                <p className="text-gray-700">
                  Alice has a passion for creative marketing strategies and has
                  been helping brands grow their online presence for over 8
                  years.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Bob Johnson"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">Bob Johnson</h4>
                <p className="text-orange-500 mb-4">Lead Developer</p>
                <p className="text-gray-700">
                  Bob is a skilled software developer with a focus on building
                  scalable and efficient web applications. He has over 6 years
                  of experience.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Charlie Lee"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">Charlie Lee</h4>
                <p className="text-orange-500 mb-4">Product Manager</p>
                <p className="text-gray-700">
                  Charlie is an expert in product development, overseeing the
                  entire product lifecycle and ensuring the team builds the best
                  user experiences.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Diana Green"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">Diana Green</h4>
                <p className="text-orange-500 mb-4">Senior Designer</p>
                <p className="text-gray-700">
                  Diana specializes in creating visually appealing and
                  user-friendly designs that help communicate our brand’s
                  message effectively.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Ethan Brown"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">Ethan Brown</h4>
                <p className="text-orange-500 mb-4">UX/UI Designer</p>
                <p className="text-gray-700">
                  Ethan has a keen eye for detail and focuses on delivering
                  intuitive user experiences through thoughtful design
                  solutions.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Fayla Williams"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">
                  Fayla Williams
                </h4>
                <p className="text-orange-500 mb-4">Operations Manager</p>
                <p className="text-gray-700">
                  Fayla is responsible for streamlining our processes and
                  ensuring smooth operations across all departments of the
                  company.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
