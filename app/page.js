"use client";
import MainHeader from "@/components/header/MainHeader";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      className="app-root h-full relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <MainHeader />
      <div className="absolute w-full h-screen min-h-[1000px] -z-0 inset-0 hero-gradient"></div>
      <main className="site-main w-full px-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="relative bg-transparent text-white flex flex-col items-center p-4 py-8">
        <p className=" tracking-tight">
          Designed & Built by Francisco J. Perez
        </p>
        © {new Date().getFullYear()} — Built with Next.js
      </footer>
      <div className="absolute bottom-0 -z-10 w-full min-w-[1000px]">
        <img src="/footer-graphic.png" className="w-full" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="fixed hidden min-[1000px]:flex flex-col items-center bottom-0 right-8 z-50">
          <a
            href="mailto:fperezfrancisco4@gmail.com"
            className="[writing-mode:vertical-rl] mb-8 text-sm text-neutral-600 hover:text-[var(--accent)] hover:font-medium transition-colors duration-300 ease-out cursor-pointer"
          >
            fperezfrancisco4@gmail.com
          </a>
          <div className="w-[1px] h-[80px] bg-neutral-600"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="fixed hidden min-[1000px]:flex flex-col items-center bottom-0 left-8 z-50">
          <ul className="mb-8 flex flex-col items-center gap-4">
            <a
              target="_blank"
              className="text-neutral-600 hover:text-[var(--accent)] transition-colors duration-300 ease-out cursor-pointer"
              href="https://github.com/fperezfrancisco"
            >
              <Github />
            </a>
            <a
              target="_blank"
              className="text-neutral-600 hover:text-[var(--accent)] transition-colors duration-300 ease-out cursor-pointer"
              href="https://www.linkedin.com/in/fperezfrancisco/"
            >
              <Linkedin />
            </a>
            <a
              target="_blank"
              className="text-neutral-600 hover:text-[var(--accent)] transition-colors duration-300 ease-out cursor-pointer"
              href="https://www.instagram.com/suavecisco/"
            >
              <Instagram />
            </a>
          </ul>
          <div className="w-[1px] h-[80px] bg-neutral-600"></div>
        </div>
      </motion.div>
    </div>
  );
}
