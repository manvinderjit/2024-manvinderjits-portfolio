'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Shopping App",
    description:
      "A React-Redux shopping website that allows customers to buy products. It leverages APIs provided by the Inventory App.",
    image: "/images/projects/react-shopping-app.png",
    techstack: "React, React-Redux, React Router, Bootstrap, and Vite.",
    tag: ["All", "Web", "MERN"],
    gitUrl: "https://github.com/manvinderjit/2023-TOP-Project-Shopping-Cart",
    liveUrl: "https://2023-top-project-shopping-cart.pages.dev/",
  },
  {
    id: 2,
    title: "Inventory Management App",
    description:
      "A full-fledged app that enables inventory management for employees. It integrates with the React Shopping Cart App by providing RESTful APIs for it.",
    image: "/images/projects/inventory-app.png",
    techstack:
      "Express, NodeJS, MongoDB, Mongoose, EJS, Bootstrap, AWS, CI/CD, Docker, HTML5, and HTTPS/SSL.",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/manvinderjit/2023-TOP-Project-Inventory-Application",
    liveUrl: "https://ia.manvinderjit.com",
  },
  {
    id: 3,
    title: "REACT ToDo Notes App",
    description:
      "An app that allows users to add, edit, delete, and mark Todos. Leverages React classes to demonstrate workability with legacy code.",
    image: "/images/projects/react-notes-app.png",
    techstack: "React & Bootstrap",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manvinderjit/2023-Project-React-ToDos",
    liveUrl: "https://2023-project-react-todos.pages.dev",
  },
  {
    id: 4,
    title: "Dynamic Restaurant Website",
    description:
      "A basic static website created for a restaurant with all content generated dynamically.",
    image: "/images/projects/dynamic-restaurant-website.png",
    techstack: "JS, CSS, & Webpack",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/manvinderjit/2023-TOP-Project-Restaurant-Page",
    liveUrl: "https://manvinderjit.github.io/2023-TOP-Project-Restaurant-Page/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "An app that fetches location-based weather data based on user input from the Weather API.",
    techstack: "NodeJS & Webpack.",
    image: "/images/projects/project-weather-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manvinderjit/2023-TOP-Project-Weather-App",
    liveUrl: "https://manvinderjit.github.io/2023-TOP-Project-Weather-App/",
  },
  {
    id: 6,
    title: "To Do Toronto Blog",
    description:
      "An informational / landing page created for tourists wanting information about Toronto.",
    techstack: "HTML & CSS.",
    image: "/images/projects/todo-toronto.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/manvinderjit/2023-Project-Travel-Guide-Landing-Page",
    liveUrl:
      "https://manvinderjit.github.io/2023-Project-Travel-Guide-Landing-Page/",
  },
  {
    id: 7,
    title: "Recipe Blog Page",
    description:
      "A recipe webpage created for a food blog to provide information to visitors.",
    techstack: "HTML & CSS.",
    image: "/images/projects/recipe-blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manvinderjit/2023-Project-Recipe-Page",
    liveUrl: "https://manvinderjit.github.io/2023-Project-Recipe-Page/",
  },
];

const ProjectsSection = () => {
  const [selectedProjectTag, setSelectedProjectTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleProjectTagChange = (newProjectTag) => {
    setSelectedProjectTag(newProjectTag);
  };

  const filteredProjectsByTag = projectsData.filter((project) => project.tag.includes(selectedProjectTag));
  
  const cardVariants = {
    initial: { y:50, opacity:0 },
    animate: { y:0, opacity:1 },
  }

  return (
    <section id="projects" className="pt-20 md:pt-32">
      <h2 className="text-center text-white text-4xl font-bold">My Projects</h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 my-4">
        <ProjectTag
          onClick={handleProjectTagChange}
          name="All"
          isSelected={selectedProjectTag === "All"}
        />
        <ProjectTag
          onClick={handleProjectTagChange}
          name="Web"
          isSelected={selectedProjectTag === "Web"}
        />
        <ProjectTag
          onClick={handleProjectTagChange}
          name="MERN"
          isSelected={selectedProjectTag === "MERN"}
        />
      </div>
      
        <ul ref={ref} className="flex flex-row gap-8 md:gap-12 flex-wrap items-center justify-center">
        {filteredProjectsByTag.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="md: w-[420px]"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              techStack={project.techstack}
              gitUrl={project.gitUrl}
              liveURL={project.liveUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
