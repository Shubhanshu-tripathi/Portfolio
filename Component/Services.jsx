import logo from "../assets/logo.png"

function Services() {
    
    return (<>
    
        <div className=" h-[100%]  w-[100%]" >
            <div className="h-[10%] w-[100%] flex items-center justify-center " >
                <div className="h-[100%] w-[20%] flex items-center justify-center relative bg-black" >
                       <img className="h-[100%] w-[50%]" src={logo} alt="" />
                     <h1 className="text-white font-bold text-5xl absolute" >My Services</h1>
                </div>     
                 </div>
            <div className="box   mt-8 flex items-center justify-around" >
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10 " >Web design</h1>
                     <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>
                </div>
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse  hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10" >Graphics design</h1>
                    <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>

                </div>
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse  hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10" >Social media</h1>
                    <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>

                </div>
                
            </div>
            <div className="box h-[38%] w-[100%] mt-4  items-center justify-around flex" >
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse  hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10" >App design</h1>
                    <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>

            </div>
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse  hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10" >Digital marketing</h1>
                    <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>

                </div>
                <div className="box2 h-[100%] w-[30%] bg-black border-2 border-white rounded-md animate-pulse hover:bg-zinc-900" >
                    <h1 className="number font-bold text-3xl ml-5 mt-10" >Content writing</h1>
                    <p className="text-white font-semibold mt-5 ml-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem possimus odit expedita unde, molestias voluptas ipsum amet quisquam, at dignissimos labore enim.</p>

                </div>
                
                
                </div>
            </div>
    
    
    
    
    
    </>)
}
export default Services