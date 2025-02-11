import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

import { useState } from "react";

export default function ToolBox() {
  const [selectTool, setSelectTool] = useState("HTML");
  const tools = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      description:
        "HTML (HyperText Markup Language) er et standard markeringsspråk som brukes til å strukturere og formatere innhold på nettsider.",
    },
    {
      name: "CSS",
      icon: <SiCsswizardry />,
      description:
        "CSS (Cascading Style Sheets) brukes til å kontrollere layout og design på en nettside.",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      description:
        "JavaScript er et programmeringsspråk som gjør det mulig å legge til dynamisk oppførsel og interaktivitet på nettsider.",
    },
    {
      name: "React",
      icon: <FaReact />,
      description:
        "React er et JavaScript-bibliotek for å bygge brukergrensesnitt, spesielt for enkelt-side-applikasjoner.",
    },
    {
      name: "Node.js",
      icon: <FaNode />,
      description:
        "Node.js er en plattform som lar deg kjøre JavaScript utenfor nettleseren, vanligvis på en server. Det brukes ofte til å bygge raske og skalerbare backend-applikasjoner, API-er og sanntidsapplikasjoner. ",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      description:
        "Vite er et byggverktøy og utviklingsserver som fokuserer på rask utvikling og optimaliserte produksjonsbygg.",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      description:
        "Figma er et skybasert designverktøy som brukes til UI/UX-design, prototyping og samarbeid.",
    },
  ];

  return (
    <div className="toolbox">
      <h2>Verktøy</h2>
      <div className="tools">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`icon ${selectTool === tool.name ? "selected" : ""}`}
            onClick={() => setSelectTool(tool.name)}
          >
            {tool.icon}
          </div>
        ))}
      </div>
      <div className="tool-info">
        {selectTool && (
          <>
            {tools.find((tool) => tool.name === selectTool)?.icon}
            <h3>{selectTool}</h3>

            <p>{tools.find((tool) => tool.name === selectTool)?.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
