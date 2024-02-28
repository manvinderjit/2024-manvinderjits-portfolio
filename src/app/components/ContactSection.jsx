import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";

const ContactSection = () => {
  return (
    // <section id="contact">
    //   <div className="flex items-center justify-center">
    //     <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 ">
    //       Let Us Connect!
    //     </h2>
    //   </div>
    // </section>
    <section className="flex flex-col items-center justify-center my-12 md:my-16 py-24 gap-4 relative">
      {/* <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      {/* <div className="flex "> */}
        <h2 className="text-4xl font-bold text-white mt-4 md:mb-2">
          Let Us Connect
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md md:max-w-lg text-justify">
          I'm currently seeking new opportunities, and would love to connect.
          Whether you have a question or just want to say hi, I am available on LinkedIn.
          I'll get back to you ASAP!
        </p>
        <div className="socials flex flex-row gap-2 items-center justify-center">
          <Link href="https://github.com/manvinderjit" target='_blank'>
            <Image src={GithubIcon} alt='GitHub Link'/>
          </Link>
          <Link href="https://linkedin.com/in/manvinderjit" target='_blank'>
            <Image src={LinkedinIcon} alt='LinkedIn Profile Link'/>
          </Link>
        </div>
      {/* </div> */}
    </section>
  );
}

export default ContactSection;
