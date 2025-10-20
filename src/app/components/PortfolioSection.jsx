"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { skillTypeColors } from "./utility";

const projects = [
  {
    id: 1,
    title: "TorontoJS",
    description: [
      "Core full stack contributor developing the Community Hub for TorontoJS.",
      "Created React components and design tokens from Figma wireframes.",
      "Implemented APIs such as file upload using Node.js, TS, Hono, and Zod.",
      "Working on setting up a GitHub CI/CD pipeline for Cloudflare deployment.",
    ],
    images: [
      "/images/projects/torontojs-complete-profile-1850-938.png",
      "/images/projects/torontojs-signin-1850-938.png",
      "/images/projects/torontojs-helper-design-token.png",
    ],
    skills: [
      { name: "TypeScript", type: "General" },
      { name: "React", type: "Frontend" },
      { name: "Vitest", type: "Frontend" },
      { name: "CSS (Vanilla)", type: "Frontend" },
      { name: "Node.js", type: "Backend" },
      { name: "Hono", type: "Backend" },
      { name: "SQLite - D1", type: "Backend" },
      { name: "GitHub", type: "DevOps" },
      { name: "CI/CD", type: "DevOps" },
      { name: "Cloudflare", type: "Cloud" },
    ],
    tag: ["All", "Web", "MERN"],
    gitRepoUrl: "https://github.com/torontojs/communityhub",
  },
  {
    id: 2,
    title: "HackTheBrain2025",
    description: [
      "Developed a web portal to facilitate the HackTheBrain2025 hackathon as part of Toronto Tech Week 2025.",
      "Created frontend components and pages using Next.js, TypeScript, TailwindCSS, ShadCN, and Framer Motion.",
      "Implemented APIs and functionalities, including authentication, reset password, and logout features.",
      "Integrated Email.js for multiple functionalities across the application.",
    ],
    images: [
      "/images/projects/hackthebrain-home.png",
      "/images/projects/hackthebrain-reset-pass.png",
      "/images/projects/hack-the-brain-dash-1850-938.png",
    ],
    skills: [
      { name: "TypeScript", type: "General" },
      { name: "React", type: "Frontend" },
      { name: "Next.js", type: "Frontend" },
      { name: "Tailwind CSS", type: "Frontend" },
      { name: "Motion", type: "Frontend" },
      { name: "Postgres (Supabase)", type: "Backend" },
      { name: "GitHub", type: "DevOps" },
      { name: "CI/CD", type: "DevOps" },
      { name: "Vercel", type: "Cloud" },
    ],
    tag: ["All", "Web", "MERN"],
    liveUrl: "https://hackthebrain.ca",
  },
  {
    id: 3,
    title: "Amazon Connect Call Center",
    description: [
      "A PoC customer service call center created using the Amazon Connect service.",
      "Integrates AWS services such as Lambda for processing, SQS for decoupling, and DynamoDB for data storage.",
    ],
    images: [
      "/images/projects/amazon-connect-arch-1850-938.png",
      "/images/projects/amazon-connect-flow.png",
    ],
    skills: [
      { name: "TypeScript", type: "General" },
      { name: "Amazon Connect", type: "Backend" },
      { name: "AWS Lambda", type: "Backend" },
      { name: "AWS SQS", type: "Backend" },
      { name: "AWS DynamoDB", type: "Backend" },
      { name: "GitHub", type: "DevOps" },
      { name: "AWS", type: "Cloud" },
    ],
    tag: ["All", "Web", "MERN"],
    gitRepoUrl: "https://github.com/manvinderjit/amazon-connect-implement",
  },
  {
    id: 4,
    title: "AWS 3-Tier IaC DevOps Pipeline",
    description: [
      "A 3-tier Terraform IaC devops pipeline leveraging AWS EKS, MSK Kafka, and RDS database frontended by load balancer.",
      "Uses Terraform to declare infrastructure as code for deployment on AWS.",
      "Creates a GitHub Actions based CI/CD pipeline for automated deployment.",
      "Deploys an app that simulates an ad analytics platform.",
    ],
    images: [
      "/images/projects/AWS3TierEKSMKS-infra.jpg",
      "/images/projects/2-analytics-dash-full.png",
      "/images/projects/1-ads-index.png",
      "/images/projects/3-raw-event-logs.png",
    ],
    skills: [
      { name: "Terraform", type: "General" },
      { name: "AWS", type: "Cloud" },
      { name: "Kubernetes", type: "Cloud" },
      { name: "Apache Kafka", type: "Cloud" },
      { name: "CI/CD", type: "DevOps" },
      { name: "GitHub", type: "DevOps" },
      { name: "GitActions", type: "DevOps" },
    ],
    tag: ["All", "Web", "MERN"],
    gitRepoUrl:
      "https://github.com/manvinderjit/aws-terraform-projects/tree/main/eks-msk-rds-app",
    liveUrl: "https://github.com/manvinderjit/react-springboot-kafka-apps",
  },
  {
    id: 5,
    title: "Shopping App",
    description: [
      "A React-Redux e-commerce store website that allows customers to buy products and manage orders.",
      "It leverages APIs provided by the Inventory App for displaying products and handling orders.",
      "Uses React-Redux for state management and implements Light and Dark modes with React useContext hook.",
    ],
    images: [
      "/images/projects/react-shopping-app.png",
      "/images/projects/react-shopping-app-cart-dark.png",
      "/images/projects/react-shopping-app-cart-light.png",
    ],
    skills: [
      { name: "React", type: "Frontend" },
      { name: "Tailwind CSS", type: "Frontend" },
      { name: "TypeScript", type: "General" },
      { name: "React-Redux", type: "General" },
      { name: "Vitest", type: "General" },
      { name: "React Testing Library", type: "General" },
      { name: "CI/CD", type: "DevOps" },
      { name: "GitHub", type: "DevOps" },
      { name: "Vercel", type: "Cloud" },
    ],
    tag: ["All", "Web", "MERN"],
    gitRepoUrl:
      "https://github.com/manvinderjit/2023-TOP-Project-Shopping-Cart",
    liveUrl: "https://2023-top-project-shopping-cart.pages.dev/",
  },
  {
    id: 6,
    title: "Inventory Management App",
    description: [
      "A full-fledged app that enables inventory management for employees.",
      "It integrates with the React Shopping Cart App by providing RESTful APIs for it.",
      "Developed using full stack technologies and deployed on AWS via GitHub Actions and Code Deploy",
    ],
    images: [
      "/images/projects/inventory-app.png",
      "/images/projects/inventory-app-dash-1850-938.png",
      "/images/projects/inventory-app-promos-1850-938.png",
      "/images/projects/inventory-app-products-1850-938.png",
    ],
    skills: [
      { name: "TypeScript", type: "General" },
      { name: "EJS", type: "Frontend" },
      { name: "Bootstrap", type: "Frontend" },
      { name: "Express", type: "Backend" },
      { name: "Node.js", type: "Backend" },
      { name: "MongoDB", type: "Backend" },
      { name: "CI/CD", type: "DevOps" },
      { name: "Docker", type: "DevOps" },
      { name: "AWS", type: "Cloud" },
      { name: "Jest", type: "General" },
      { name: "Supertest", type: "General" },
    ],
    tag: ["All", "Web", "MERN"],
    gitRepoUrl:
      "https://github.com/manvinderjit/2023-TOP-Project-Inventory-Application",
    liveUrl: "https://ia.manvinderjit.com",
  },
];

const GitHubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 0C5.37 0 0 5.48 0 12.25c0 5.42 3.438 10.01 8.207 11.63.6.113.82-.27.82-.6 
      0-.296-.01-1.08-.017-2.12-3.338.75-4.042-1.65-4.042-1.65-.546-1.41-1.333-1.79-1.333-1.79-1.09-.77.082-.755.082-.755 
      1.205.087 1.84 1.26 1.84 1.26 1.07 1.875 2.807 1.335 3.492 1.02.108-.8.42-1.335.762-1.64-2.665-.315-5.466-1.37-5.466-6.08 
      0-1.345.465-2.445 1.235-3.305-.125-.317-.54-1.59.117-3.31 0 0 1.005-.33 3.3 1.26a11.13 11.13 0 0 1 3.006-.42c1.02.005 
      2.046.145 3.006.42 2.295-1.59 3.3-1.26 3.3-1.26.657 1.72.242 2.993.12 3.31.77.86 1.233 1.96 1.233 3.305 
      0 4.725-2.805 5.762-5.478 6.072.432.385.816 1.145.816 2.31 0 1.67-.015 3.02-.015 3.43 
      0 .33.216.72.825.6C20.565 22.26 24 17.67 24 12.25 24 5.48 18.63 0 12 0z"
      clipRule="evenodd"
    />
  </svg>
  );

const ArrowIcon = ({ direction, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
  >
    {direction === "left" ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5L15.75 12l-7.5 7.5"
      />
    )}
  </svg>
);


