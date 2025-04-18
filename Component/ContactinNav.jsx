import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaFacebook,
  } from "react-icons/fa";
  
  function ContactinNav() {
    return (
      <div className="w-full bg-black py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <p className="text-white text-sm font-light">
              Feel free to reach out! I'm open to freelance work, collaborations,
              and interesting ideas. Let’s build something awesome together!
            </p>
  
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaPhoneAlt className="text-xl text-purple-400" />
                <span className="font-medium">9131694200</span>
              </div>
  
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaEnvelope className="text-xl text-pink-400" />
                <span className="font-medium">Jigyansu17tripathi@gmail.com</span>
              </div>
  
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaMapMarkerAlt className="text-xl text-green-400" />
                <span className="font-medium">Bhopal, Madhya Pradesh</span>
              </div>
  
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaLinkedin className="text-xl text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/shubhanshu-tripathi-03a60b27b/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
  
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaGithub className="text-xl text-white" />
                <a
                  href="https://github.com/Shubhanshu-tripathi"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
  
              {/* Instagram and Facebook links added */}
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaInstagram className="text-xl text-gradient-to-r from-pink-500 to-purple-500" />
                <a
                  href="https://www.instagram.com/your_instagram_handle"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Instagram Profile
                </a>
              </div>
  
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-md hover:bg-zinc-700 transition duration-300">
                <FaFacebook className="text-xl text-blue-600" />
                <a
                  href="https://www.facebook.com/your_facebook_handle"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Facebook Profile
                </a>
              </div>
            </div>
          </div>
  
          <form className="md:w-1/2 w-full space-y-4 mt-8 md:mt-0">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-zinc-900 text-white p-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-zinc-900 text-white p-3 rounded-md outline-none"
            />
            <textarea
              placeholder="Enter Your Message"
              className="w-full bg-zinc-900 text-white p-3 h-32 rounded-md resize-none outline-none"
            ></textarea>
            <button className="w-44 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:scale-105 transition duration-300">
              Submit
            </button>
                </form>
        </div>
      </div>
    );
  }
  
  export default ContactinNav;  
  