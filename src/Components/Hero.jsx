import React from 'react';

const Hero = ({ name, shortBio }) => {
  return (
    <section id="home" className=" bg-teal-900 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{shortBio}</p>
        <a 
          href="#projects" 
          className="inline-block px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};
export default Hero;