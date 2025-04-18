function Home() {
    return (
      <div className=" w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        {/* Profile Image */}
        <div className="dp w-40 h-40 md:w-56 md:h-56 mt-10 rounded-full bg-white shadow-lg"></div>
  
        {/* Main Text Section */}
        <div className="w-full max-w-4xl mt-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="text-pink-500">I'm Shubhanshu,</span> MERN <br /> developer based in India.
          </h1>
          <p className="mt-6 text-sm md:text-lg text-gray-300">
            I am a MERN developer from Bhopal, India with 1 year of experience <br className="hidden md:block" />
            in freelancing , building scalable and responsive web applications
          </p>
  
          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl font-semibold shadow-md hover:scale-105 transition">
              Contact with me
            </button>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-3xl text-white hover:border-blue-400 transition"
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  