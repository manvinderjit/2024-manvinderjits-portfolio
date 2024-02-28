import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, techStack, liveURL, gitUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay flex gap-4 items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></CodeBracketIcon>
          </Link>
          <Link
            href={liveURL}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></EyeIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] px-4 py-6 text-justify">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] h-32 md:h-24">
          <span className="font-semibold text-white"> Description:</span>
          {` ${description}`}
        </p>
        <p className="text-[#ADB7BE] h-24 md:h-16 mt-6 sm:mt-4 md:mt-2">
          <span className="font-semibold text-white"> Tech Stack:</span>
          {` ${techStack}`}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
