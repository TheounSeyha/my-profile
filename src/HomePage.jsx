import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Import NavLink
import "./App.css";
import p1 from "../public/seyha.jpg";
import p2 from "../public/bg.jpg";
function HomePage() {
  return (
    <section
      className="text-red-400 flex bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${p2})` }}
    >
      {/* Text For Portfolio */}
      <div
        className=" w-[50%] h-screen flex flex-col justify-center items-center"
        data-aos="fade-right"
      >
        <h1
          className="bodoni-modal text-[3.5rem] text-yellow-400"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Hi there!!!
        </h1>

        <p
          className="playfair-display text-[4rem] text-yellow-400"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          I'm Seyha
        </p>

        <p className="teko text-[3rem]" data-aos="fade-up" data-aos-delay="400">
          Front-End & Back-End Developer!!
        </p>

        <p
          className="w-[84%] text-white"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>

        <NavLink
          to="/about"
          className="bg-red-400 absolute bottom-[8rem] left-[4rem] text-white p-2 rounded-md"
        >
          About Me
        </NavLink>
      </div>
      {/* My Image */}
      <div
        className="w-[50%] h-screen flex justify-center items-center "
        data-aos="fade-left"
      >
        <img
          src={p1}
          alt="seyha"
          className="w-1/2 max-w-[250px] h-auto rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
}

export default HomePage;
