"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    img: "/images/badges/aws-certified-solutions-architect-professional.png",
    embedId: "f202230a-7928-4f5e-92f8-df07885d2658",
  },
  {
    name: "AWS Certified Developer Associate",
    img: "/images/badges/aws-certified-developer-associate.png",
    embedId: "1f67e31b-4fe2-48b8-8783-77168e6c032d",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    img: "/images/badges/aws-certified-solutions-architect-associate.png",
    embedId: "d91a4b1c-7748-449c-b3fa-daa3458c22fa",
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    img: "/images/badges/aws-certified-sysops-administrator-associate.png",
    embedId: "1548bb30-9bc7-4e27-baae-acf44433f70f",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    img: "/images/badges/aws-certified-cloud-practitioner.png",
    embedId: "f8923180-73b7-4737-a3a1-ab9abdc48196",
  },
  {
    name: "Open JS Node.js Services Developer - JSNSD",
    img: "/images/badges/jsnsd-openjs-node-js-services-developer.png",
    embedId: "d5107f34-c94a-475b-96a2-f413dd61e6e2",
  },
  {
    name: "Hashicorp Certified Terraform Associate",
    img: "/images/badges/hashicorp-certified-terraform-associate-003.png",
    embedId: "1b5c08a5-3565-4af4-ba61-56d1337be1db",
  },
  {
    name: "Certified Kubernetes Application Developer",
    img: "/images/badges/ckad-certified-kubernetes-application-developer.png",
    embedId: "d067850c-6827-4964-a5df-b55358b3fbe8",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white pb-12 px-6 rounded-lg overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10"
      >
        {/* Profile Image */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
          <Image
            src="/images/manvinderjit.jpg"
            alt="Manvinderjit"
            fill
            className="object-cover scale-[1.35] object-[50%_-45%] transition duration-700 ease-in-out"
            priority
          />
        </div>

        {/* Intro Text */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Hi, This is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-red-600">
              Manvinder
            </span>
          </h1>

          <h2 className="text-gray-200 text-md lg:text-lg font-medium mb-4">
            Full Stack Developer | Cloud Engineer | AWS x5 Certified
          </h2>

          <p className="max-w-xl text-gray-400 text-base text-justify md:text-center mx-auto px-4">
            A geek passionate about code, the cloud, and exploring what lies
            beyond the cusp of AI. On a quest to build scalable web applications
            and harness the power of the cloud to empower users along the way.
          </p>
        </div>

        {/* Certifications - 8 badges in 2 columns */}
        <div className="w-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6 justify-items-center">
            {certifications.slice(0, 8).map((cert, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center group"
              >
                <Link
                  href={`https://www.credly.com/badges/${cert.embedId}/embedded`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-28 w-28 bg-gray-800 p-2 rounded-lg border border-gray-700 group-hover:shadow-[0_0_15px_#ff4d6d] transition">
                    <Image
                      src={cert.img}
                      alt={cert.name}
                      fill
                      sizes="112px"
                      className="object-contain rounded-md p-2"
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Tooltip (now absolutely positioned but not affecting layout) */}
                <span className="absolute -bottom-8 text-sm bg-gray-900 text-gray-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <Link href="https://linkedin.com/in/manvinderjit" target="_blank">
            <button className="px-6 py-3 w-40 rounded-xl bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 text-white font-semibold shadow-[0_0_15px_#ff4d6d] hover:opacity-90 transition">
              Let&apos;s Connect
            </button>
          </Link>
          <Link href="https://github.com/manvinderjit" target="_blank">
            <button className="px-6 py-3 w-40 rounded-xl bg-gray-800 border border-pink-600 text-white font-semibold hover:bg-gray-700 transition">
              View GitHub
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
