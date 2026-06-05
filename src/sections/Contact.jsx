const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-black-100 rounded-2xl max-w-4xl mx-auto my-10">
      <h3 className="text-white font-black text-[40px]">Contact.</h3>
      <p className="text-secondary mt-2">Email: rnaahmd240@gmail.com</p>
      <form className="mt-5 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="bg-tertiary p-4 rounded-lg outline-none border-none text-white" />
        <button className="bg-[#915EFF] py-3 px-8 rounded-xl text-white font-bold w-fit">Send</button>
      </form>
    </section>
  );
};

export default Contact; 