import { useState } from "react";
import logo from "../assets/logo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Touch() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = input;

    if (!name || !email || !message) {
      alert("Please fill all the fields");
    } else {
      alert("Thanks for reaching out!");
      setInput({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <div className="w-full bg-black">
      
        <div className="w-full h-1/5 flex flex-col md:flex-row items-center justify-center relative">
          <div className="flex items-center justify-center relative">
            <img className="h-3/4 md:w-1/4" src={logo} alt="Logo" />
            <h1 className="absolute text-white font-bold text-3xl md:text-5xl">Get In Touch</h1>
          </div>
        </div>

     
        <div className="w-full h-4/5 flex flex-col md:flex-row items-center justify-between p-5">
        
          <div className="w-full md:w-2/5 bg-black text-white p-5 space-y-5">
            <h1 className="text-3xl font-semibold">Let's Talk</h1>
            <p className="font-semibold">
              I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime.
            </p>

           
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-md">
                <FaEnvelope className="text-xl text-pink-400" />
                <span>shubhanshu12tripathi@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-md">
                <FaPhoneAlt className="text-xl text-purple-400" />
                <span>+9131694200</span>
              </div>

              <div className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-md">
                <FaMapMarkerAlt className="text-xl text-green-400" />
                <span>Bhopal, Madhya Pradesh</span>
              </div>
            </div>
          </div>

     
          <div className="w-full md:w-3/5 bg-black text-white p-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handle}
                value={input.name}
                className="w-full p-3 bg-zinc-900 text-white text-xl rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handle}
                value={input.email}
                className="w-full p-3 bg-zinc-900 text-white text-xl rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                onChange={handle}
                value={input.message}
                className="w-full p-3 h-32 bg-zinc-900 text-white text-xl rounded-lg"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Touch;
