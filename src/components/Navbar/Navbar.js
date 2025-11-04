"use client";

import Image from "next/image";
import { useState } from "react";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 h-16 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-3">
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
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md">
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
    </header>
  );
}
