import p1 from "../public/seyha.jpg";
export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#0a0f24] text-white min-h-screen p-10">
      {/* Image Section */}
      <div className="relative">
        <div
          className="absolute -bottom-4 -left-4 w-56 h-56 border-4 border-blue-400 rounded-lg"
          data-aos="flip-up"
        ></div>
        <img
          src={p1}
          alt="Profile"
          className="relative z-10 w-56 h-56 object-cover rounded-lg"
          data-aos="flip-right"
        />
      </div>

      {/* Text Section */}
      <div
        className="md:ml-10 mt-6 md:mt-0 max-w-lg text-center md:text-left"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl font-bold">ABOUT ME</h2>
        <p className="mt-4 text-gray-300 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aut
          porro facilis doloremque tempora sequi omnis, eum, odit delectus
          corporis ex veritatis necessitatibus reiciendis deleniti dolorum atque
          laborum neque impedit!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold">
            HIRE ME
          </button>
          <button className="border border-white px-6 py-2 rounded-lg font-semibold">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
}
