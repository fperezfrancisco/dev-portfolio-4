"use client";
import {
  ArrowUpRightSquareIcon,
  ChevronRight,
  GithubIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

const DetailsModal = ({ project, closeModal }) => {
  return (
    <div className="fixed sm:hidden w-full h-full inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        //animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-[500px] mx-auto h-fit min-h-[300px] bg-[#1e1e1e] flex flex-col items-start p-4 py-12 rounded-2xl tracking-tight relative"
      >
        <div className="w-full max-w-[500px] mx-auto h-fit min-h-[300px] bg-[#1e1e1e] flex flex-col items-start p-4 py-12 rounded-2xl tracking-tight relative">
          <X
            onClick={closeModal}
            className="size-8 absolute top-4 right-4 cursor-pointer hover:text-[var(--accent)]"
          />
          <h3 className="text-2xl font-semibold leading-tight">
            {project.name}
          </h3>
          <div className="mt-4 py-2 z-0 w-full p-4  space-y-4">
            {/**
               * {project.bullets.map((para, index) => (
              <li key={index} className="text-sm list-disc">
                {para}
              </li>
            ))}
               */}
            <p className="text-sm">{project.details}</p>
            <a
              target="_blank"
              href={project.liveUrl}
              className="text-white hover:text-[var(--accent)] flex items-center gap-2 text-sm font-medium mt-4"
            >
              Live Url
              <ArrowUpRightSquareIcon className="size-4" />
            </a>
          </div>
          <ul className="w-full flex flex-wrap gap-2  mt-4 items-center z-0">
            {project.techStack.map((tech, index) => (
              <li
                className="px-3 py-1 border border-white rounded-md text-sm "
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const MobileProject = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      //animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="aspect-[3/2] w-full h-full p-4 relative flex flex-col items-start justify-end tracking-tight">
        {" "}
        <a target="_blank" href={project.liveUrl} className="w-full h-full">
          <div className="aspect-[3/2] w-full h-auto rounded-2xl bg-amber-500/50   -z-0 absolute top-0 left-0 right-0">
            {" "}
            <div className="w-full absolute inset-0 h-full rounded-2xl bg-linear-180 from-[var(--accent)]/50 to-black z-0 hover:from-[var(--accent)]/0 transition-all duration-300 ease-out"></div>
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
        </a>
        <div className="flex flex-col items-start z-0">
          <h2 className="text-sm font-medium text-[var(--accent)] leading-tight shadow-2xl">
            Featured Project
          </h2>
          <h3 className="text-2xl font-semibold leading-tight shadow-2xl">
            {project.name}
          </h3>
        </div>
        <div className="mt-4 py-8 z-0 w-full p-6 bg-[#1e1e1e] rounded-2xl hidden flex-col gap-2 sm:flex">
          {/**
               *  {project.bullets.map((para, index) => (
              <li key={index} className="text-sm list-disc">
                {para}
              </li>
            ))}
             */}
          <p className="text-sm">{project.details}</p>
          <a
            target="_blank"
            href={project.liveUrl}
            className="text-white hover:text-[var(--accent)] flex items-center gap-2 text-sm font-medium mt-4"
          >
            Live Url
            <ArrowUpRightSquareIcon className="size-4" />
          </a>
        </div>
        <div
          onClick={() => setModalOpen(true)}
          className="w-full mt-4 p-4 bg-[#1e1e1e] rounded-2xl flex items-center justify-between sm:hidden z-0 cursor-pointer hover:text-[var(--accent)]"
        >
          <p className="text-sm font-medium">Show More Details</p>
          <ChevronRight className="size-6 hover:text-[var(--accent)]" />
        </div>
        <ul className="w-full hidden sm:flex flex-wrap gap-2 mt-4 items-center z-0">
          {project.techStack.map((tech, index) => (
            <li
              className="px-3 py-1 text-sm rounded-sm bg-[#1e1e1e] shadow-lg"
              key={index}
            >
              {tech}
            </li>
          ))}
        </ul>
        {modalOpen && (
          <DetailsModal closeModal={closeModal} project={project} />
        )}
      </div>
    </motion.div>
  );
};

const DesktopProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      //animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div
        className={`w-full h-full min-h-[450px] p-4 relative flex flex-col ${
          project.id % 2 === 0 ? "items-start" : "items-end"
        } justify-center tracking-tight`}
      >
        <a target="_blank" href={project.liveUrl} className="w-full h-full">
          <div
            className={`aspect-[3/2] cursor-pointer w-full max-w-[600px] max-h-[400px] h-auto rounded-2xl bg-amber-500/50 -z-0 absolute top-0 bottom-0 my-auto ${
              project.id % 2 != 0
                ? "left-0 right-[unset]"
                : "right-0 left-[unset]"
            }`}
          >
            <div className="w-full absolute inset-0 h-full rounded-2xl bg-[var(--accent)]/50 z-0 hover:bg-transparent transition-all duration-300 ease-out"></div>
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
        </a>
        <div
          className={`flex flex-col ${
            project.id % 2 === 0 ? "items-start" : "items-end"
          } z-0`}
        >
          <h2 className="text-sm font-medium text-[var(--accent)] leading-tight">
            Featured Project
          </h2>
          <h3 className="text-2xl font-semibold leading-tight">
            {project.name}
          </h3>
        </div>
        <div className="mt-4 py-8 z-0 w-full max-w-[600px] p-4 bg-[#1e1e1e] shadow-2xl rounded-2xl hidden flex-col gap-2 sm:flex">
          {/**
             *  {project.bullets.map((para, index) => (
            <li key={index} className="text-sm list-disc">
              {para}
            </li>
          ))}
             */}
          <p className="text-sm">{project.details}</p>
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                target="_blank"
                href={project.liveUrl}
                className="text-white hover:text-[var(--accent)] flex items-center gap-2 text-sm font-medium mt-4"
              >
                Live Url
                <ArrowUpRightSquareIcon className="size-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                target="_blank"
                href={project.githubUrl}
                className="text-white hover:text-[var(--accent)] flex items-center gap-2 text-sm font-medium mt-4"
              >
                Github
                <GithubIcon className="size-4" />
              </a>
            )}
          </div>
        </div>
        <ul className="hidden sm:flex flex-wrap gap-2 mt-4 items-center z-0">
          {project.techStack.map((tech, index) => (
            <li
              className="px-3 py-1 text-sm rounded-sm bg-[#1e1e1e] shadow-2xl"
              key={index}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projectList = [
    {
      id: 1,
      name: "FitForge App",
      featured: true,
      details:
        "Designed and developed a full-stack fitness app with user authentication, workout creation, and progress tracking. Started as a web project and expanding to mobile using React Native. Comming soon!",
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: ["Next.js", "React native", "Node", "Express", "Mongo Db"],
      imageUrl: "/images/FITFORGE.png",
      imageUrlSmall: "",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      name: "Disney Plus Clone",
      featured: true,
      details:
        "Built a fully responsive Disney Plus clone using React js, Tailwind css, the MovieDB Api, Context API, Firebase for authentication and Firestore for the database. Users can sign up, log in, and view trending movie and show details from the MovieDB API. Users can additionally save media to their watchlist.",
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: [
        "React js",
        "Tailwind CSS",
        "Firebase v9",
        "the MovieDB API",
        "Context API",
        "GitHub",
      ],
      imageUrl: "/images/DisneyPlus.png",
      imageUrlSmall: "",
      liveUrl: "https://fperezfrancisco.github.io/disney-plus-clone/",
      githubUrl: "https://github.com/fperezfrancisco/disney-plus-clone",
    },
    {
      id: 3,
      name: "LASC Youth Club Website",
      featured: true,
      details:
        "Designed and developed a fully responsive, professional website for a youth soccer club serving 200+ families. Built using Next Js, Tailwind css, & integrating Strapi CMS for content management. Hosted on vercel & render.",
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Strapi CMS",
        "Cloudinary",
        "Render",
        "Vercel",
      ],
      imageUrl: "/images/lasc-thumbnail.png",
      imageUrlSmall: "",
      liveUrl: "https://lasc-website.vercel.app/",
      githubUrl: "",
    },
  ];

  return (
    <section
      className="w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16"
      id="projects"
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
            Recent Projects
          </h2>
          <div className="w-full h-[1px] bg-neutral-600"></div>
        </div>
      </motion.div>

      <div className="w-full flex flex-col gap-8 min-[800px]:hidden">
        {projectList.map((project, index) => (
          <MobileProject project={project} key={index} />
        ))}
      </div>
      <div className="w-full h-full min-[800px]:flex flex-col gap-4 hidden">
        {projectList.map((project, index) => (
          <DesktopProject project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
