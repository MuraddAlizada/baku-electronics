import React, { useEffect, useState } from "react";
import TopToolBar from "../TopToolbar";

function NavBar() {
  const [isToolbarFixed, setIsToolbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsToolbarFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {isToolbarFixed && <div className="h-[80px]" />}

      <div
        className={`transition-all duration-500 ease-out ${
          isToolbarFixed 
            ? "fixed top-0 left-0 right-0 z-50" 
            : ""
        }`}
      >
        {isToolbarFixed ? (
          <div className="bg-background shadow-lg py-3 transform transition-all duration-500 ease-out animate-in slide-in-from-top-2">
            <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-14">
              <TopToolBar isFixed={true} />
            </div>
          </div>
        ) : (
          <div className="transform transition-all duration-300 ease-in-out">
            <TopToolBar isFixed={false} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;