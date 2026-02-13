"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const serviceCard = [
  {
    image: "/assets/busy.png",
    title: "Accounting Solution Package",
    descriptions:
      "Wellens Consulting is your trusted partner for seamless and efficient accounting solutions. Our comprehensive package, which includes Busy and JD, simplifies financial management.",
  },
  {
    image: "/assets/busy.png",
    title: "Cloud Computing",
    descriptions:
      "Our dedicated team specializes in helping businesses harness the full potential of cloud technology to drive innovation, scalability, and efficiency.",
  },
  {
    image: "/assets/busy.png",
    title: "IT Support",
    descriptions:
      "Wellens Consulting is your trusted partner for comprehensive IT support services. With a dedicated team of experts, we specialize in providing top-tier IT solutions to keep your business running smoothly.",
  },
  {
    image: "/assets/busy.png",
    title: "Mobile Development",
    descriptions:
      "Wellens Consulting is your trusted partner in mobile app development, dedicated to turning your mobile vision into reality. Our team specializes in creating innovative and user-friendly mobile applications that engage your audience and enhance your digital presence.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card appears 0.2s after the previous one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // TypeScript now accepts this
  },
};

const Service = () => {
  return (
    <section className="py-24 md:py-60 bg-white">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl tracking-tighter font-medium text-black">
            Services we Provide
          </h2>
          <p className="text-[22px] leading-relaxed tracking-tight text-gray-600 mt-5 max-w-2xl mx-auto">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceCard.map(({ image, title, descriptions }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                translateY: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-9 rounded-3xl border border-gray-200 flex flex-col items-center text-center shadow-[0_7px_14px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-40 h-40 mb-6 transition-transform duration-500 hover:rotate-3">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 leading-snug">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {descriptions}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
