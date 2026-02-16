"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Basic Integrations",
      "Community support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Priority Integrations",
      "Priority email support",
      "Advanced analytics",
      "Export capabilities",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    features: [
      "Unlimited project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Full API access",
      "Dedicated account manager",
      "Custom fields",
      "Advanced security features",
      "SSO & SAML",
    ],
  },
];

const PricingCard = ({ title, monthlyPrice, buttonText, popular, features }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group p-10 border border-slate-200 bg-white rounded-4xl shadow-sm max-w-sm w-full cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Animated Overlay - Appears on hover, disappears immediately on leave */}
      <div
        className={`absolute bottom-0 left-0 w-full z-0 bg-amber-500/5 transition-all duration-500 ease-in-out 
        ${isHovered ? "h-full" : "h-0"}`}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <h3 className={`text-lg font-bold transition-colors duration-300 ${isHovered ? "text-amber-600" : "text-slate-400"}`}>
            {title}
          </h3>
          {popular && (
            <div className="inline-flex text-xs px-3 py-1 rounded-full border border-amber-200 bg-amber-50">
              <span className="text-amber-700 font-bold uppercase tracking-wider">
                Most Popular
              </span>
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-1 mt-6">
          <span className="text-5xl font-bold tracking-tighter text-black">
            ${monthlyPrice}
          </span>
          <span className="text-slate-500 font-medium">/month</span>
        </div>

        <button
          className={`w-full mt-8 px-6 py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 
          ${popular 
            ? "bg-amber-600 text-white hover:bg-amber-700 shadow-amber-200" 
            : "bg-black text-white hover:bg-black/80"}`}
        >
          {buttonText}
        </button>

        <ul className="flex flex-col gap-4 mt-10">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="text-sm flex items-start gap-3 text-slate-600">
              <div className="mt-1 h-5 w-5 shrink-0 border border-amber-200 bg-amber-50 rounded-full flex items-center justify-center text-[10px] text-amber-600 font-bold">
                ✓
              </div>
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Price() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl leading-6 font-bold text-black"
          >
            Choose your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-500 mt-6 leading-relaxed"
          >
            Transparent pricing for businesses of all sizes. No hidden fees, ever.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 items-center lg:flex-row lg:items-stretch lg:justify-center"
        >
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}