import { useState } from "react";
import logo from "../assets/logo.png"
import email from "../assets/email.png"
import address from "../assets/address.png"
import  phone from "../assets/phone.png"


function Touch() {
  const [input, setInput] = useState({
    name:"",
    email:"",
    message:"",
  });
  
  const [send, setSend] = useState("");

  const handle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
     const {name, email, message} = input

    

    if (!name || !email || !message) {
      alert("Please fill all the fields");
    } else {
         alert("thanks!");
         setInput({ name: "", email: "", message: "" });
        setInput({
             name: "",
             email: "",
             message: "",
  
         });
    }
  };

  return (
    <>
      <div className="h-[100%] w-[100%] bg-black">
        <div className="h-[20%] w-[100%]  flex items-center justify-center">
          <div className="h-[100%] w-[30%]  flex items-center justify-center relative">
            <img className="h-[70%] w-[30%]   " src={logo} alt="" />
            <h1 className="font-bold text-5xl absolute text-white">
              Get In Touch
            </h1>
          </div>
        </div>
        <div className="h-[80%] w-[100%] bg-white flex items-center justify-between">
          <div className="h-[100%] w-[40%] bg-black">
            <h1 className="number font-semibold text-5xl ml-10 mt-20">
              Let's Talk
            </h1>
            <p className="text-white font-semibold mt-10 ml-4">
              I'm currently avaliable to take on new project so feel free to
              send me a meassage about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="h-[10%] w-[60%]   flex items-center ml-4 mt-5 ">
              <img className="h-[60%] w-[8%]" src={email} alt="" />
              <h1 className="font-bold text-white ml-6">
                shubhanshu@gmail.com
              </h1>
            </div>
            <div className="h-[10%] w-[60%]  flex items-center ml-4 mt-">
              <img className="h-[60%] w-[8%]" src={phone} alt="" />
              <h1 className="font-bold text-white ml-6">+9131694200</h1>
            </div>
            <div className="h-[10%] w-[60%] bg-black flex items-center ml-4">
              <img className="h-[60%] w-[8%]" src={address} alt="" />
              <h1 className="font-bold text-white ml-6">Bhoapl Madhypradesh</h1>
            </div>
          </div>
          <div className="h-[100%] w-[60%] bg-black">
            <input
              className="input h-[10%] w-[80%] mt-20 ml-5 font-semibold text-2xl text-white bg-zinc-900 rounded-lg"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={handle}
              value={input.name}
              id=""
            />
            <input
              className="input h-[10%] w-[80%] mt-10 ml-5 font-semibold text-2xl text-white bg-zinc-900 rounded-lg"
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={handle}
              value={input.email}
              id=""
            />
            <input
              className="input h-[30%] w-[80%] mt-10 ml-5 font-semibold text-2xl text-white bg-zinc-900 rounded-lg"
              type="text"
              placeholder="Enter Your Message"
              id=""
              name="message"
              onChange={handle}
              value={input.message}
            />{" "}
            <br /> <br />
            <button
              onClick={handleSubmit}
              className=" h-[10%] w-[15%] rounded-3xl font-semibold ml-5 text-white bg-white  bg-gradient-to-r from-purple-500 to-pink-500 "
            >
              {" "}
              Submit Now{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Touch;
