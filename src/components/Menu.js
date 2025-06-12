"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="relative">
      {/* Menu Icon */}
      <div
        className="flex justify-center items-center h-full cursor-pointer transition-all ease-in-out"
        onClick={handleMenuClick}
      >
        <Image
          src={isMenuOpen ? "/closeMenu.png" : "/openMenu.png"}
          alt="menu"
          width={40}
          height={40}
        />
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 w-[200px] py-4 px-3 bg-black text-white z-[1000] flex flex-col gap-3 rounded-xl ring-1 ring-white shadow-lg animate-fadeIn">
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:bg-gray-800 w-full px-3 py-2 rounded-md transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="hover:bg-gray-800 w-full px-3 py-2 rounded-md transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="hover:bg-gray-800 w-full px-3 py-2 rounded-md transition"
          >
            Contact
          </Link>
          <Link
            href="/store"
            onClick={closeMenu}
            className="hover:bg-gray-800 w-full px-3 py-2 rounded-md transition"
          >
            Store
          </Link>
        </div>
      )}
    </div>
  );
}
