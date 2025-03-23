// DataEntryPage.js
import React, { useState } from 'react';

const DataEntry = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    shortBio: '',
    about: {
      profilePicture: '',
      skills: '',
      interests: '',
      description: ''
    },
    projects: [
      { title: '', description: '', image: '', githubLink: '' },
      { title: '', description: '', image: '', githubLink: '' },
      { title: '', description: '', image: '', githubLink: '' }
    ],
    socialMedia: [
      { name: '', url: '' }
    ]
  });

  const handleChange = (e, section, index, field) => {
    const { value } = e.target;
    
    if (section === 'basic') {
      setUserData({ ...userData, [field]: value });
    } else if (section === 'about') {
      setUserData({
        ...userData,
        about: { ...userData.about, [field]: value }
      });
    } else if (section === 'projects') {
      const updatedProjects = [...userData.projects];
      updatedProjects[index] = { ...updatedProjects[index], [field]: value };
      setUserData({ ...userData, projects: updatedProjects });
    } else if (section === 'socialMedia') {
      const updatedSocialMedia = [...userData.socialMedia];
      updatedSocialMedia[index] = { ...updatedSocialMedia[index], [field]: value };
      setUserData({ ...userData, socialMedia: updatedSocialMedia });
    }
  };

  const addSocialMedia = () => {
    setUserData({
      ...userData,
      socialMedia: [...userData.socialMedia, { name: '', url: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <div className="container mx-auto my-4 p-4 bg-gray-200 dark:bg-teal-950 rounded-xl dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleChange(e, 'basic', null, 'name')}
              className="w-full p-2 border rounded dark:text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Short Bio</label>
            <textarea
              value={userData.shortBio}
              onChange={(e) => handleChange(e, 'basic', null, 'shortBio')}
              className="w-full p-2 border rounded dark:text-black"
              required
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <div>
            <label className="block mb-1">Profile Picture URL</label>
            <input
              type="text"
              value={userData.about.profilePicture}
              onChange={(e) => handleChange(e, 'about', null, 'profilePicture')}
              className="w-full p-2 border rounded dark:text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Skills (comma separated)</label>
            <input
              type="text"
              value={userData.about.skills}
              onChange={(e) => handleChange(e, 'about', null, 'skills')}
              className="w-full p-2 border rounded dark:text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Interests (comma separated)</label>
            <input
              type="text"
              value={userData.about.interests}
              onChange={(e) => handleChange(e, 'about', null, 'interests')}
              className="w-full p-2 border rounded dark:text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Detailed Description</label>
            <textarea
              value={userData.about.description}
              onChange={(e) => handleChange(e, 'about', null, 'description')}
              className="w-full p-2 border rounded dark:text-black"
              rows="4"
              required
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          {userData.projects.map((project, index) => (
            <div key={index} className="p-4 border rounded space-y-2">
              <h3 className="font-medium">Project {index + 1}</h3>
              <div>
                <label className="block mb-1">Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleChange(e, 'projects', index, 'title')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleChange(e, 'projects', index, 'description')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Image URL</label>
                <input
                  type="text"
                  value={project.image}
                  onChange={(e) => handleChange(e, 'projects', index, 'image')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">GitHub Link</label>
                <input
                  type="text"
                  value={project.githubLink}
                  onChange={(e) => handleChange(e, 'projects', index, 'githubLink')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Social Media</h2>
          {userData.socialMedia.map((social, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1">Platform Name</label>
                <input
                  type="text"
                  value={social.name}
                  onChange={(e) => handleChange(e, 'socialMedia', index, 'name')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">URL</label>
                <input
                  type="text"
                  value={social.url}
                  onChange={(e) => handleChange(e, 'socialMedia', index, 'url')}
                  className="w-full p-2 border rounded dark:text-black"
                  required
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSocialMedia}
            className="px-4 py-2 bg-blue-500 text-white rounded dark:text-black"
          >
            Add Social Media
          </button>
        </section>

        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded font-bold"
        >
          Generate Portfolio
        </button>
      </form>
    </div>
  );
};
export default DataEntry;