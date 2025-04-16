import { useState } from "react";
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);
  const handle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheack = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="h-[100%] w-[100%] bg-black flex  items-center justify-center ">
        <div className="h-[80%] w-[35%] rounded-lg bg-zinc-900 drop-shadow-5xl">
          <h2 className=" font-semibold text-white text-4xl mt-3 ml-[35%]">
            Sing in
          </h2>
          <input
            className="mt-10 h-[8%] w-[60%] rounded-md  hover:border-2 border-blue-600 ml-24"
            type="text"
            placeholder="Email"
            onChange={handle}
            name="email"
            value={input.email}
            id=""
          />{" "}
          <br />
          <input
            className="mt-5  h-[8%] w-[60%] rounded-md ml-24 hover:border-2 border-blue-600 font-semibold "
            type="password"
            placeholder="Password"
            onChange={handle}
            name="password"
            value={input.password}
            id=""
          />
          <div className="h-[5%] w-[50%]  ml-28  mt-5 flex items-center ">
            <input
              className="ml-4 w-4 h-4"
              type="checkbox"
              name=""
              id=""
              onChange={handleCheack}
              value={remember}
            />
            <h3 className=" text-white ml-5">Remeber Password</h3>
          </div>
          <button
            onClick={handleSubmit}
            className="h-[8%] w-[55%] bg-blue-600 ml-[20%] mt-5  font-semibold text-sm text-white"
          >
            LOGIN
          </button>
          <h1 className="text-white mt-5 ml-[22%]">
            Don't have an account{" "}
            <a className="text-blue-600 text-[14px]" href="register">
              Register Here ?
            </a>{" "}
          </h1>
          <div className=" h-[1px] w-[65%] ml-[14%] mt-[5%] bg-white"></div>
          <button className="h-[8%] w-[55%] bg-red-600 ml-[20%] mt-8  font-semibold text-sm text-white flex items-center ">
            <img className="h-[40%] w-[8%] ml-11" src={google} alt="" />
            <h1 className="ml-3"> SIGN IN WITH GOOGLE</h1>
          </button>
          <button className="h-[8%] w-[55%]  bg-blue-800 ml-[20%] mt-5 flex items-center  font-semibold text-sm text-white">
            <img className="ml-6" src={facebook} alt="" />
            <h1 className="ml-2"> SIGN IN WITH FACEBOOK</h1>
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
