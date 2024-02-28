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
    name: "Redux",
    image: "/images/skills/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    image: "/images/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    image: "/images/skills/next.png",
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
    name: "Stripe Payment",
    image: "/images/skills/stripe.webp",
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
    name: "Mongo db",
    image: "/images/skills/mongodb.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];

const SkillsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center my-10">
      <h2 className="text-center text-4xl font-bold mt-20 mb-10">Skills</h2>
      <div className="flex flex-col gap-12 max-w-[80%] text-center items-center">
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
                  object-fit="contain"
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
              <div className="w-[30px] sm:w-[40px] md:w-[80px] h-[30px] sm:h-[40px] md:h-[80px] relative" >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill={true}
                  object-fit="contain"
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
