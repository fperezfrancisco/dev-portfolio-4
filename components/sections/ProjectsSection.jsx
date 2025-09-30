"use client";
import { ChevronRight, X } from "lucide-react";
import React, { useState } from "react";

const DetailsModal = ({ project, closeModal }) => {
  return (
    <div className="fixed sm:hidden w-full h-full inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[500px] mx-auto h-fit min-h-[300px] bg-[#1e1e1e] flex flex-col items-start p-4 py-12 rounded-2xl tracking-tight relative">
        <X
          onClick={closeModal}
          className="size-8 absolute top-4 right-4 cursor-pointer hover:text-[var(--accent)]"
        />
        <h3 className="text-2xl font-semibold leading-tight">{project.name}</h3>
        <ul className="mt-4 py-2 z-0 w-full p-4 pl-6 space-y-4">
          {project.bullets.map((para, index) => (
            <li key={index} className="text-sm list-disc">
              {para}
            </li>
          ))}
        </ul>
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
    </div>
  );
};

const MobileProject = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="aspect-[3/2] w-full h-full p-4 relative flex flex-col items-start justify-end tracking-tight">
      <div className="aspect-[3/2] w-full h-auto rounded-2xl bg-amber-500/50 -z-0 absolute top-0 left-0 right-0"></div>
      <div className="flex flex-col items-start z-0">
        <h2 className="text-sm font-medium text-[var(--accent)] leading-tight">
          Featured Project
        </h2>
        <h3 className="text-2xl font-semibold leading-tight">{project.name}</h3>
      </div>
      <ul className="mt-4 py-8 z-0 w-full p-6 pl-8 bg-[#1e1e1e] rounded-2xl hidden flex-col gap-2 sm:flex">
        {project.bullets.map((para, index) => (
          <li key={index} className="text-sm list-disc">
            {para}
          </li>
        ))}
      </ul>
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
      {modalOpen && <DetailsModal closeModal={closeModal} project={project} />}
    </div>
  );
};

const DesktopProject = ({ project }) => {
  return (
    <div
      className={`w-full h-full min-h-[450px] p-4 relative flex flex-col ${
        project.id % 2 === 0 ? "items-start" : "items-end"
      } justify-center tracking-tight`}
    >
      <div
        className={`aspect-[3/2] w-full max-w-[600px] max-h-[400px] h-auto rounded-2xl bg-amber-500/50 -z-0 absolute top-0 bottom-0 my-auto ${
          project.id % 2 != 0 ? "left-0 right-[unset]" : "right-0 left-[unset]"
        }`}
      ></div>
      <div
        className={`flex flex-col ${
          project.id % 2 === 0 ? "items-start" : "items-end"
        } z-0`}
      >
        <h2 className="text-sm font-medium text-[var(--accent)] leading-tight">
          Featured Project
        </h2>
        <h3 className="text-2xl font-semibold leading-tight">{project.name}</h3>
      </div>
      <ul className="mt-4 py-8 z-0 w-full max-w-[600px] p-6 pl-8 bg-[#1e1e1e] shadow-2xl rounded-2xl hidden flex-col gap-2 sm:flex">
        {project.bullets.map((para, index) => (
          <li key={index} className="text-sm list-disc">
            {para}
          </li>
        ))}
      </ul>
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
  );
};

const ProjectsSection = () => {
  const projectList = [
    {
      id: 1,
      name: "FitForge App",
      featured: true,
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: ["Next.js", "React native", "Node", "Express", "Mongo Db"],
      imageUrl: "",
      imageUrlSmall: "",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      name: "Trilogy Soccer Online Academy",
      featured: true,
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: ["Next.js", "React native", "Node", "Express", "Mongo Db"],
      imageUrl: "",
      imageUrlSmall: "",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      name: "LASC Youth Club Website",
      featured: true,
      bullets: [
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
        "Built responsive landing pages, authentication flows, and dashboards using React.js, Next.js, Tailwind CSS, and Firebase.",
      ],
      techStack: ["Next.js", "React native", "Node", "Express", "Mongo Db"],
      imageUrl: "",
      imageUrlSmall: "",
      liveUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <section
      className="w-full max-w-[800px] xl:max-w-[1000px] mx-auto py-16"
      id="projects"
    >
      <div className="w-full flex items-center gap-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter leading-tight min-w-fit">
          Recent Projects
        </h2>
        <div className="w-full h-[1px] bg-neutral-600"></div>
      </div>
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
