"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="text-amber-600">Wellens</span>
          <span className="text-gray-900"> Consulting</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {["Home", "About", "Product", "Service"].map((item) => (
            <Link
              key={item}
              href="#"
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl p-10 flex flex-col gap-10"
              >
                <div className="mt-16 flex flex-col gap-8 text-lg font-medium text-gray-800">
                  {["Home", "About", "Product", "Service"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-amber-600 transition"
                    >
                      {item}
                    </Link>
                  ))}

                  <button className="mt-6 px-6 py-3 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition">
                    Contact Us
                  </button>
                </div>
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
