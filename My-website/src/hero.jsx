import image from "./assets/profilePic.png";
function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background SVG */}
      <svg
        className="multi-shape-bg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 C1400,100 1600,300 1800,200 L1800,600 L0,600 Z"
          fill="#e6d6cc"
          opacity="0.3"
        />
        <circle cx="400" cy="100" r="60" fill="#e6d6cc" opacity="0.2" />
        <circle cx="1350" cy="70" r="50" fill="#e6d6cc" opacity="0.2" />
        <circle cx="1200" cy="350" r="100" fill="#ffffff" opacity="0.5" />
        <circle cx="700" cy="520" r="80" fill="#ffffff" opacity="0.5" />
        <circle cx="100" cy="400" r="190" fill="#ffffff" opacity="0.7" />
        <ellipse
          cx="850"
          cy="100"
          rx="70"
          ry="30"
          fill="#e6d6cc"
          opacity="0.25"
        />
      </svg>

      <div className="herodiv">
        <div className="textContainer">
          <h1 className="doyou">
            Do you need a <span className="text1">FRONT END </span>
            <span className="text2">
              DEVELOPER <span className="text3">?</span>
            </span>
          </h1>
          <p className="bio1">
            <hr />
            I'm a front end developer passionate <br />
            about creating intuitive, accessible and
            <br /> performance-driven web interfaces.
          </p>
          <hr />
          <div className="but-div">
            <button className="but2">View Works</button>
            <button className="but1">Let's Talk</button>
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
