"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full bg-white font-figtree shadow-sm z-50">
      {/* ---------- Mobile & Tablet Navbar ---------- */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 h-16">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 focus:outline-none"
        >
          <Image src="/icons/hamburger.png" alt="Menu" width={24} height={24} />
        </button>

        <div className="flex justify-center ml-8 flex-1">
          <Image
            src="/images/logo.png"
            alt="Motherland Pure Logo"
            width={140}
            height={40}
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-1 md:gap-6">
          <button className="p-2">
            <Image
              src="/icons/search.png"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
          <button className="p-2">
            <Image src="/icons/cart.png" alt="Bag" width={24} height={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              Shop
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* ---------- Desktop Navbar ---------- */}
      <div className="hidden lg:flex items-center justify-between px-12 py-3 h-20">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Motherland Logo"
            width={160}
            height={50}
            className="object-contain"
          />
        </div>

        <nav className="flex items-center space-x-10 text-gray-800 font-medium">
          {/* Home */}
          <button
            onClick={() => setActiveLink("Home")}
            className={`relative  transition-colors cursor-pointer ${
              activeLink === "Home"
                ? "text-[#1A3232] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#1A3232]"
                : "text-[#1A3232BF] hover:text-[#1A3232]"
            }`}
          >
            Home
          </button>

          <div className="relative group">
            <button
              onClick={() => setActiveLink("Shop")}
              className={`flex items-center gap-1  transition-colors cursor-pointer ${
                activeLink === "Shop"
                  ? "text-[#1A3232] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#1A3232]"
                  : "text-[#1A3232BF] hover:text-[#1A3232]"
              }`}
            >
              Shop
              <Image
                src="/icons/arrow-down.png"
                alt="Dropdown"
                width={12}
                height={12}
                className="mt-0.5"
              />
            </button>

            <div className="absolute left-0 hidden group-hover:block mt-2 bg-white border border-gray-200 shadow-md rounded-md py-2 w-40">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                All Products
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Best Sellers
              </a>
            </div>
          </div>

          <button
            onClick={() => setActiveLink("About Us")}
            className={`relative  transition-colors cursor-pointer ${
              activeLink === "About Us"
                ? "text-[#1A3232] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#1A3232]"
                : "text-[#1A3232BF] hover:text-[#1A3232]"
            }`}
          >
            About Us
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <button>
            <Image
              src="/icons/search.png"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image src="/icons/user.png" alt="User" width={24} height={24} />
          </button>
          <button>
            <Image src="/icons/cart.png" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
