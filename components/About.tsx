"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-60 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl tracking-tighter md:text-6xl md:leading-[1.1] font-medium text-black text-center mb-16"
        >
          About the CEO
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-30">
          <motion.div
            initial={{ y: -30, opacity:0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="mt-6 relative w-75 h-96 md:w-80 md:h-112.5 overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
              <Image
                src="/assets/rufus.jpg"
                alt="CEO of Wellens Consulting"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="(max-width: 768px) 576px, 640px"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <p className="font-bold text-xl text-black tracking-tight">
                Wellens Rufus
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-2 h-1 bg-black rounded-full"
              />
              <p className="text-gray-500 font-medium text-sm uppercase tracking-widest">
                Founder & CEO
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl"
          >
            <div className="space-y-4 text-xl text-gray-800 text-justify leading-relaxed font-medium tracking-tight">
              <p>
                I’m a strategic leader and CEO with over a decade of experience
                helping organizations transform vision into scalable reality.
              </p>
              <p>
                I’ve spent my career navigating complex business ecosystems,
                using data-driven insights and modern frameworks to turn
                stagnant operations into high-performance ventures. I’m a
                stickler for structural integrity and sustainable growth.
              </p>
              <p>
                For me, consulting isn’t just about offering advice; it’s about
                the tangible impact on the bottom line. I believe the best
                leadership is found in clear communication, agile
                decision-making, and the intuitive strategy that allows my
                clients to focus on the growth they envisioned.
              </p>
              <p>
                Beyond the numbers, I am a champion for human-centric
                leadership. I know that at the heart of every high-performance
                venture is a team that feels empowered and a vision that feels
                attainable. At Wellens Consulting, we don’t just deliver
                reports we deliver the clarity and confidence required to lead
                in an ever-changing world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
