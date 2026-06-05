const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent' />
        </div>
        <div>
          <h1 className="text-white font-black lg:text-[70px] sm:text-[50px] text-[40px]">
            Hi, I'm <span className='text-[#915EFF]'>Rana</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[26px] text-[18px] mt-4 leading-relaxed">
            Software Engineer specializing in scalable, <br className='sm:block hidden' />
            user-centric web and mobile solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;