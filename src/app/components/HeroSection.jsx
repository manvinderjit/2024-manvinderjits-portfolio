"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gray-900 w-[320px] h-[320px] overflow-hidden">
            <Image
              src="/images/manvinderjit.jpg"
              alt="Manvinderjit"
              className="rounded-full object-cover scale-125"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 place-self-center text-center"
        >
          <h1 className="text-white mb-4 text-3xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-red-600">
              Hi, I am Manvinderjit!
            </span>
          </h1>
          <h2 className="text-white text-lg lg:text-xl font-medium">
            <span>Fullstack | Cloud | AWS </span>            
          </h2>
          <p className="text-white my-3 text-base lg:text-large text-justify ">
            Computer programming is my hobby, passion, and career. Having always
            loved coding, I have made it my sole professional priority. Web apps
            is my core domain and I enjoy both front-end and back-end although
            with the M.E.R.N. being my core tech stack and occassionally
            tinkering with Solidity and Ethereum blockchain.
          </p>
          <p className="text-white my-3 text-base lg:text-large text-justify ">
            I worked as a freelancer with a primary focus on S.E.O., along with
            setup, deployment, and management of WordPress websites on
            platforms, including Bluehost, Cloudways, and Digital Ocean,
            utilization of CDNs (Cloudflare), Elementor website builder and
            ServerPilot.
          </p>
          <p className="text-white my-3 text-base lg:text-large text-justify ">
            From an academic standpoint, I have a Bachelors of Technology and a
            Masters of Engineering in Information Technology. I completed a PG
            Certificate in Back-End and Blockchain Development from York
            University. My passion about following latest consumer computer
            hardware developments inspired me to launch my own blog, PCPepper.
          </p>
          <div className="my-4 text-center">
            <Link href="https://linkedin.com/in/manvinderjit" target="_blank">
              <button className="p-[2px] h-12 w-52 rounded-xl mx-3 my-2 md:my-0 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 hover:bg-slate-900 text-white font-semibold ">
                Hire Me
              </button>
            </Link>
            <Link href="https://github.com/manvinderjit" target="_blank">
              <button className="p-[2px] w-52 h-12 rounded-xl mx-3 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 hover:bg-slate-900 text-white font-semibold ">
                <span className="flex w-full h-full items-center justify-center bg-gray-900 text-white rounded-xl p-2 hover:bg-slate-800">
                  Visit Github
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection
