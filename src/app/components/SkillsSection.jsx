'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const skillData = [
  {
    name: "Html 5",
    image: "/images/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    image: "/images/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    image: "/images/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    image: "/images/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    image: "/images/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next JS",
    image: "/images/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    image: "/images/skills/redux.png",
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    image: "/images/skills/bootstrap-logo.svg",
    width: 80,
    height: 80,
  },
  {
    name: "EJS",
    image: "/images/skills/ejs.png",
    width: 80,
    height: 80,
  },

  {
    name: "",
    image: "/images/skills/",
    width: 80,
    height: 80,
  },

  {
    name: "Node js",
    image: "/images/skills/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "ExpressJS",
    image: "/images/skills/express.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    image: "/images/skills/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Docker",
    image: "/images/skills/docker-mark.png",
    width: 80,
    height: 80,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center pt-20 md:pt-32"
    >
      <h2 className="text-center text-4xl font-bold mb-12 md:mb-20">Skills</h2>
      <div className="flex flex-col max-w-[80%] gap-16 md:gap-32 text-center ">
        {/* <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {skillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="w-[30px] sm:w-[40px] md:w-[80px] h-[30px] sm:h-[40px] md:h-[80px]">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {skillData.map((skill, index) => (
            <SwiperSlide key={index}>              
              <div className="w-[30px] sm:w-[40px] md:w-[80px] h-[30px] sm:h-[40px] md:h-[80px] relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {skillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="w-[30px] sm:w-[40px] md:w-[80px] h-[30px] sm:h-[40px] md:h-[80px] relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SkillsSection;
