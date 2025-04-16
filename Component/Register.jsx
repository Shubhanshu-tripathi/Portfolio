import { useState } from "react";


function Register() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const [agree, setAgree] = useState(false);

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) { // Check if the checkbox is not checked
      alert("You must agree to the terms of service before registering.");
      return; // Stop form submission
    }
    // Form submission logic here
    console.log('Form Submitted:', input, agree);

    // Reset form after submission
    setInput({
      name: "",
      phone: "",
      email: "",
      password: ""
    });
      // No need to reset agree, it's already false by default
      alert("thanks")
  };

  return (
    <div className="h-[100%] w-[100%] bg-black flex items-center justify-center">
      <div className="h-[85%] w-[35%] bg-zinc-900">
        <h1 className="font-semibold text-white text-4xl mt-3 ml-[35%]">Register</h1>
        <form onSubmit={handleSubmit} className="h-[90%] " >
          <input
            className="h-[8%] w-[60%] rounded-md mt-10 ml-24"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            id=""
          />
          <input
            className="h-[8%] w-[60%] rounded-md ml-24 mt-4"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            id=""
          />
          <input
            className="h-[8%] w-[60%] rounded-md ml-24 mt-4"
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            id=""
          />
          <input
            className="h-[8%] w-[60%] rounded-md ml-24 mt-4"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            id=""
          />
          <br />
          <div className="h-[8%] w-[60%] ml-24 mt-8 flex items-center">
            <input
              className="w-5 h-5"
              type="checkbox"
              checked={agree} 
              onChange={handleCheckboxChange}
              id=""
            />
            <h1 className="ml-4 font-semibold text-white">I agree to all statements in the Terms of Service</h1>
          </div>
          <button
            type="submit"
            className="h-[10%] w-[50%] bg-blue-600 rounded-sm font-semibold text-white mt-8 ml-[22%]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;