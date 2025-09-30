import React from "react";

const AboutSection = () => {
  const techStackTools = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "Firebase",
    "Git & GitHub",
    "RESTful APIs",
    "AWS",
  ];

  return (
    <section className="w-full max-w-[1000px] mx-auto py-16" id="about">
      <div className="w-full flex items-center gap-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter leading-tight min-w-fit">
          About Me
        </h2>
        <div className="w-full h-[1px] bg-neutral-600"></div>
      </div>
      <div className="w-full space-y-4">
        <p className="w-full max-w-[500px] md:max-w-[650px] mx-auto tracking-tight">
          Hi - I’m Francisco, a full stack engineer out of Los Angeles, CA with
          a passion for building meaningful applications from start to finish.
          With a keen eye for innovation and creativity, I am always in search
          for how I can use my skills to revolutionize the world around me.
        </p>
        <p className="w-full max-w-[500px] md:max-w-[650px] mx-auto tracking-tight">
          I’ve worked with{" "}
          <span className="text-[color:var(--accent)]">startups</span> and
          <span className="text-[color:var(--accent)]"> organizations</span> to
          design and launch production-ready platforms, including a youth sports
          club website serving 200+ families and a training academy platform
          that increased client registrations by 5x. At Vistora Technologies, I
          <span className="text-[color:var(--accent)]">
            {" "}
            led a team of a team of developers
          </span>{" "}
          to build a SaaS product with React, Tailwind, and Firebase,
          collaborating with a team of engineers to ship features to real world
          users.
        </p>
        <p className="w-full max-w-[500px] md:max-w-[650px] mx-auto tracking-tight">
          Here are a few technologies I’ve had the pleasure of working with:
        </p>
        <ul className="w-full grid grid-cols-1 min-[375px]:grid-cols-2 gap-2 p-2 max-w-[500px] mx-auto list-disc list-inside text-[color:var(--text-light)]">
          {techStackTools.map((tech) => (
            <li key={tech} className="font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
