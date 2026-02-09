"use client";
import { motion } from "framer-motion";

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
      "Integrations",
      "Basic support",
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
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Price = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 mt-40 ">
        <div className="max-w-135 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl tracking-wide md:text-5xl md:leading-[1.2] font-bold text-black"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[22px] leading-relaxed tracking-tight text-gray-600 mt-5"
          >
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col gap-20 items-center mt-12 lg:flex-row lg:items-stretch lg:justify-center"
        >
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, features }, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="relative group p-10 border border-gray-300 bg-transparent rounded-3xl shadow-[0_7px_14px_rgba(0,0,0,0.05)] max-w-xs w-full cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 duration-500 z-2 bg-amber-500/30 rounded-3xl group-hover:h-full" />
                <div className="flex justify-between items-center ">
                  <h3 className="text-lg font-bold text-black/50 z-10">
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-black/10 bg-gray-50">
                      <span className="bg-black/20 bg-size-[200%] text-transparent bg-clip-text font-bold">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-8">
                  <span className="text-4xl font-bold tracking-tighter leading-none text-black">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>

                <button className="w-full mt-8 px-4 py-2 rounded-lg font-medium transition-all bg-black text-white hover:bg-black/80">
                  {buttonText}
                </button>

                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm flex items-center gap-4 text-gray-600"
                    >
                      <span className="h-5 w-5 border border-gray-300 rounded-full flex items-center justify-center text-[10px] text-black">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};
