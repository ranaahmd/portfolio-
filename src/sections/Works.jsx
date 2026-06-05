import React from "react";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags }) => (
  <div className='bg-[#151030] p-6 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:bg-[#1d1836] transition-colors shadow-2xl relative overflow-hidden group'>
    {/* لمسة جمالية: خط ملون في أعلى الكرت */}
    <div className='absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
    
    <div className='mt-2'>
      <h3 className='text-white font-bold text-[22px] tracking-tight'>{name}</h3>
      <p className='mt-3 text-secondary text-[14px] leading-relaxed line-clamp-3'>{description}</p>
    </div>
    
    <div className='mt-6 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <span key={tag.name} className={`text-[12px] font-mono px-2 py-1 rounded bg-black/30 ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </div>
);


const Works = () => {
  return (
    <div className='mt-20 px-6 max-w-7xl mx-auto' id="projects">
      <p className="text-[#aaa] text-[18px] uppercase tracking-wider">My work</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]">Projects.</h2>
      
      <div className='mt-10 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;