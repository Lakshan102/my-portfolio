import React from 'react'

const ProjectTags = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-500" : "text-[#ADB7BE] border-slate-500 hover:border-white"
  return (
    <button
      className={`${buttonStyle} touch-target rounded-full border-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base lg:text-xl cursor-pointer transition-all duration-300 hover:scale-105`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTags