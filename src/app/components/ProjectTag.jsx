import React from 'react';

const ProjectTag = ({ name, isSelected, onClick }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-purple-500 via-pink-600 to-red-600"
    : "text-[#ADB7BE] border-slate-600 hover:bg-gradient-to-r from-slate-700 to-slate-700";
  return (
    <button
      className={`rounded-full p-[2px] text-xl cursor-pointer w-40 ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      <span className='flex w-full h-full items-center justify-center bg-gray-900 rounded-full p-2 hover:bg-slate-800'>
        {name}
      </span>
    </button>
  );
}

export default ProjectTag;
