import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <section id="contact">
      <div className="contactDivParent">
        <div className="contacttitle">
          <p>
            Let's do a <br /> project together!
          </p>
          <h1>CONTACT</h1>
        </div>
        <div className="contactDivParent2">
          <div className="contactdivContact">
            <p className="contactPara">
              <FontAwesomeIcon icon={faPhone} className="contactIcon1" />
              <a href="tel:+2348106432113">+234 (0) 810 643 2113</a>
            </p>
            <p className="contactPara">
              <FontAwesomeIcon icon={faEnvelope} className="contactIcon2" />
              <a href="mailto:wdc4477@gmail.com">wdc4477@gmail.com</a>
            </p>
            <address>
              <p className="contactPara">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contactIcon3"
                />
                <a href="">Nke-VIP lodge Alaska, Port-Harcourt Nigeria</a>
              </p>
            </address>
          </div>
          <div className="horizontalRule"></div>

          <div>
            <form action="" className="inputField">
              <div className="contactForm">
                <input
                  type="text"
                  name="name"
                  id="nameInput"
                  placeholder=""
                  required
                />
                <label htmlFor="nameInput">Name: </label>
              </div>
              <div className="contactForm">
                <input
                  type="email"
                  name="email"
                  id="emailInput"
                  placeholder=""
                  required
                />
                <label htmlFor="emailInput">Email: </label>
              </div>
              <div className="notefield">
                <textarea name="note" id="note" placeholder=""></textarea>
                <label htmlFor="note">Note:</label>
              </div>
              <div className="Btndiv">
                <input id="submitBtn" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
