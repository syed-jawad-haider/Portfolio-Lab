import React from 'react';

const About = ({ profilePicture, skills, interests, description }) => {
  const skillsList = skills.split(',').map(skill => skill.trim());
  const interestsList = interests.split(',').map(interest => interest.trim());

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={profilePicture} 
              alt="Profile" 
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
              {description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interestsList.map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
