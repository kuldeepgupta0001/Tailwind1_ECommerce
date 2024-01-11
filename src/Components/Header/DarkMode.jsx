import React, { useEffect, useState } from "react";
import lightpng from "../../assets/website/light-mode-button.png";
import darkpng from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      <img
        src={lightpng}
        alt="light-mode-button"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300 absolute right-0 z-10 ${
        theme === "dark" ? "opacity-0" : "opacity-100"
      }`}
      />
      <img
        src={darkpng}
        alt="dark-mode-button"
        onClick={toggleTheme}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
