import logo from "../assets/logo.png"
function About() {
    return (<>
        <div className="h-[1200px] w-[100%]    bg-black" >
            <div className="h-[20%] w-[100%] flex justify-center " >
                
            <div className=" h-[100%] w-[20%] flex items-center  relative justify-center " >
                        <h1 className="font-bold text-white text-5xl absolute mb-3" >About me</h1>
                  <img className="h-[50%] w-[33%] " src={logo} alt="" />
              </div>
                     </div>
            <div className="h-[70%] w-[100%] bg-blue-" >
                <div className="h-[70%] flex items-center justify-evenly w-[100%] " >
                    <div className="dp rounded-md h-[60%] w-[15%] bg-white" ></div>
                    <div className="h-[100%] w-[60%] " >
                        <p className="font-semibold text-white text-[15px] text-start" >I am an experienced Frontend Developer with over a decode of professional experties in the field.Throughout my career. I have had the privilege of collaboring with prsetigious organization contributing to their success and growth. <br /><br />
                            My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project  
                        </p>
                        <div className=" firstbox h-[15%] w-[72%] flex items-center justify-around   ml-6 mt-5" >
                            <h1 className="font-bold text-white" >HTML & CSS</h1>
                            <div className="h-[15%] w-[80%] rounded-md bg-white" >
                              <div className="loader rounded-md bg-gradient-to-r from-purple-500 to-pink-500" ></div>
                                  </div>
                        </div>
                        <div className="h-[15%] w-[73%] flex items-center justify-around  bg-black ml-6 mt-5" >
                        <h1 className="font-bold text-white" >Javascript</h1>
                        <div className="h-[15%] w-[80%] rounded-md bg-white" >
                              <div className="loader1 rounded-md bg-gradient-to-r from-purple-500 to-pink-500" ></div>
                                  </div>
                        </div>
                        <div className="h-[15%] w-[74%] flex items-center justify-around  bg-black ml-6 mt-5" >

                        <h1 className="font-bold text-white" >React js</h1>
                        <div className="h-[15%] w-[80%] rounded-md bg-white" >
                              <div className="loader2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500" ></div>
                                  </div>
                        </div>
                        <div className="h-[15%] w-[74%] flex items-center justify-around hover:w-[68%] bg-black ml-6 mt-5" >
                        <h1 className="font-bold text-white" >Next js</h1>
                        <div className="h-[15%] w-[80%] rounded-md bg-white" >
                              <div className="loader3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500" ></div>
                                  </div>
                        </div>
                        
                     </div>
                </div>
                <div className="h-[20%] w-[100%]   mt-[5%] flex items-center justify-around " >
                    <div className="h-[90%]   w-[20%] border-r-4 border-indigo-500 " >
                        <h1 className="number h font-bold text-5xl ml-20 mt-10" >10+</h1>
                           <h2 className="mt-5 ml-8 font-bold text-white" >YEAR OF EXPERIENCE</h2>
                    </div>
                    <div className="h-[90%] b w-[20%] border-r-4 border-indigo-500 " >
                        <h1 className="number h font-bold text-5xl ml-20 mt-10 " >90+</h1>
                            <h2 className="font-bold text-white mt-5 ml-5" >PROJECT COMPLEDED</h2>
                    </div>
                    <div className="h-[90%] w-[20%]  " >
                        <h1 className="number h font-bold text-5xl ml-20 mt-10" >15+</h1>
                          <h2 className="font-bold text-white mt-5 ml-16" >HAPPY CLIENT</h2>
                    </div>
                    
                     </div> 
               </div>
             
            </div>
    </>)
}
export default About