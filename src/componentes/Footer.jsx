import React from "react";

const Footer = () => {
  let startYear=2025;
  let curYear=new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p> © Copyright {startYear}{curYear === startYear ? "" : "-"+new Date().getFullYear()} Franco Drachenberg</p>
    </footer>
  );
};

export default Footer;
