import image from "./assets/profilePic.png";
import image1 from "./assets/csslogo.png";
import image2 from "./assets/htmllogo.png";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="herodiv">
        <div className="textContainer">
          <div className="bio11">
            <h1 className="doyou">
              Do you need a <span className="text1">FULLSTACK </span>
              <span className="text2">
                DEVELOPER <span className="text3">?</span>
              </span>
            </h1>
          </div>
          <hr />
          <div className="bio1">
            <p>
              I'm a front end developer passionate <br />
              about creating intuitive, accessible and
              <br /> performance-driven web interfaces.
            </p>
          </div>
          <hr />
          <div className="but-div">
            <a href="#offers">
              <button className="but2">Services</button>
            </a>
            <a href="#contact">
              <button className="but1">Let's Talk</button>
            </a>
          </div>
          <div className="herologoDiv">
            {/*<img className="toolLogos" src={image1} alt="css logo" />
            <img className="toolLogos" src={image2} alt="html logo" />*/}
          </div>
        </div>
        <div className="imgDiv">
          <img className="dp" src={image} alt="my picture" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
