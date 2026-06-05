const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-6 fixed top-0 z-20 bg-primary/80 backdrop-blur-md">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
          Rana Ahmed <span className="hidden sm:block ml-2 text-[#915EFF]">| Full Stack Developer</span>
        </p>
        <ul className="list-none flex flex-row gap-10">
          <li className="text-secondary hover:text-white transition-colors cursor-pointer"><a href="#about">About</a></li>
          <li className="text-secondary hover:text-white transition-colors cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="text-secondary hover:text-white transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}; export default Navbar