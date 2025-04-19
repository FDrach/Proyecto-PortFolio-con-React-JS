import React from "react";

const estudiosData = [
  {
    titulo: "Secundario",
    institucion: "Colegio del Sol Tucuman",
    status: "Completado",
  },
  {
    titulo: "Tecnicatura Universitaria en Programacion",
    institucion: "Universidad Tecnologica Nacional",
    status: "En progreso",
  },
  {
    titulo: "Ingenieria en Computacion",
    institucion: "Universidad Nacional de Tucuman",
    status: "Abandonado",
  },
  {
    titulo: "Licenciatura en Informatica",
    institucion: "Universidad Nacional de Tucuman",
    status: "Abandonado",
  },
];
const statusSections = [
  { key: "Completado", heading: "Completados:" },
  { key: "En progreso", heading: "En progreso:" },
  { key: "Abandonado", heading: "Abandonados:" },
];
const Estudios = () => {
  return (
    <main className="app-main">
      <h2>Estudios</h2>
      {statusSections.map((section) => {
        const studiesInSection = estudiosData.filter(
          (study) => study.status === section.key
        );
        if (studiesInSection.length === 0) {
          return null;
        }
        return (
          <React.Fragment key={section.key}>
            <h3>{section.heading}</h3>
            <div className="flex-center">
              {studiesInSection.map((study, index) => (
                <div className="panel" key={index}>
                  <h4>{study.titulo}</h4>
                  <p>{study.institucion}</p>
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </main>
  );
};
export default Estudios;
