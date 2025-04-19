import React from "react";
import Main from "../componentes/Main.jsx";
import Header from "../componentes/Header.jsx";
import Footer from "../componentes/Footer.jsx";

const Home = ({ persona, personas }) => {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
