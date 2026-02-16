"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "7e54a302-a0cb-4e9b-80cf-aa119f51d9a3");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully");
        setForm({ name: "", email: "", message: "" });
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Network error. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='mt-20 w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-slate-500"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo font-bold"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-slate-500"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className={`p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-dark-hover/30 border-white/90"
                : "bg-white border-gray-400"
            }`}
          />

          <motion.input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            className={`p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-dark-hover/30 border-white/90"
                : "bg-white border-gray-400"
            }`}
          />
        </div>

        <motion.textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Enter Your Message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? "bg-dark-hover/30 border-white/90"
              : "bg-white border-gray-400"
          }`}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          className={`w-max flex items-center gap-2 text-white py-3 px-8 rounded-full mx-auto transition ${
            isDarkMode
              ? "bg-transparent border-[0.5px] hover:bg-dark-hover"
              : "bg-black/80 hover:bg-black"
          } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Sending..." : "Submit now"}
          <Image src="/assets/right-arrow-white.png" alt="" className="" width="10" height="15"/>
        </motion.button>

        <p className="text-center mt-4 font-Ovo">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
