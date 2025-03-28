import React from "react";
import "./App.css";
import p1 from "../public/seyha.jpg";
import HomePage from "./HomePage";
import Skill from "./Skill";
import AboutMe from "./AboutMe";
import Services from "./Service";

function App() {
  return (
    <section>
      < HomePage />
      <AboutMe />
      < Services />
      < Skill />
    </section>
  );
}

export default App;
