import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from 'lucide-react'; 

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="w-full bg-black text-white px-4 py-3 flex items-center justify-between shadow-md">
       
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold font-serif">My Portfolio</span>
        </div>

       
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="hover:text-pink-400 font-serif">Home</a>
          <a href="/about" className="hover:text-pink-400 font-serif">About me</a>
          <a href="/services" className="hover:text-pink-400 font-serif">Service</a>
          <a href="/portfolio" className="hover:text-pink-400 font-serif">Portfolio</a>
          <a href="/ContactwithUs" className="hover:text-pink-400 font-serif">Contact</a>
        </div>

        
        <button
          onClick={() => navigate("/ContactWithUs")}
          className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-3xl font-semibold animate-pulse"
        >
          Contact with me
        </button>

       
        <div className="md:hidden" onClick={handleToggle}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      
      {isOpen && (
        <div className="bg-black text-white px-4 py-2 flex flex-col gap-4 md:hidden">
          <a href="/" className="hover:text-pink-400 font-serif">Home</a>
          <a href="/about" className="hover:text-pink-400 font-serif">About me</a>
          <a href="/services" className="hover:text-pink-400 font-serif">Service</a>
          <a href="/portfolio" className="hover:text-pink-400 font-serif">Portfolio</a>
          <a href="/login" className="hover:text-pink-400 font-serif">Contact</a>
          <button
            onClick={() => {
              navigate("/ContactWithUs");
              setIsOpen(false);
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-3xl font-semibold animate-pulse"
          >
            Contact with me
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
