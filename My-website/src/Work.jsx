import image1 from "./assets/myblog.png";
import image2 from "./assets/e-commerceweb.png";
import image3 from "./assets/thispage.png";
function Work() {
  return (
    <section id="work">
      <div>
        <div className="ProjectTextDiv">
          <p>my recent </p>
          <h2>PROJECTS</h2>
        </div>
        <div className="projectDiv">
          <figure className="projectfig">
            <div className="projectImg1">
              <img src={image1} alt="my blog" />
            </div>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              porro
            </figcaption>
          </figure>
          <figure className="projectfig">
            <div className="projectImg1">
              <img src={image2} alt="my blog" />
            </div>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              porro
            </figcaption>
          </figure>
          <figure className="projectfig">
            <div className="projectImg1">
              <img src={image1} alt="my blog" />
            </div>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              porro
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Work;
