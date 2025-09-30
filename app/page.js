import MainHeader from "@/components/header/MainHeader";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Image from "next/image";

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
      <footer className="relative bg-transparent text-white flex flex-col items-center p-4 py-8 text-sm">
        <p className=" tracking-tight">
          Designed & Built by Francisco J. Perez
        </p>
        © {new Date().getFullYear()} — Built with Next.js
      </footer>
      <div className="absolute bottom-0 -z-10 w-full min-w-[1000px]">
        <img src="/footer-graphic.png" className="w-full" />
      </div>
    </div>
  );
}
