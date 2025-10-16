import { DarkModeContext } from "@/src/shared/context/DarkModeContext";
import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex cursor-pointer h-7 w-14 items-center rounded-full transition-colors duration-300 bg-[var(--brandToggle)] focus:outline-none"
      aria-label="Toggle dark mode"
    >
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <FiSun
          className={`h-3.5 w-3.5 rounded-full ${
            isDarkMode ? "text-white " : "text-white"
          }`}
        />
        <FiMoon
          className={`h-3.5 w-3.5 rounded-full ${
            isDarkMode ? "text-white" : "text-white "
          }`}
        />
      </div>

      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDarkMode ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default DarkModeSwitcher;
