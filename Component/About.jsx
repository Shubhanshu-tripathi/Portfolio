import logo from "../assets/logo.png";

function About() {
  return (
    <>
      <div className="min-h-screen w-full bg-black px-4 py-10">
        <div className="flex justify-center mb-10">
          <div className="text-center">
            <h1 className="font-bold text-white text-5xl mb-3">About Me</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
          <div className="rounded-md h-60 w-60 bg-white hidden sm:block"></div>

          <div className="w-full md:w-2/3">
            <p className="font-semibold text-white text-sm sm:text-base mb-6 leading-relaxed">
              I am an experienced MERN Developer with over a decade of
              professional expertise.
              <br />
              <br />
              Along with full-stack web development, I have a strong foundation
              in <strong>Java programming</strong> and have practiced over{" "}
              <strong>500+ DSA problems</strong> to sharpen my problem-solving
              skills.
              <br />
              <br />
              My dedication to clean code, performance optimization, and
              scalable architecture sets me apart in delivering high-quality
              software solutions.
            </p>

            <div className="space-y-4">
              {[
                { skill: "HTML & CSS", className: "loader" },
                { skill: "Javascript", className: "loader1" },
                { skill: "React js", className: "loader2" },
                { skill: "Next js", className: "loader3" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <h1 className="font-bold text-white w-24">{item.skill}</h1>
                  <div className="flex-1 h-4 bg-white rounded-md">
                    <div
                      className={`${item.className} h-full rounded-md bg-gradient-to-r from-purple-500 to-pink-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="border-r-0 sm:border-r-4 border-indigo-500">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              2+
            </h1>
            <h2 className="mt-2 text-white font-bold">YEAR OF EXPERIENCE</h2>
          </div>
          <div className="border-r-0 sm:border-r-4 border-indigo-500">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              10+
            </h1>
            <h2 className="mt-2 text-white font-bold">PROJECT COMPLETED</h2>
          </div>
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              05+
            </h1>
            <h2 className="mt-2 text-white font-bold">HAPPY CLIENT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
