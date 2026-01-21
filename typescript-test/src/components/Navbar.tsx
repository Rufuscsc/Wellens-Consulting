import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white w-full mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
          <div className="w-4 h-4 bg-white -rotate-45"></div>
        </div>
        <span className="font-bold text-xl text-gray-800">Wellens Consulting</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center text-gray-600 font-medium">
        <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="#about" className="hover:text-blue-600 transition">About</Link>
        <Link href="#success" className="hover:text-blue-600 transition">Success Stories</Link>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;