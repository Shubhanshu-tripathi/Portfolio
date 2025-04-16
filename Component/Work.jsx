import project1 from "../assets/project_1.svg";
import project2 from "../assets/project_2.svg";
import project3 from "../assets/project_3.svg";
import project4 from "../assets/project_4.svg";
import project5 from "../assets/project_5.svg";
import project6 from "../assets/project_6.svg";
import arrow from "../assets/arrow.png";
import logo from "../assets/logo.png"


function Work() {
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <div className="h-[14%] w-[100%] flex items-center justify-center">
                    <div className="h-[100%] w-[30%] flex items-center justify-center relative">
                        <h1 className="logo text-white font-bold text-5xl absolute">My Work</h1>
                        <img className="logo h-[90%] w-[30%]" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="h-[89%] w-[100%] mt-3">
                    <div className="Work h-[42%] w-[100%] flex items-center justify-around">
                        <div className="dash h-[90%] bg-white w-[25%]">
                            <img src={project1} alt="Project 1" />
                        </div>
                        <div className="h-[90%] w-[25%] bg-white">
                             <img src={project3} alt="" />
                        </div>
                        <div className="h-[90%] w-[25%] bg-white">
                        <img src={project4} alt="" />

                        </div>
                    </div>
                    <div className="Work2 h-[42%] w-[100%] flex items-center justify-around">
                        <div className="h-[90%] w-[25%] bg-white">
                             <img src={project5} alt="" />
                        </div>
                        <div className="h-[90%] w-[25%] bg-white">
                             <img src={project1} alt="" />
                        </div>
                        <div className="h-[90%] w-[25%] bg-white">
                            <img src={project6} alt="" />
                        </div>
                    </div>
                    <button className="h-[8%] w-[10%] bg-black ml-[45%]  rounded-2xl font-light text-white flex items-center hover:border-blue-400 border-[1px] border-white mt-4">
                        <h1 className="ml-12">More</h1>
                        <img className="h-[30%] w-[20%] mt-1 ml-3" src={arrow} alt="Arrow" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Work;
