import React from "react";
import Image from "next/image";
import heroImg from "@/assets/hero.png";

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Column (Text): Move to bottom on mobile, reset on desktop */}
      <div className="space-y-6 order-2 md:order-1">
        <h1 className="text-5xl font-black text-gray-900 leading-tight">
          Transforming Your Business Through Scalable Cloud & Data Solutions.
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
          From Microsoft Azure integration to seamless accounting systems,
          Wellens Consulting provides the technical backbone your enterprise
          needs to grow. Based in the heart of Ikeja's tech hub.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
          Get a Personalized Quote
        </button>
      </div>

      {/* Right Column (Image): Move to top on mobile, reset on desktop */}
      <div className="relative order-1 md:order-2">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={heroImg}
            alt="Wellens Consulting Infrastructure"
            className="w-full h-auto object-cover"
            width={500}
            height={300}
            priority
          />
        </div>
        <div className="absolute -inset-4 bg-blue-100 -z-10 blur-2xl opacity-30 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
