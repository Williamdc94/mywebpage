import background1 from "./assets/background1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faTools,
  faCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import image from "./assets/herobackgroung.jpg";
function Offer() {
  return (
    <section id="offers">
      <div className="offertitle">
        <p>What I offer!</p>
        <h2>SERVICES</h2>
      </div>
      <div className="offerDiv">
        <div className="offerDiv1">
          <figure>
            <img className="idesign" src={background1} alt="i design" />
          </figure>
        </div>
        <div className="offerDiv2">
          <div className="deediv1">
            <h4>
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="mr-2-text-purple-600"
              />
              Fullstack Apps
            </h4>
            <p>
              From frontend design to backend logic and databases, I build
              full-featured web apps that works seamlessly.
            </p>
          </div>
          <div className="deediv2">
            <h4>
              <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-600" />
              API Development
            </h4>
            <p>
              I create RESTful and GraphQL APIs for smooth frontend-backend
              integrations or third party services.
            </p>
          </div>
          <div className="deediv3">
            <h4>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="mr-2 text-green-600"
              />{" "}
              Responsive UI/UX
            </h4>
            <p>
              I implement clean, responsive interfaces; optimized for
              performance, accessibility and user experience.
            </p>
          </div>
          <div className="deediv4">
            <h4>
              <FontAwesomeIcon
                icon={faTools}
                className="mr-2-text-yellow-600"
              />
              Site Maintenance
            </h4>
            <p>
              I offer ongoing support, performance optimization, bug fixes and
              updates to ensure your website stays fast, secure and up to date.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
export default Offer;
