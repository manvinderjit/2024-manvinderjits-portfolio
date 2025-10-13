"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillTypeColors = {
  Frontend: "bg-blue-600/20 text-blue-300",
  Backend: "bg-green-600/20 text-green-300",
  Cloud: "bg-purple-600/20 text-purple-300",
  Blockchain: "bg-pink-600/20 text-pink-300",
  DevOps: "bg-orange-600/20 text-orange-300",
  General: "bg-gray-600/20 text-gray-300",
};

const experienceMatrix = [
  {
    title: "Full Stack Developer (Volunteer)",
    company: "TorontoJS",
    start: "2024-11",
    end: "",
    description: [
      "Core contributor to the Community Hub being developed for the org.",
      "Created React components and design tokens from Figma wireframes.",
      "Implemented APIs such as file upload using Node.js, TS, Hono, and Zod.",
      "Working on setting up a GitHub CI/CD pipeline for Cloudflare deployment.",
    ],
    skills: [
      { name: "React", type: "Frontend" },
      { name: "TypeScript", type: "Frontend" },
      { name: "Node.js", type: "Backend" },
      { name: "SQLLite", type: "Backend" },
      { name: "CI/CD", type: "DevOps" },
      { name: "GitHub", type: "DevOps" },
      { name: "Cloudflare", type: "Cloud" },
    ],
    type: "Full Stack",
  },
  {
    title: "Cloud Engineer",
    company: "CasaDentalDDS, CA",
    start: "2023-05-01",
    end: "",
    description: [
      "Ported the client website from private hosting to cloud hosting.",
      "Single-handedly designed and undertook the migration process, including discovery, backups, and seamless transition.",
      "Established backup processes and provided support to the client, ranging from website administration to updates.",
    ],
    skills: [
      { name: "WordPress", type: "Frontend" },
      { name: "Elementor", type: "Frontend" },
      { name: "PHP", type: "Backend" },
      { name: "GitHub", type: "DevOps" },
      { name: "Cloud", type: "Cloud" },
    ],
    type: "Cloud",
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "Be Cloud Ready",
    start: "2025-08",
    end: "2025-09",
    description: [
      "Completed a DevOps launchpad program, developing AWS-focused deployment POCs for startups of varying scales.",
      "Created Terraform configurations and CI/CD pipelines using GitHub Actions to deploy AWS infrastructure.",
      "Deployed multiple PoCs ranging from CloudFront-S3 websites to event-driven container applications leveraging EKS and MSK.",
    ],
    skills: [
      { name: "Terraform", type: "DevOps" },
      { name: "GitHub", type: "DevOps" },
      { name: "Bash", type: "DevOps" },
      { name: "AWS", type: "Cloud" },
      { name: "Kubernetes", type: "Cloud" },
    ],
    type: "Cloud",
  },
  {
    title: "Full Stack Developer (Volunteer)",
    company: "ComUnityCanada",
    start: "2025-04",
    end: "2025-07",
    description: [
      "Developed the HackTheBrain2025 portal for the hackathon held as a part of Toronto Tech Week 2025.",
      "Created frontend components and pages using Next.js, TypeScript, TailwindCSS, ShadCN, and Framer Motion.",
      "Implemented APIs and functionalities, including authentication, reset password, and logout features.",
      "Integrated Email.js for multiple functionalities across the application.",
    ],
    skills: [
      { name: "Next.js", type: "Frontend" },
      { name: "TypeScript", type: "Frontend" },
      { name: "Node.js", type: "Backend" },
      { name: "Postgres", type: "Backend" },
      { name: "GitHub", type: "DevOps" },
      { name: "Vercel", type: "Cloud" },
    ],
    type: "Full Stack",
  },
  {
    title: "Full Stack Developer",
    company: "Confidential Contract",
    start: "2023-05",
    end: "2024-10",
    description: [
      "Developed an in-house CMS to replace the legacy app.",
      "Leveraged AWS Lambda APIs and integrated AWS services (S3, SQS, SES) to optimize storage, messaging, and email systems in the cloud.",
      "Contributed to DevOps efforts by collaborating on infrastructure design and supporting cloud-based deployments in AWS, and facilitated CI/CD automation with GitHub actions.",
    ],
    skills: [
      { name: "React", type: "Frontend" },
      { name: "TypeScript", type: "Frontend" },
      { name: "Next.js", type: "Frontend" },
      { name: "GitHub", type: "DevOps" },
      { name: "Node.js", type: "Backend" },
      { name: "MongoDB", type: "Backend" },
      { name: "AWS", type: "Cloud" },
    ],
    type: ["Cloud", "Full Stack"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Xenex Enterprises Inc.",
    start: "2022-05",
    end: "2022-06",
    description: [
      "Prototyped a blockchain-based File Signage and Verification System employing public blockchain (Ethereum) and IPFS that integrated an existing web application seamlessly with the Ethereum blockchain.",
      "Integrated React PDF API to view documents and Draftable Compare API to compare documents and highlight discrepancies, enhancing user experience and retention.",
    ],
    skills: [
      { name: "React", type: "Frontend" },
      { name: "JavaScript", type: "Frontend" },
      { name: "GitHub", type: "DevOps" },
      { name: "Node.js", type: "Backend" },
      { name: "Firebase", type: "Backend" },
      { name: "Solidity", type: "Blockchain" },
    ],
    type: "Full Stack",
  },
  {
    title: "Postgraduate Enrollment",
    company: "York University",
    start: "2021-09",
    end: "2023-05",
    description: [
      "Immigrated to Canada and enrolled in postgraduate programs at York University, Toronto, Ontario.",
      "Focused on full stack development, cloud, and SEO technologies.",
    ],
    skills: [
      { name: "React", type: "Frontend" },
      { name: "JavaScript", type: "Frontend" },
      { name: "GitHub", type: "DevOps" },
      { name: "Node.js", type: "Backend" },
      { name: "Firebase", type: "Backend" },
      { name: "Solidity", type: "Blockchain" },
    ],
    type: "Full Stack",
  },
  {
    title: "Web Developer & Cloud Administrator",
    company: "Sole Proprietorship",
    start: "2017-04",
    end: "2021-08",
    description: [
      "Developed, deployed, and managed web apps on cloud platforms and providers for small to medium-sized organisations.",
      "Deployed applications using CI/CD pipelines and GitHub Actions for seamless integration and development efforts.",
      "Applied Search Engine Optimization techniques for website to improve their organic ranking.",
    ],
    skills: [
      { name: "JavaScript", type: "Frontend" },
      { name: "PHP", type: "Backend" },
      { name: "CI/CD", type: "DevOps" },
      { name: "Cloud", type: "Cloud" },
    ],
    type: ["Cloud", "Full Stack"],
  },
];

const FILTERS = ["All", "Full Stack", "Cloud"];

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatDateToMonthYearSafe = (dateStr) => {
    if (!dateStr || dateStr.toLowerCase() === "present") return "Present";
    const [year, month] = dateStr.split("-").map(Number);
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const filteredExperiences =
    filter === "All"
      ? experienceMatrix
      : experienceMatrix.filter((exp) =>
          Array.isArray(exp.type)
            ? exp.type.includes(filter)
            : exp.type === filter
        );


  return (
    <section id="journey" className="pt-20 md:pt-32 overflow-x-hidden pb-8">
      <h2 className="text-4xl font-bold text-center text-white mb-2">
        From <span className="text-pink-500">Code</span> to{" "}
        <span className="text-purple-400">Cloud</span> and{" "}
        <span className="text-blue-400">Beyond</span>
      </h2>
      <p className="text-center text-gray-400 mb-12 text-sm md:text-base">
        A journey through my professional experiences, technologies, and
        milestones.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {FILTERS.map((name) => {
          const isSelected = filter === name;
          const buttonStyles = isSelected
            ? "text-white bg-gradient-to-r from-purple-500 via-pink-600 to-red-600"
            : "text-[#ADB7BE] border border-slate-600 hover:bg-gradient-to-r from-slate-700 to-slate-700";

          return (
            <button
              key={name}
              className={`rounded-full p-[2px] text-lg cursor-pointer w-40 ${buttonStyles}`}
              onClick={() => setFilter(name)}
            >
              <span className="flex w-full h-full items-center justify-center bg-gray-900 rounded-full p-2 hover:bg-slate-800">
                {name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 z-0" />

        <div className="flex flex-col gap-12">
          {filteredExperiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedIndex === index;

            const entranceVariants = {
              hidden: { opacity: 0, x: isLeft ? -60 : 60 },
              visible: { opacity: 1, x: 0 },
            };

            const cardContent = (
              <motion.div
                layout
                onClick={() => toggle(index)}
                className={`
                  bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-xl cursor-pointer 
                  hover:shadow-pink-500/20 transition duration-500 ease-in-out relative 
                  ${
                    isLeft
                      ? "md:text-right text-center"
                      : "md:text-left text-center"
                  }
                `}
              >
                {/* Toggle Icon Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(index);
                  }}
                  className={`
                    absolute top-4 
                    right-4
                    md:top-4 
                    ${isLeft ? "md:left-4 md:right-auto" : "md:right-4"}
                    w-7 h-7 flex items-center justify-center 
                    rounded-full bg-gray-700/60 hover:bg-pink-600/40 
                    transition 
                  `}
                >
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-pink-400 text-xs"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Company + Title + Dates */}
                <p className="text-base font-semibold text-pink-500 mb-1">
                  {item.company}
                </p>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-purple-400 text-sm font-medium mt-1">
                  {formatDateToMonthYearSafe(item.start)} →{" "}
                  {formatDateToMonthYearSafe(item.end)}
                </p>

                {/* Expandable Description Only */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? "0.5rem" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <ul
                    className={`list-disc text-gray-300 text-sm leading-relaxed space-y-1 mt-2  ${
                      isLeft
                        ? "list-inside md:list-outside md:ml-auto md:w-[95%] text-left"
                        : "list-inside md:w-[95%] text-left"
                    }`}
                  >
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* Always Visible Duration Bar & Skills */}
                <div className="mt-3">
                  <div className="w-full bg-gray-700 rounded">
                    <div
                      className={`h-1 rounded transition-all duration-500 ${
                        isExpanded
                          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                          : "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600"
                      }`}
                    ></div>
                  </div>
                  <div
                    className={`mt-3 flex flex-wrap gap-2 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          skillTypeColors[skill.type] ||
                          "bg-gray-600/20 text-gray-300"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row justify-between items-start w-full"
              >
                {isLeft ? (
                  <>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={entranceVariants}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full md:w-1/2 md:pr-8 flex justify-center md:justify-end"
                    >
                      {cardContent}
                    </motion.div>

                    <div className="hidden md:block z-10 w-6 h-6 bg-white border-4 border-pink-500 rounded-full absolute left-1/2 transform -translate-x-1/2 top-2" />
                    <div className="hidden md:block w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2" />
                    <div className="hidden md:block z-10 w-6 h-6 bg-white border-4 border-pink-500 rounded-full absolute left-1/2 transform -translate-x-1/2 top-2" />
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={entranceVariants}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start"
                    >
                      {cardContent}
                    </motion.div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
