import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <div className="footerTextDiv">
          <h3>Let's Talk</h3>
          <p>
            Every project starts with a chat. <br />
            Let's talk about bringing your concepts to reality. I'll be excited
            to discuss your project and explore how we can collaborate to
            achieve your goals
          </p>
          <a href="#contact">
            {" "}
            <button>Tell us about your project</button>
          </a>
        </div>
        <div className="footerNavDiv">
          <ul className="footeNavlist">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footerContactDiv">
          <a href="">
            <FontAwesomeIcon icon={faGithub} className="footerIcon1" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} className="footerIcon2" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="footerIcon3" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} className="footerIcon4" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} className="footerIcon7" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} className="footerIcon5" />
          </a>
        </div>
      </div>
      <div className="copyrightdiv">
        <p>&copy; 2025 All Right Reserved | DC WEB.</p>
      </div>
    </footer>
  );
}
export default Footer;
