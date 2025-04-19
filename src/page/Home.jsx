import React from "react";
import Main from "../componentes/Main.jsx";
import Header from "../componentes/Header.jsx";
import Footer from "../componentes/Footer.jsx";
import Estudios from "../componentes/Estudios.jsx";
import SoftSkills from "../componentes/SoftSkills.jsx";

const Home = ({ persona, personas }) => {
  return (
    <div>
      <Header />
      <Main />
      <Estudios />
      <SoftSkills />
      <Footer />
    </div>
  );
};

export default Home;
