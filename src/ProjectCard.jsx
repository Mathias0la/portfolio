import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useState } from "react";

export default function ProjectCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "Random Country Generator",
      image: "/RandomCountry.png",
      description:
        "En nettside som bruker Restcountries API til å hente ut informasjon fra et tilfeldig land, infoen som blir hentet er flagget til landet, hovedstaden og hvilken valuta de bruker",
      language: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          url: "https://mathias0la.github.io/API-Project/",
          icon: <TbWorldWww />,
        },
        {
          url: "https://github.com/Mathias0la/API-Project",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "Bookfinder",
      image: "/bookfinder.png",
      description:
        "En nettside som bruker Gutendex sin API til å hente ut bøker, nettsiden lar deg legge til bøker i favoritter og sortere etter sjanger",
      language: ["React", "CSS", "JavaScript"],
      links: [
        {
          url: "https://mathias0la.github.io/bookfinder/",
          icon: <TbWorldWww />,
        },
        {
          url: "https://github.com/Mathias0la/bookfinder",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "Music Playlist Organizer",
      image: "MPO.png",
      description:
        "En enkel måte å legge til sanger i en spilleliste med sorteringsfunksjonalitet som lar deg filtrere etter de sjangerene som er listet i dropdown menyen.",
      language: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          url: "https://mathias0la.github.io/Music-Playlist-Organizer/",
          icon: <TbWorldWww />,
        },
        {
          url: "https://github.com/Mathias0la/Music-Playlist-Organizer",
          icon: <FaGithub></FaGithub>,
        },
      ],
    },
    {
      name: "Newsletter Sign Up Page",
      image: "/newsletter.png",
      description:
        "En Front-end mentor challenge som viser et eksempel på en Newsletter Sign up side",
      language: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          url: "https://mathias0la.github.io/newsletter-sign-up-with-success-message-main/",
          icon: <TbWorldWww></TbWorldWww>,
        },
        {
          url: "https://github.com/Mathias0la/newsletter-sign-up-with-success-message-main",
          icon: <FaGithub></FaGithub>,
        },
      ],
    },
  ];

  return (
    <div className="project-card-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          <h2 className="project-heading">{project.name}</h2>
          <div
            className="project-details"
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              height: hoveredIndex === index ? "500px" : "0",
              overflow: "hidden",
              transition: "opacity 0.3s ease, height 0.3s ease",
            }}
          >
            <p>{project.description}</p>
            <div className="project-details">
              <div className="languages">
                {project.language.map((language, languageIndex) => (
                  <h3 key={languageIndex} className="language">
                    {language}
                  </h3>
                ))}
              </div>
              <div className="links">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="project-links"
                    target="_blank"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
