"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Oladisea",
    role: "Project Manager",
    image: "/assets/rufus.jpg",
    text: "Working with Wellens Consulting transformed our workflow. Their cloud solutions scaled our operations faster than we thought possible.",
    stars: 5,
  },
  {
    name: "Victor Scholar",
    role: "Tech Lead",
    image: "/assets/rufus.jpg",
    text: "The redesign of our onboarding flow was seamless. The attention to detail in the UI/UX is exactly what our users needed.",
    stars: 5,
  },
  {
    name: "David Craig",
    role: "CEO, JD Solutions",
    image: "/assets/rufus.jpg",
    text: "Their IT support is top-tier. Whenever we hit a roadblock, the team is there with a solution before it impacts our bottom line.",
    stars: 5,
  },
  {
    name: "Peter Ojo",
    role: "Operations Director",
    image: "/assets/rufus.jpg",
    text: "Professional, efficient, and innovative. They didn't just build an app; they built a strategic tool for our business growth.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-28 bg-linear-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Testimonials
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight"
          >
            What Industry Leaders <br className="hidden md:block" />
            Say About Us
          </motion.h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Real experiences from professionals who trust our solutions to scale,
            innovate, and drive measurable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 text-6xl text-amber-100 font-serif select-none">
                “
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-10">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-400/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
