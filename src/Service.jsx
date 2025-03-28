export default function Services() {
  const services = [
    { title: "VIDEO EDITING", icon: "📹" },
    { title: "MOBILE APP DEVELOPMENT", icon: "📱" },
    { title: "DESKTOP APP DEVELOPMENT", icon: "💻" },
    { title: "PROGRAMMING LANGUAGES", icon: "💡" },
  ];

  return (
    <div className="bg-[#0a0f24] text-white min-h-screen py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">SERVICES</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-4xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-[#111827] border border-transparent rounded-xl shadow-lg text-center relative
                       before:absolute before:inset-0 before:rounded-xl before:border-[3px] 
                       before:border-transparent before:bg-gradient-to-r before:from-blue-500 before:to-purple-500
                       before:opacity-50 before:-z-10 hover:before:opacity-100 transition-all duration-300"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-300 text-sm mt-2">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
