import { ArrowRightIcon } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16 h-screen min-h-[1000px] flex items-center">
      <div className="w-full flex flex-col items-start">
        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight">
          Francisco J Perez
        </h1>
        <h2 className="text-4xl sm:text-6xl lg:text-[64px] font-bold text-[var(--accent)] tracking-tight">
          Full Stack Engineer
        </h2>
        <p className="mt-8 w-full max-w-[500px] md:max-w-[600px] text-base tracking-tight">
          I am a{" "}
          <span className="text-[var(--accent)]">
            Full Stack Software Engineer
          </span>{" "}
          focused on building scalable, user-focused web & mobile applications.
          I love bringing full apps to life from start to deployment & anywhere
          in between. Let’s collaborate to bring the world the{" "}
          <span className="text-[var(--accent)]">next big thing.</span>
        </p>
        <a
          href="mailto:fperezfrancisco4@gmail.com"
          className="w-full max-w-[350px]"
        >
          <button className="mt-8 w-full max-w-[350px] h-14 rounded-lg bg-[#121212] text-white border border-white flex items-center gap-4 justify-center hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 ease-out cursor-pointer">
            Let's Connect
            <ArrowRightIcon className="size-4" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
