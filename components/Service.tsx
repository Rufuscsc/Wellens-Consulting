"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const serviceCard = [
  {
    image: "/assets/busy.png",
    title: "Accounting Solution Package",
    descriptions:
      "Wellens Consulting is your trusted partner for seamless and efficient accounting solutions. Our comprehensive package, which includes Busy and JD, simplifies financial management.",
  },
  {
    image: "/assets/busy.png", // Tip: Replace with a cloud-specific icon later
    title: "Cloud Computing",
    descriptions:
      "Our dedicated team specializes in helping businesses harness the full potential of cloud technology to drive innovation, scalability, and efficiency.",
  },
  {
    image: "/assets/busy.png",
    title: "IT Support",
    descriptions:
      "Wellens Consulting is your trusted partner for comprehensive IT support services. With a dedicated team of experts, we specialize in providing top-tier IT solutions to keep your business running smoothly." },
  {
    image: "/assets/busy.png",
    title: "Mobile Development",
    descriptions:
      "Wellens Consulting is your trusted partner in mobile app development, dedicated to turning your mobile vision into reality. Our team specializes in creating innovative and user-friendly mobile applications that engage your audience and enhance your digital presence.",
  },
];

const Service = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl tracking-tighter font-medium text-black text-center">
          Services we Provide
        </h2>
        <p className="text-[22px] leading-relaxed tracking-tight text-gray-600 mt-5 text-center mb-16">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCard.map(({ image, title, descriptions }, index) => (
            <motion.div
            whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-white p-10 rounded-3xl border border-gray-300 flex flex-col items-center text-justify shadow-[0_7px_14px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-40 h-40 mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default Service;
