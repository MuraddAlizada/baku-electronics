import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { HiMenu, HiX } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";


function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOtherDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const otherMenuItems = [
    { href: "/arxayin-al", label: "Arxayın al" },
    { href: "/musteri-karti", label: "Müştəri kartı" },
    { href: "/zemanet", label: "Zəmanət" },
  ];

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
        <Link
          href="/kampaniyalar"
          className={`text-brandGrayText text-sm relative group cursor-pointer ${
            router.pathname === "/kampaniyalar" ? "font-semibold" : "font-medium opacity-50 hover:opacity-100"
          }`}
        >
          Kampaniyalar
          <span className={`absolute left-0 bottom-0 h-px bg-current transition-all duration-500 ${
            router.pathname === "/kampaniyalar" ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </Link>
        <Link
          href="/xidmetler"
          className={`text-brandGrayText text-sm relative group cursor-pointer ${
            router.pathname === "/xidmetler" ? "font-semibold" : "font-medium opacity-50 hover:opacity-100"
          }`}
        >
          Xidmətlər
          <span className={`absolute left-0 bottom-0 h-px bg-current transition-all duration-500 ${
            router.pathname === "/xidmetler" ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </Link>
        <Link
          href="/magazalar"
          className={`text-brandGrayText text-sm relative group cursor-pointer ${
            router.pathname === "/magazalar" ? "font-semibold" : "font-medium opacity-50 hover:opacity-100"
          }`}
        >
          Mağazalar
          <span className={`absolute left-0 bottom-0 h-px bg-current transition-all duration-500 ${
            router.pathname === "/magazalar" ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </Link>
        <Link
          href="/ayliq-odenis"
          className={`text-brandGrayText text-sm relative group cursor-pointer ${
            router.pathname === "/ayliq-odenis" ? "font-semibold" : "font-medium opacity-50 hover:opacity-100"
          }`}
        >
          Aylıq ödəniş
          <span className={`absolute left-0 bottom-0 h-px bg-current transition-all duration-500 ${
            router.pathname === "/ayliq-odenis" ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </Link>
        {/* Digər Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
            className="text-brandGrayText text-sm relative group cursor-pointer font-medium opacity-50 hover:opacity-100 flex items-center gap-1"
          >
            Digər
            <FaAngleDown className={`text-xs transition-transform ${isOtherDropdownOpen ? 'rotate-180' : ''}`} />
            <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
          </button>
          
          {isOtherDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-brandGray border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden animate-fadeIn min-w-[220px] z-50">
              <ul className="py-2">
                {otherMenuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOtherDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-brandGrayText opacity-70 hover:bg-brandGraySecondary hover:opacity-100 cursor-pointer transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Right Section */}
      <div className="flex gap-5 items-center">
        <a
          href="#"
          className="text-brandGrayText text-sm underline font-normal hidden md:inline cursor-pointer"
        >
          Əvvəlki versiyaya keçid
        </a>
        <div className="relative">
          <button 
            className="text-brandGrayText flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition"
            onClick={() => {
              // Language switcher funksionallığı burada olacaq
              // İndi yalnız UI-dır
            }}
          >
            Aze
            <FaAngleDown className="text-xs" />
          </button>
        </div>
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
          <Link href="/" onClick={toggleMobileMenu} className="cursor-pointer">
            <Image
              src="/assets/img/logo-be.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain w-12 h-12"
            />
          </Link>
          <button onClick={toggleMobileMenu} aria-label="Close menu">
            <HiX size={28} className="text-placeholderText" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 items-start text-xl font-medium px-4">
          <Link
            href="/kampaniyalar"
            onClick={toggleMobileMenu}
            className="text-brandGrayText hover:underline"
          >
            Kampaniyalar
          </Link>
          <Link
            href="/xidmetler"
            onClick={toggleMobileMenu}
            className="text-brandGrayText hover:underline"
          >
            Xidmətlər
          </Link>
          <Link
            href="/magazalar"
            onClick={toggleMobileMenu}
            className="text-brandGrayText hover:underline"
          >
            Mağazalar
          </Link>
          <Link
            href="/ayliq-odenis"
            onClick={toggleMobileMenu}
            className="text-brandGrayText hover:underline"
          >
            Aylıq ödəniş
          </Link>
          
          {/* Mobile: Digər submenu */}
          <div className="w-full">
            <div className="text-brandGrayText font-semibold mb-2">Digər</div>
            <div className="flex flex-col gap-3 ml-4">
              {otherMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="text-brandGrayText opacity-70 hover:opacity-100 hover:underline text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
