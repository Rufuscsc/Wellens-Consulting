"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
            About the CEO
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-black rounded-full" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-120 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="/assets/rufus.jpg"
                alt="Wellens Rufus - Founder & CEO"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Wellens Rufus
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                Founder & Chief Executive Officer
              </p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              <p>
                I am a strategic executive with over a decade of experience
                transforming bold visions into scalable and sustainable
                enterprises. My leadership philosophy is rooted in clarity,
                structure, and long-term growth.
              </p>

              <p>
                Throughout my career, I have navigated complex business
                ecosystems, applying data-driven insights and modern strategic
                frameworks to convert stagnant operations into
                high-performance ventures.
              </p>

              <p>
                To me, consulting is not about theory, it is about measurable
                results. I prioritize agile decision-making, operational
                precision, and strategies that directly impact the bottom line.
              </p>

              <p>
                Beyond performance metrics, I champion human-centered
                leadership. I believe empowered teams and clear direction are
                the true engines of sustainable success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
