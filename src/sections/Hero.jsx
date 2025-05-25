import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">I'm Web Designer</h1>
          <h2 className="text-blue-600 text-3xl font-semibold mb-4">Gabriel Garcia</h2>
          <p className="mb-6 max-w-md">I specialize in creating responsive websites and user-friendly designs for clients all around the world.</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </div>
        <img src="/images/profile.png" alt="Profile" className="w-64 rounded-full mt-8 md:mt-0" />
      </div>
    </section>
  );
};

export default Hero;
