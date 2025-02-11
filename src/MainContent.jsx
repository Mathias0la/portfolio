import AboutMeCard from "./AboutMeCard";
import ProjectCard from "./ProjectCard";
import ToolBox from "./ToolBox";

export default function MainContent() {
  return (
    <main>
      <section id="about">
        <AboutMeCard></AboutMeCard>
      </section>

      <section id="tools-section">
        <ToolBox></ToolBox>
      </section>

      <section id="project-section" className="projects">
        <h2>Prosjekter</h2>
        <ProjectCard></ProjectCard>
      </section>
    </main>
  );
}
