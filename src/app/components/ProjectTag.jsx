import React from 'react';

const ProjectTag = ({ name, isSelected, onClick }) => {
  const buttonStyles = isSelected ? 'text-white border-red-900' : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer w-32 ${buttonStyles}`} onClick={() => onClick(name)}>
      { name }
    </button>
  );
}

export default ProjectTag;
