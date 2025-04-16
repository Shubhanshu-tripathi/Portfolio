function Home() {
    
    return (<>
    
        <div className="h-[100%]  w-[100%] ">
             
            <div className="dp h-56 w-56 mt-[3%] ml-[42%] rounded-full bg-white" >
                
            </div>
            <div className="h-[60%]  w-[100%]  mt-5 bg-black " >
                <h1 className="font-bold text-5xl  text-white  ml-[29%]"> <samp className="name">I'm Shubhanshu,</samp>frontend <br />developer based in India.</h1>
                <p className="font-semibold  text-white mt-[3%] ml-[28%] "> I am frontend developer from bhoapl,India with 1 years of experience in multiple <br /> company like tcs,paytm</p>
                <div className=" h-[20%] w-[40%] mt-[5%] ml-[28%] flex items-center justify-around" >
                  <button className=" h-[60%] w-[40%]  rounded-3xl font-bold text-white bg-white  bg-gradient-to-r from-purple-500 to-pink-500" > Contact with me </button>
                    <a className="h-[60%] w-[30%] border-[1px] hover:border-blue-400  border-white bg-black rounded-3xl flex items-center justify-center text-white" href="/CV.pdf" target="_blank" rel="noopener noreferrer">My resume</a>
                </div>
            </div>
             
        
        
        </div>
    
    
    </>)


}
export default Home