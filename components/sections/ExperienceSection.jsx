"ues client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ExperienceSection = () => {
  const experiences = [
    {
      shortTitle: "Vistora Tech",
      title: "Full Stack Developer",
      company: "Vistora Technologies",
      duration: "March 2025 - September 2025",
      bullets: [
        "Spearheaded the design and development of responsive, production-grade landing pages, authentication flows, and dashboards using React.js, Tailwind CSS, and Figma, transforming ideas into pixel-perfect user interfaces.",
        "Evolved role from frontend focus to full stack responsibilities, including building and maintaining a backend server with Node js and Express js to handle secure data processing and API integrations.",
        "Developed custom API routes for submitting claim metadata and user data to MongoDb, ensuring efficient data storage and retrieval while implementing middleware for business logic, HIPAA compliance, and request validation",
        "Containerized the backend application using Docker for consistent deployment environments and hosted it on Google Cloud Platform; utilized Google Cloud Storage buckets for secure handling of uploaded documents",
      ],
    },
    {
      shortTitle: "Freelance",
      title: "Frontend Engineer",
      company: "Freelance Clients",
      duration: "March 2024 - March 2025",
      bullets: [
        "Delivered production-grade, SEO-optimized websites for small businesses, improving acquisition and efficiency with React.js and Next.js.",
        "Built responsive site for LASC Youth Soccer Club serving 200+ families, integrating Strapi CMS for content management and API-driven data handling; deployed on Vercel/Render.",
        "Redesigned Trilogy Soccer site, increasing registrations 5x and conversions 75% within 90 days via optimizations like lazy loading, image compression, and backend enhancements for improved data flow and performance",
      ],
    },
    {
      shortTitle: "FES Intern",
      title: "Frontend Intern",
      company: "Frontend Simplified",
      duration: "August 2024 - December 2024",
      bullets: [
        "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactiveuser interface using animations, transitions and carousels",
        "Processed API requests with Axios to dynamically represent data from a cloud server and represented it through skeleton loading states, pagination and dynamic routing",
        "Utilized Git version control and the GitHub interface to work and thrive in a virtual and collaborative team environment",
      ],
    },
    {
      shortTitle: "UC Berkeley",
      title: "B.A. in Applied Math & Computer Science",
      company: "UC Berkeley",
      duration: "January 2017 - May 2021",
      bullets: [
        "Completed Bachelor of Arts in Applied Mathematics & Computer Science with a focus on software engineering, algorithms, and data structures.",
        "Many projects using Python, Java, C++, JavaScript, HTML/CSS, SQL.",
        "Played NCAA Division I Soccer all 4 years. Captained team junior and senior year.",
      ],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(0);
  const [changeExp, setChangeExp] = useState(false);

  const handleChangeExp = (index) => {
    setChangeExp(true);
    setSelectedExp(index);
    setTimeout(() => {
      setChangeExp(false);
    }, 50);
  };

  return (
    <section
      className="w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        //animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-full flex items-center gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter leading-tight min-w-fit">
            Experience
          </h2>
          <div className="w-full h-[1px] bg-neutral-600"></div>
        </div>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row gap-8 min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          //animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-full md:w-fit flex flex-row md:flex-col md:min-w-[200px]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`px-4 md:px-8 py-2 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ease-out ${
                  selectedExp === index
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-neutral-600 hover:text-[var(--accent)]"
                } `}
                onClick={() => handleChangeExp(index)}
              >
                <h3 className="text-sm md:text-base">{exp.shortTitle}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!changeExp && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              //animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceSection;
