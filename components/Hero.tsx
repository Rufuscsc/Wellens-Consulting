"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-15 relative min-h-screen flex items-center bg-white overflow-hidden py-20 md:py-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125  rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-100 h-100  rounded-full -ml-20 -mb-20" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Modernize Your <br />
              <span className="text-amber-600 italic">Workflow</span> with{" "}
              <br />
              Intelligent Cloud
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-light"
          >
            We specialize in optimizing your IT environment for maximum speed,
            security, and scalability. Build a future-proof foundation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold transition-all hover:bg-black hover:shadow-2xl hover:shadow-slate-300 active:scale-95 text-center">
              Explore Solutions
            </button>
            <button className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold transition-all hover:bg-slate-50 active:scale-95 text-center">
              View plans
            </button>
          </motion.div>

          {/* Trust Batch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                >
                  <div className="bg-slate-300 w-full h-full">
                  
                  </div>{" "}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by <span className="text-slate-900 font-bold">500+</span>{" "}
              businesses
            </p>
          </motion.div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full aspect-square max-w-125 mx-auto"
          >
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-12 border-white">
              <Image
                src="/assets/Hero.png"
                alt="Wellens Consulting"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Glassmorphism Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 leading-none">
                    99.9%
                  </p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter mt-1">
                    Uptime Guaranteed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
