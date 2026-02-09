"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar =()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between mx-6 md:mx-20 mt-4 mb-4 relative">
            <div className="flex items-center justify-center gap-3">
                {/* <Image src="/assets/wells-logo.png" width="50" height="50" alt="WC"/> */}
                <h1 className="text-3x1 font-medium text-amber-600">Wellens Consulting</h1>
            </div>
           <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-widest text-[#1A1A2E]">
                <Link href="" className="font-Ovo group relative py-1 transition-all duration-300">Home <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="" className="font-Ovo group relative py-1 transition-all duration-300">About <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="" className="font-Ovo group relative py-1 transition-all duration-300">Product <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="" className="font-Ovo group relative py-1 transition-all duration-300">Service <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span></Link>
            </div>
            <div className="hidden md:block">
                <button className="bg-amber-600 cursor-pointer text-white px-6 py-2 rounded-full font-medium shadow-sm hover:bg-amber-700 transition-all">
                    Contact us
                </button>
            </div>
            <button className="block z-50 md:hidden" onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <X size={28}/> : <Menu size={30}/>}
            </button>
            <div className={`
                fixed top-0 right-0 h-full w-64 bg-gray-200 shadow-2xl z-40 p-10 transform transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col mt-16 gap-8 font-medium text-lg">
                <Link href="" onClick={()=>setIsOpen(false)} className="font-Ovo">Home</Link>
                <Link href="" onClick={()=>setIsOpen(false)} className="font-Ovo">About</Link>
                <Link href="" onClick={()=>setIsOpen(false)} className="font-Ovo">Product</Link>
                <Link href="" onClick={()=>setIsOpen(false)} className="font-Ovo">Service</Link>
        
                
            </div>
            </div>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-30 md:hidden" 
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}

export default Navbar;