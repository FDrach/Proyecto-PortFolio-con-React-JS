import React from "react";
import CollapsibleSection from "../componentes/CollapsibleSection.jsx";

const SoftSkills = () => {
  const skillsData = [
    {
      id: "comm",
      title: "Comunicación Efectiva",
      description:
        "Capacidad para expresar ideas de forma clara y concisa, tanto verbalmente como por escrito. Habilidad para escuchar activamente y adaptar el mensaje a diferentes interlocutores.",
    },
    {
      id: "team",
      title: "Trabajo en Equipo",
      description:
        "Colaboración proactiva con compañeros para alcanzar objetivos comunes. Disposición para compartir conocimientos, ofrecer y recibir feedback constructivo.",
    },
    {
      id: "prob",
      title: "Resolución de Problemas",
      description:
        "Enfoque analítico para identificar, evaluar y solucionar problemas complejos. Capacidad para investigar y proponer soluciones eficientes y creativas.",
    },
    {
      id: "adapt",
      title: "Adaptabilidad y Flexibilidad",
      description:
        "Facilidad para ajustarse a cambios en los requisitos, prioridades o tecnologías. Apertura al aprendizaje continuo y a nuevas metodologías de trabajo.",
    },
    {
      id: "time",
      title: "Gestión del Tiempo y Organización",
      description:
        "Habilidad para priorizar tareas, gestionar el tiempo de manera eficiente y cumplir con los plazos establecidos. Capacidad para organizar el trabajo de forma autónoma.",
    },
    {
      id: "proact",
      title: "Proactividad e Iniciativa",
      description:
        "Tendencia a anticipar necesidades, identificar oportunidades de mejora y tomar la iniciativa para llevar a cabo acciones que aporten valor, sin necesidad de supervisión constante.",
    },
  ];

  return (
    <main className="app-main">
      <h2>Habilidades Blandas</h2>
      <p style={{ marginBottom: "1.5rem" }}>
        Competencias interpersonales clave que complementan mi perfil técnico y
        profesional.
      </p>

      {skillsData.map((skill) => (
        <CollapsibleSection key={skill.id} title={skill.title}>
          <p>{skill.description}</p>
        </CollapsibleSection>
      ))}
    </main>
  );
};

export default SoftSkills;
