import { Navigate, useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
function Navbar() {
         const nevigate = useNavigate()
           
           

    return (<>
    
        <div className="h-[10%] w-[100%] flex items-center justify-around bg-black" >
             <img className="w-[7%] h-[95%]" src={logo} alt="" />
            <div className="h-[100%]  bg-black flex items-center justify-around w-[45%]" >
                <a className="font-semibold text-white font-serif" href="/">Home</a>
                <a className="font-semibold text-white font-serif" href="about">About me</a>      
                <a className="font-semibold text-white font-serif" href="services">Service</a>  
                <a className="font-semibold text-white font-serif" href="portfolio">Portfolio</a>
                <a className="font-semibold text-white font-serif" href="login">Contact</a>          
            </div>
             <button onClick={()=>nevigate("ContactWithUs")} className=" h-[60%] w-[10%] rounded-3xl font-semibold text-white bg-white  bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse " > Contact with me </button>
                
         </div>
    
    
    </>)
}
export default Navbar