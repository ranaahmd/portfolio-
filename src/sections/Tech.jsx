import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 py-20 max-w-7xl mx-auto'>
      {technologies.map((tech) => (
        <div 
          className='w-28 h-28 flex flex-col items-center justify-center bg-[#1d1836] rounded-full border border-white/10 hover:border-[#915EFF] transition-all shadow-lg group' 
          key={tech.name}
        >
          {/* تصغير حجم الأيقونة هنا */}
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" 
          />
          <p className="text-[#aaa6c3] text-[10px] mt-2 font-medium uppercase tracking-wider group-hover:text-white">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Tech;