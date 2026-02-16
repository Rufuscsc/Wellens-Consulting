"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/products" },
    { name: "Service", href: "/services" },
  ];

  return (
    <header className="sticky top-0 z-100 w-full bg-white md:bg-white/80 md:backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight z-50">
          <span className="text-amber-600">Wellens</span>
          <span className="text-gray-900"> Consulting</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle - High Z-index to stay above menu */}
        <button
          className="md:hidden z-110 p-2 -mr-2 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-90 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-70 bg-white shadow-2xl z-100 md:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-amber-600 transition-colors border-b border-gray-50 pb-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pb-10">
                  <button className="w-full px-6 py-4 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition shadow-lg shadow-amber-600/20">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;