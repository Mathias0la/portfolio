import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function ContactCard() {
  return (
    <section id="contact">
      <div className="contact-card">
        <h2 className="contact-heading">Kontakt</h2>
        <div className="contact-info">
          <MdOutlineMailOutline></MdOutlineMailOutline>
          <h3>Mathiaserstad@gmail.com</h3>
        </div>

        <div className="contact-info">
          <MdLocationOn />
          <h3>Ålesund, Norway</h3>
        </div>
        <div className="social-links">
          <a href="https://github.com/Mathias0la">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mathias-ola-erstad-b4887722b/">
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
    </section>
  );
}
