const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gradient-to-b from-teal-500 to-teal-700 text-white text-center py-16 px-8 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-wide">About Us</h1>
        <p className="mx-auto text-lg md:text-xl mb-8 opacity-80">
          When you bring together people from different backgrounds, you'll be surprised how diverse their lines of thought are, and yet, you'll find them supporting your revolutionary ideas.
        </p>
        <button className="bg-white text-teal-700 hover:bg-teal-100 px-8 py-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500">
          Explore Our Innovations
        </button>
      </div>
      <h2 className="my-10 text-3xl md:text-5xl font-extrabold tracking-wide text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
          Explore Our Special Interest Groups
        </span>
      </h2>
    </div>
  );
};

export default About;
