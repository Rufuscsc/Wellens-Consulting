"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const serviceCard = [
  {
    image: "/assets/busy.png",
    title: "Accounting Solution",
    descriptions:
      "Trusted partner for seamless accounting. Our comprehensive package, including Busy and JD, simplifies financial management.",
  },
  {
    image: "/assets/busy.png", 
    title: "Cloud Computing",
    descriptions:
      "Harness the full potential of cloud technology to drive innovation, scalability, and efficiency across your infrastructure.",
  },
  {
    image: "/assets/busy.png",
    title: "IT Support",
    descriptions:
      "Top-tier IT solutions and dedicated expert support to keep your business operations running smoothly and securely.",
  },
  {
    image: "/assets/busy.png",
    title: "Mobile Development",
    descriptions:
      "Turning your mobile vision into reality with high-performance, user-centric apps built for modern platforms.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Service = () => {
  return (
    <section className="py-45">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl leading-8 font-bold text-slate-900">
            Services we Provide
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Tailored consulting and technology solutions designed to scale your business operations.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{  margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceCard.map(({ image, title, descriptions }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -7 }}
              className="group relative bg-white p-8 rounded-4xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              <div className="relative mb-8 flex items-center justify-center">
                <Image
                  src={image}
                  alt={title}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-800">
                {title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 grow">
                {descriptions}
              </p>

              
              <button className="flex items-center gap-2 text-sm font-semibold text-amber-600 group/btn cursor-pointer">
                <span>Explore More</span>
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  fill="none" 
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;