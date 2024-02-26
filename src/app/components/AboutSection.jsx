'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [isPending, startTransition] = useTransition();
  const [currentTabId, setCurrentTabId] = useState('skills');  

  const handleTabChange = (tabId) => {
    startTransition(() => {
        setCurrentTabId(tabId);
    })
    console.log(currentTabId);
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/manvinderjit.jpg"
          alt="Manvinderjit"
          width={500}
          height={500}
        />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg text-white">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={currentTabId === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={currentTabId === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={currentTabId === "certification"}
              selectTab={() => handleTabChange("certification")}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === currentTabId).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
