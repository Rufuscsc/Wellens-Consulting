import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
       
        <div className="max-w-xs">
          <Image src="" alt="" />
          <p className="text-xl font-bold leading-tight">
           Wellens Consulting
          </p>
        </div>

        {/* Links Navigation Section */}
        <div className="flex gap-24 md:gap-32">
          
          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Product</h3>
            <ul className="flex flex-col gap-3 text-zinc-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors">Get Software</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul className="flex flex-col gap-3 text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;