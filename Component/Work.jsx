import project1 from "../assets/project_1.svg";
import project3 from "../assets/project_3.svg";
import project4 from "../assets/project_4.svg";
import project5 from "../assets/project_5.svg";
import project6 from "../assets/project_6.svg";
import arrow from "../assets/arrow.png";
import logo from "../assets/logo.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectData = [
  {
    img: project1,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo1",
  },
  {
    img: project3,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo2",
  },
  {
    img: project4,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo3",
  },
  {
    img: project5,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo4",
  },
  {
    img: project1,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo5",
  },
  {
    img: project6,
    live: "https://live-link.com",
    github: "https://github.com/yourrepo6",
  },
];

function Work() {
  return (
    <div className="min-h-screen w-full  text-white px-4 py-10">
      <div className="flex justify-center items-center mb-10">
        <div className="relative bg-black w-full md:w-1/2 h-20 flex items-center justify-center">
          <img className="h-full w-[50px] md:w-[70px]" src={logo} alt="logo" />
          <h1 className="absolute text-white font-bold text-3xl md:text-5xl">
            My Work
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10"
          >
            <img
              src={project.img}
              alt={`Project ${index + 1}`}
              className="w-full h-[220px] object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
              <h2 className="text-lg font-semibold mb-4">Technologies Used</h2>
              <ul className="text-sm text-center mb-6 space-y-1">
                <li>ReactJS</li>
                <li>CSS / Tailwind</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
              </ul>
              <div className="flex gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-green-400"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-400"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-black border border-white hover:border-blue-400 text-white px-6 py-2 rounded-2xl flex items-center space-x-3">
          <span>More</span>
          <img src={arrow} alt="arrow" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Work;
