import React, { useState } from 'react';
import DataEntry from './pages/DataEntry';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './pages/About';
import ProjectSection from './Components/ProjectSection';
import Contact from './pages/Contact';
import DarkModeToggle from './Components/DarkModeToggle';
import Footer from './Components/Footer';

function App() {
  const [userData, setUserData] = useState(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Function to handle data submission from DataEntry form
  const handleDataSubmit = (data) => {
    setUserData(data);
    setShowPortfolio(true);
  };

  // Function to reset everything when "New Profile" is clicked
  const handleNewProfile = () => {
    setUserData(null);
    setShowPortfolio(false);
  };

  return (
    <div className="min-h-screen bg-teal-900 m-0 p-0">
      <Navbar onNewProfile={handleNewProfile} userData={userData} />
      {!showPortfolio ? (
        <DataEntry onSubmit={handleDataSubmit} />
      ) : (
        <>
          <Hero name={userData.name} shortBio={userData.shortBio} />
          <About
            profilePicture={userData.about.profilePicture}
            skills={userData.about.skills}
            interests={userData.about.interests}
            description={userData.about.description}
          />
          <ProjectSection initialProjects={userData.projects} />
          <Contact />
          <Footer socialMedia={userData.socialMedia} />
          <DarkModeToggle />
        </>
      )}
    </div>
  );
}

export default App;
