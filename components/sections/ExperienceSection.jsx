"use client";
import React, { useState } from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      shortTitle: "Vistora Tech",
      title: "Full Stack Developer",
      company: "Vistora Technologies",
      duration: "March 2025 - September 2025",
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Implemented scalable UI components and a Redux-based global state architecture for authentication and session handling.",
        "Collaborated with founders and engineers to align UI/UX with product and business goals, shipping production-ready features.",
      ],
    },
    {
      shortTitle: "Freelance",
      title: "Frontend Engineer",
      company: "Freelance Clients",
      duration: "March 2024 - March 2025",
      bullets: [
        "Built responsive user interfaces using React.",
        "Worked closely with designers to implement modern UI/UX best practices.",
        "Participated in code reviews and contributed to team knowledge sharing.",
      ],
    },
    {
      shortTitle: "FES Intern",
      title: "Frontend Intern",
      company: "Frontend Simplified",
      duration: "August 2024 - December 2024",
      bullets: [
        "Built responsive user interfaces using React.",
        "Worked closely with designers to implement modern UI/UX best practices.",
        "Participated in code reviews and contributed to team knowledge sharing.",
      ],
    },
    {
      shortTitle: "UC Berkeley",
      title: "B.A. in Applied Math & Computer Science",
      company: "UC Berkeley",
      duration: "January 2017 - May 2021",
      bullets: [
        "Built responsive user interfaces using React.",
        "Worked closely with designers to implement modern UI/UX best practices.",
        "Participated in code reviews and contributed to team knowledge sharing.",
      ],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section
      className="w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16"
      id="experience"
    >
      <div className="w-full flex items-center gap-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter leading-tight min-w-fit">
          Experience
        </h2>
        <div className="w-full h-[1px] bg-neutral-600"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-fit flex flex-row md:flex-col md:min-w-[200px]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`px-4 md:px-8 py-2 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ease-out ${
                selectedExp === index
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-neutral-600 hover:text-[var(--accent)]"
              } `}
              onClick={() => setSelectedExp(index)}
            >
              <h3 className="text-sm md:text-base">{exp.shortTitle}</h3>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-start max-w-[650px]">
          <div className="w-full flex flex-wrap md:flex-nowrap items-center tracking-tight">
            <h3 className="text-xl font-medium">
              {experiences[selectedExp].title}
            </h3>
            <span className="text-[var(--accent)] mx-2 text-base">@</span>
            <h3 className="text-[var(--accent)] font-medium text-lg">
              {experiences[selectedExp].company}
            </h3>
          </div>
          <p className="text-sm">{experiences[selectedExp].duration}</p>
          <ul className="w-full pl-4 mt-6 flex flex-col gap-2">
            {experiences[selectedExp].bullets.map((bp, index) => (
              <li key={index} className="text-base list-disc">
                {bp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