const PortfolioSection = () => {
  const [currentImages, setCurrentImages] = useState({});
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const [zoomed, setZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");


  const toggleLightbox = (projectIndex) => {
    setActiveProject(projectIndex);
    setLightboxOpen(true);
    setPaused(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveProject(null);
    setPaused(false);
    setZoomed(false);    
  };

  // Auto slideshow
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const updated = { ...prev };
        projects.forEach((project, i) => {
          updated[i] = (updated[i] + 1) % project.images.length || 0;
        });
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextImage = (idx) => {
    setCurrentImages((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) + 1) % projects[idx].images.length,
    }));
  };

  const prevImage = (idx) => {
    setCurrentImages((prev) => ({
      ...prev,
      [idx]:
        (prev[idx] || 0) === 0
          ? projects[idx].images.length - 1
          : (prev[idx] || 0) - 1,
    }));
  };

  return (
    <section
      id="portfolio"
      className="pt-20 md:pt-32 bg-gradient-to-b from-black via-gray-900/40 to-black text-white overflow-x-hidden pb-16"
    >
      <h2 className="text-4xl font-bold text-center mb-2">
        My <span className="text-pink-500">Portfolio</span>
      </h2>

      <p className="text-center text-gray-400 mb-12 text-sm md:text-base">
        A collection of production work and Proof of Concepts delivered to
        clients and a few GitHub projects.
      </p>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 sm:px-6 md:px-12 overflow-visible"
      >
        {projects.map((project, idx) => {
          const currentIndex = currentImages[idx] || 0;
          const currentSrc = project.images[currentIndex];

          return (
            <motion.article
              key={idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => toggleLightbox(idx)}
              className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-pink-500/20 hover:-translate-y-1 transition duration-500 ease-in-out"
            >
              {/* Image Slideshow */}
              <figure
                className="relative overflow-hidden mx-auto transition-all duration-500 w-full aspect-[1850/938]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSrc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentSrc}
                      alt={`${project.title} preview`}
                      width={1920}
                      height={1080}
                      className="object-contain w-full h-full bg-gray-800"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority={idx === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(idx);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
                    >
                      <ArrowIcon direction="left" className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(idx);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
                    >
                      <ArrowIcon direction="right" className="w-5 h-5" />
                    </button>
                  </>
                )}
              </figure>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-3">
                    {project.gitRepoUrl && (
                      <a
                        href={project.gitRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-pink-400 transition flex items-center"
                        aria-label={`${project.title} GitHub repository`}
                        title="View on GitHub"
                      >
                        <GitHubIcon className="w-5 h-5" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-pink-400 transition flex items-center"
                        aria-label={`${project.title} live site`}
                        title="View Live Site"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 min-h-[3rem]">
                  {project.description[0]}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        skillTypeColors[skill.type]
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && activeProject !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={closeLightbox}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden text-white"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-gray-300 hover:text-pink-400 text-3xl z-10"
              >
                ✕
              </button>

              {(() => {
                const project = projects[activeProject];
                const currentIndex = currentImages[activeProject] || 0;
                const currentSrc = project.images[currentIndex];

                return (
                  <div>
                    {/* Image section with 16:9 ratio */}

                    <div
                      className="relative w-full aspect-[1850/938] bg-gray-800 overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent closing lightbox
                        const { left, top, width, height } =
                          e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - left) / width) * 100;
                        const y = ((e.clientY - top) / height) * 100;
                        setTransformOrigin(`${x}% ${y}%`);
                        setZoomed((prev) => !prev);
                      }}
                      onMouseEnter={() => setPaused(true)}
                      onMouseLeave={() => setPaused(false)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSrc}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={currentSrc}
                            alt={`${project.title} lightbox preview`}
                            fill
                            style={{
                              transformOrigin,
                              transform: zoomed ? "scale(1.6)" : "scale(1)",
                              transition:
                                "transform 0.3s ease-out, transform-origin 0.15s ease-out",
                            }}
                            className={`object-contain ${
                              zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1850px) 80vw, 1850px"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(activeProject);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
                          >
                            <ArrowIcon direction="left" className="w-6 h-6" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(activeProject);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
                          >
                            <ArrowIcon direction="right" className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Info section */}
                    <div className="p-6 bg-gray-800">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-semibold">
                          {project.title}
                        </h3>

                        {/* GitHub + Live Links */}
                        <div className="flex items-center space-x-3">
                          {project.gitRepoUrl && (
                            <a
                              href={project.gitRepoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-400 hover:text-pink-400 transition flex items-center"
                              aria-label={`${project.title} GitHub repository`}
                              title="View on GitHub"
                            >
                              <GitHubIcon className="w-5 h-5" />
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-400 hover:text-pink-400 transition flex items-center"
                              aria-label={`${project.title} live site`}
                              title="View Live Site"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-4">
                        <ul className="list-disc list-inside text-gray-400 text-sm leading-snug space-y-0.5 marker:text-pink-500">
                          {project.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </p>

                      {/* Skill Chips */}
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              skillTypeColors[skill.type]
                            }`}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;

