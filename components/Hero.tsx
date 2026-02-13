"use client";
import Image from "next/image";
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse mt-10 md:flex-row items-center gap-20 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-gray-900"
          >
            Modernize Your <span className="text-amber-600">Workflow</span> with
            Intelligent Cloud
          </motion.h1>

          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 leading-relaxed max-w-lg"
          >
            We specialize in optimizing your IT environment for maximum speed,
            security, and scalability. Build a future-proof foundation for your
            company today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button className="px-8 py-4 cursor-pointer bg-amber-600 text-white rounded-full text-sm font-medium transition-all hover:bg-amber-700 hover:shadow-xl duration-300 active:scale-95 uppercase tracking-wide">
              Explore Solutions
            </button>
          </motion.div>
        </div>
        <div className="relative w-full max-w-125 aspect-square md:aspect-auto md:h-125 flex-1">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative w-full h-full rounded-full overflow-hidden border-8 border-gray-100"
          >
            <Image
              src="/assets/Hero.png"
              alt="hero_image"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
