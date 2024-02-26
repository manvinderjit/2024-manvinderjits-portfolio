'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "Shopping App",
    description: "Project 1 description",
    image: "/images/projects/react-shopping-app.png",
    tag: ["All", "Web", "MERN"],
    gitUrl: "/",
    liveUrl: "https://2023-top-project-shopping-cart.pages.dev/",
  },
  {
    id: 2,
    title: "Inventory Management App",
    description: "Project 2 description",
    image: "/images/projects/inventory-app.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    liveUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/react-notes-app.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    liveUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/project-weather-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    liveUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/tn-todo-toronto.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    liveUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/tn-recipes.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    liveUrl: "/",
  },
];

const ProjectsSection = () => {

  const [selectedProjectTag, setSelectedProjectTag] = useState('All');

  const handleProjectTagChange = (newProjectTag) => {
    setSelectedProjectTag(newProjectTag);
  };

  const filteredProjectsByTag = projectsData.filter((project) => project.tag.includes(selectedProjectTag));
  
  
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjectsByTag.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            liveURL={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
