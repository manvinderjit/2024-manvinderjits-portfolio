"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="col-span-1 place-self-center text-center sm:text-left">
          {/* <h6 className="text-xs mb-4">$su Manvinderjit </h6> */}
          {/* <h6 className="text-xs mb-4">$const USER = Manvinderjit </h6> */}
          {/* <h6 className="text-xs">console.log(USER) </h6> */}
          <h1 className="text-white mb-4 text-3xl lg:text-5xl font-extrabold">
            <span>Hi, I am Manvinderjit!</span>
          </h1>
          {/* <h6 className="text-xs">console.log(USER.skills); </h6> */}
          <h2 className="text-white text-2xl lg:text-4xl font-semibold">
            <span>I develop for </span> 
            <TypeAnimation
              sequence={[
                "the Web.",
                2000,
                "MERN Stack.",
                2000,
                "Blockchain.",
                2000,
              ]}
              wrapper="span"
              speed={30}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-white my-3 text-base lg:text-large text-justify">
            Computer programming is my hobby, passion, and career. Having always
            loved coding, I have made it my sole professional priority. Web apps
            is my core domain and I enjoy both front-end and back-end although
            with the M.E.R.N. being my core tech stack and occassionally
            tinkering with Solidity and Ethereum blockchain.
          </p>
          <p className="text-white my-3 text-base lg:text-large text-justify">
            I worked as a freelancer with a primary focus on S.E.O., along with
            setup, deployment, and management of WordPress websites on
            platforms, including Bluehost, Cloudways, and Digital Ocean,
            utilization of CDNs (Cloudflare), Elementor website builder and
            ServerPilot.
          </p>
          <p className="text-white my-3 text-base lg:text-large text-justify">
            From an academic standpoint, I have a Bachelors of Technology and a
            Masters of Engineering in Information Technology. I completed a PG
            Certificate in Back-End and Blockchain Development from York
            University. My passion about following latest consumer computer
            hardware developments inspired me to launch my own blog, PCPepper.
          </p>
          <div className="my-4 text-center">
            <button className="px-6 py-3 w-52 rounded-xl mx-3 bg-white hover:bg-slate-200 text-black mb-5 md:mb-0">
              Hire Me!
            </button>
            <button className="px-6 py-3 w-52 rounded-xl mx-3 border border-white hover:bg-slate-900 text-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-1 place-self-center mt-4 lg:mt-0">
          <div className="rounded-lg bg-gray-900 w-[500px] h-[600px] relative">
            <Image
              src="/images/manvinderjit.jpg"
              alt="Manvinderjit"
              className="rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
