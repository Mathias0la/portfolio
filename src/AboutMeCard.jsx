import { MdDownload } from "react-icons/md";
import { Typewriter } from "./TypewriterText";

export default function AboutMeCard() {
  return (
    <section>
      <div className="about-card">
        <h1>
          <Typewriter text="Mathias Ola Erstad" />
        </h1>

        <img src="/src/image.png"></img>
        <p className="about-text">
          Hei, jeg er Mathias – en front-end utviklingsstudent med et skarpt øye
          for detaljer og en lidenskap for å skape effektive, moderne løsninger.
          <br></br>
          <br></br>
          Jeg brenner for teknologi og elsker å utforske hvordan systemer og
          tjenester fungerer.
          <br></br>
          <br></br>
          Når jeg ikke er opptatt med koding, tilbringer jeg gjerne tiden min
          med gaming eller utforsking av ny musikk.
        </p>
        <div className="cv-button">
          <a href="/CV-MOE.pdf" download>
            <MdDownload className="download-icon" />
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
