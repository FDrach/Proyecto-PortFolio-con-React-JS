import React from "react";
import "./styles/App.css";
import Home from "./page/Home.jsx";
import License from "./page/License.jsx";
import "./styles/styles.css";

function App() {
  console.log(window.location.pathname.split("/")[1].toLowerCase())
  if (window.location.pathname.split("/")[1].toLowerCase() === "license") {
    return <License />;
  } else {
    return <Home />;
  }
}

export default App;
