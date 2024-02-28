import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 md:py-32 relative"
    >
      <h2 className="text-4xl font-bold text-white mb-6 md:mb-8">
        Let Us Connect
      </h2>
      <p className="text-[#ADB7BE] mb-6 md:mb-8 max-w-md md:max-w-lg text-justify">
        I&#39;m currently seeking new opportunities, and would love to connect.
        I am available on LinkedIn for a conversation or if you just want to say hi. I&#39;ll get back to you ASAP!
      </p>
      <div className="socials flex flex-row gap-2 items-center justify-center">
        <Link href="https://github.com/manvinderjit" target="_blank">
          <Image src={GithubIcon} alt="GitHub Link" />
        </Link>
        <Link href="https://linkedin.com/in/manvinderjit" target="_blank">
          <Image src={LinkedinIcon} alt="LinkedIn Profile Link" />
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
