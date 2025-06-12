import Link from "next/link";
import React from "react";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="w-full h-[50px] p-5 flex justify-between items-center   top-0 left-0 shadow-md z-10 bg-white sticky">
      {/* LOGO */}
      <Link href="/">
        <h1 className="text-2xl font-bold bg-black text-transparent bg-clip-text">
          Nagdista
        </h1>
      </Link>
      {/* MENU */}
      <Menu />
    </div>
  );
}
