import image from "./assets/aboutPic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <section id="about">
      <div className="aboutDiv">
        <div className="abtdiv1">
          <div className="imgDiv1">
            <div className="outlinediv">
              <img src={image} alt="" id="aboutPic" />
            </div>
            <p className="paradiv">
              I'm currently open to freelance roles and junior front-end
              opportunities, especially with creative teams or early-stage
              startups. If you are building something, and want someone who
              brings code, creativity, and commitment, lets talk
            </p>
          </div>
          <div className="paradiv">
            <div className="abtDiv">
              <h2>About Me</h2>
            </div>
            <hr />
            <div className="hi1">
              <p>
                Hi there! I'm williams Emmanuel, A Front-End Developer
                passionate about turning ideas into functional, visually
                engaging web experience. I work with HTML, CSS, Javascript and
                React; Building clean,responsive and user-focused interfaces.
              </p>
            </div>
            <div className="hi1">
              <p>
                I created DC WEB to document my journey and showcase what I can
                build. I enjoy solving real problems with code, designing smooth
                user experience, and constantly exploring new ways to bring
                creativity to the web. Wether it's a portfolio site, a creative
                concept or a startup MVP, I'm always excited to bring ideas to
                life. I believe the best digital experiences come from a mix of
                solid engineering and artistic thinking.
              </p>
              <div className="aboutcontactlogo">
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} className="aboutIcon1" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} className="aboutIcon2" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faGithub} className="aboutIcon3" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faLinkedin} className="aboutIcon4" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faWhatsapp} className="aboutIcon5" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faXTwitter} className="aboutIcon6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
