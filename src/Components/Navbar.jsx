import React, { useState } from "react";

const Navbar = ({ onNewProfile, userData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  bg-white/70 backdrop-blur-2xl shadow-lg rounded-full mx-4 mt-3">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          Jawad's Portfolio Lab
        </a>

        {/* Conditional Rendering: Show message if no userData */}
        {!userData ? (
          <p className="text-gray-600 text-lg">Fill in the form to generate your portfolio.</p>
        ) : (
          <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group px-3 py-2 text-gray-800 hover:text-blue-600"
                  >
                    {item}
                    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-600 rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-4/5"></span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onNewProfile}
                  className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition"
                >
                  New Profile
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && userData && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center py-4 gap-4 rounded-b-lg">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              onNewProfile();
              setIsMenuOpen(false);
            }}
            className="px-4 py-2 bg-blue-950 text-white rounded-full hover:bg-purple-950 transition"
          >
            New Profile
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
