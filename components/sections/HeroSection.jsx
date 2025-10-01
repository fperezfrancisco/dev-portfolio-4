"use client";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16 h-screen min-h-[1000px] flex items-center">
      <div className="w-full flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h1 className="text-4xl min-[425px]:text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight">
            Francisco J Perez
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl min-[425px]:text-5xl sm:text-6xl lg:text-[64px] font-bold text-[var(--accent)] tracking-tight">
            Full Stack Engineer
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <p className="mt-8 w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[600px] text-base tracking-tight">
            I am a{" "}
            <span className="text-[var(--accent)]">
              Full Stack Software Engineer
            </span>{" "}
            focused on building scalable, user-focused web & mobile
            applications. I love bringing full apps to life from start to
            deployment & anywhere in between. Let’s collaborate to bring the
            world the{" "}
            <span className="text-[var(--accent)]">next big thing.</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="w-full max-w-[350px]"
        >
          <a
            href="mailto:fperezfrancisco4@gmail.com"
            className="w-full max-w-[350px]"
          >
            <button className="mt-8 w-full max-w-[350px] h-14 rounded-lg bg-[#121212] text-white border border-white flex items-center gap-4 justify-center hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 ease-out cursor-pointer">
              Let's Connect
              <ArrowRightIcon className="size-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
