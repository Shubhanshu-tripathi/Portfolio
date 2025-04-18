import logo from "../assets/logo.png";

function Services() {
  return (
    <>
      <div className="w-full px-4 py-8">
    
        <div className="flex justify-center items-center mb-10">
          <div className="relative bg-black w-full md:w-1/2 h-20 flex items-center justify-center">
            <img className="h-full w-[50px] md:w-[70px]" src={logo} alt="logo" />
            <h1 className="absolute text-white font-bold text-3xl md:text-5xl">My Services</h1>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
          {[
            { title: "Web Design", desc: "I create modern, user-friendly, and responsive websites tailored to your brand. Clean UI, fast load time, and stunning aesthetics for an unforgettable experience." },
            { title: "Graphics Design", desc: "From logos to banners, I design visually appealing graphics that enhance your online presence and make your brand stand out from the crowd." },
            { title: "Social Media", desc: "I manage and design engaging content for your social media profiles to boost reach, interaction, and digital growth through creative campaigns." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black border-2 border-white rounded-md hover:bg-zinc-900 p-6 w-full md:w-1/3 h-60 overflow-y-auto transition-all duration-300 ease-in-out"
            >
              <h1 className="font-bold text-2xl mb-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                {service.title}
              </h1>
              <p className="text-white font-medium">{service.desc}</p>
            </div>
          ))}
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {[
            { title: "App Design", desc: "I design intuitive and attractive mobile and web app interfaces that focus on user experience, accessibility, and business goals." },
            { title: "Digital Marketing", desc: "Strategic marketing services to help you generate leads, improve brand visibility, and grow your online business presence effectively." },
            { title: "Content Writing", desc: "Engaging and SEO-optimized content writing that speaks to your audience, improves your ranking, and builds trust in your brand." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black border-2 border-white rounded-md hover:bg-zinc-900 p-6 w-full md:w-1/3 h-60 overflow-y-auto transition-all duration-300 ease-in-out"
            >
              <h1 className="font-bold text-2xl mb-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                {service.title}
              </h1>
              <p className="text-white font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
