import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-3 bg-gray-700  dark:bg-gray-200 rounded-full shadow-lg"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <img width="38" height="38" src="https://img.icons8.com/external-filled-color-icons-papa-vector/38/external-Light-Mode-interface-filled-color-icons-papa-vector.png" alt="light mode"/>
      ) : (
        <img width="38" height="38" src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png" alt="dark mode"/>
      )}
    </button>
  );
};

export default DarkModeToggle;
