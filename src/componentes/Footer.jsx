import React from "react";
import ghLogo from '../img/gh.svg';
const Footer = () => {
  let startYear=2025;
  let curYear=new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p> © Copyright {startYear}{curYear === startYear ? "" : "-"+new Date().getFullYear()} Franco Drachenberg</p>
      <p><a href="https://github.com/fdrach"><img src={ghLogo} alt="GitHub Logo" class="footer-icon"/>GitHub</a></p>
    </footer>
  );
};

export default Footer;
