import React from "react";
import { services } from "../constants";

const ServiceCard = ({ title }) => (
  <div className='xs:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-[#1d1836] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='mt-20 px-6 max-w-7xl mx-auto'>
      <p className="text-[#aaa] text-[18px] uppercase tracking-wider">Introduction</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]">Overview.</h2>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};
export default About;