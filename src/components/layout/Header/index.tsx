import React, { useState } from "react";
import Image from "next/image";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { HiMenu, HiX } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-brandGray py-3 px-6 md:px-9 flex justify-between items-center rounded-full font-sfpro relative z-50">
      {/* Mobile: Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          <HiMenu size={24} />
        </button>
      </div>

      {/* Desktop: Navigation */}
      <nav className="hidden md:flex gap-9 items-center">
        {[
          "Kampaniyalar",
          "Xidmətlər",
          "Mağazalar",
          "Aylıq ödəniş",
          "Digər",
        ].map((item, i) => (
          <a
            key={i}
            href="#"
            className={`text-brandGrayText text-sm relative group cursor-pointer ${
              i === 0
                ? "font-semibold"
                : "font-medium opacity-50 hover:opacity-100"
            }`}
          >
            {item}
            <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex gap-5 items-center">
        <a
          href="#"
          className="text-brandGrayText text-sm underline font-normal hidden md:inline cursor-pointer"
        >
          Əvvəlki versiyaya keçid
        </a>
        <button className="text-brandGrayText flex items-center gap-1 text-sm font-semibold ">
          Aze
          <FaAngleDown />
        </button>
        <DarkModeSwitcher />
      </div>

      {/* Mobile: Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-brandGray z-40 flex flex-col p-6 pt-8 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar with logo and close button */}
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/assets/img/logo-be.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain w-12 h-12"
          />
          <button onClick={toggleMobileMenu} aria-label="Close menu">
            <HiX size={28} className="text-placeholderText" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 items-start text-xl font-medium px-4">
          {[
            "Kampaniyalar",
            "Xidmətlər",
            "Mağazalar",
            "Aylıq ödəniş",
            "Digər",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={toggleMobileMenu}
              className="text-brandGrayText hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
