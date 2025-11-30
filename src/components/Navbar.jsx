import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-8" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
          <a href="#" className="text-[#2C3450] flex items-center gap-1">
            For working professionals
            <img src="/down.png" alt="arrow" className="h-3 w-3 inline-block" />
          </a>
          <a href="#" className="text-[#2C3450] flex items-center gap-1">
            For College Students
            <img src="/down.png" alt="arrow" className="h-3 w-3 inline-block" />
          </a>
        </nav>

        <button className="bg-[#F26A21] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#e45e15] transition">
          Login
        </button>
      </div>
    </header>
  );
}
