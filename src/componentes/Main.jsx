import React from "react";
import Estudios from "./Estudios.jsx";
import SoftSkills from "./SoftSkills.jsx";
const Main = () => {
  return (
    <main className="app-main">
      <h2>Sobre Mí</h2>
      <p>
        Soy Franco Drachenberg, estudiante de Programación en la Facultad
        Regional Tucumán...
      </p>
      <nav
        style={{
          marginBottom: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        <h3>Ir a sección:</h3>
        <ul>
          <li>
            <a href="#estudios">Estudios</a>
          </li>
          <li>
            <a href="#soft-skills">Habilidades Blandas</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos Realizados</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia Laboral</a>
          </li>
          <li>
            <a href="#idiomas">Idiomas</a>
          </li>
          <li>
            <a href="#certificados">Certificados</a>
          </li>
        </ul>
      </nav>
      <section id="estudios">
        <Estudios />
      </section>
      <section id="soft-skills" style={{ marginTop: "2rem" }}>
        <SoftSkills />
      </section>
      <section id="proyectos" style={{ marginTop: "2rem" }}>
        <h2>Proyectos Realizados</h2>
        {
          <a
            href="https://fdrach.github.io/YouTube-Local-Chat-Replayer/"
            target="blank"
          >
            <div className="panel">
              <h4>YouTube-Local-Chat-Replayer</h4>
              <p>
                Una sencilla herramienta web para ver las repeticiones de chat
                en vivo de YouTube cargadas desde un archivo JSON local..
              </p>
            </div>
          </a>
        }
      </section>
      <section id="idiomas" style={{ marginTop: "2rem" }}>
        <h2>Idiomas</h2>
        <p>Nivel de conocimiento en diferentes idiomas.</p>
        {
          <ul>
            <li>Español: Nativo</li>
            <li>Inglés: Intermedio-Alto</li>
          </ul>
        }
      </section>
    </main>
  );
};
export default Main;
