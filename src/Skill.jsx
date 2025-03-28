export default function Skill() {
  const technologies = [
    { name: "AWS", icon: "../public/pythoned.png" },
    { name: "CSS3", icon: "../public/pythoned.png" },
    { name: "React.JS", icon: "../public/pythoned.png" },
    { name: "HTML", icon: "../public/pythoned.png" },
    { name: "Java", icon: "../public/pythoned.png" },
    { name: "JavaScript", icon: "../public/pythoned.png" },
    { name: "Node.JS", icon: "../public/pythoned.png" },
    { name: "Python", icon: "../public/pythoned.png" },
  ];

  return (
    <div className="bg-[#0a0f24] text-white">
      {/* EXPERIENCE SECTION */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6" data-aos="flip-left">
          EXPERIENCE
        </h2>
        <div
          className="grid grid-cols-4 gap-6 px-6 md:px-20"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Contact Info */}
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-4" data-aos="flip-left">
              Drop Me a Message
            </h2>
            <p className="text-gray-200 text-sm mb-4">
              Lorem ipsum is simply dummy text of the printing industry.
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                📞 <span>093290447</span>
              </p>
              <p className="flex items-center gap-3">
                ✉️ <span>theounseyha199@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                📍 <span>Phnom penh</span>
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 bg-white/10 p-6 rounded-lg backdrop-blur-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-white/20 rounded-md text-white placeholder-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-white/20 rounded-md text-white placeholder-gray-300"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full p-3 bg-white/20 rounded-md text-white placeholder-gray-300"
              />
              <button className="w-full bg-black text-white py-2 rounded-md font-semibold">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        <p>2025 - Made by Mrr.Theoun Seyha</p>
      </footer>
    </div>
  );
}
