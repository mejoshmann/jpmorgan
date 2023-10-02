import "./Projects.scss";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="container__mainImage"></div>
        <h2 className="project--heading">PROJECT HIGHLIGHTS</h2>

        <div className="container__sub-headings">
          <h3 className="container__residential">Residential</h3>
          <h3 className="container__commercial">Commercial</h3>
        </div>

        <div className="container__thumbnails">
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image1"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image2 right"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image3"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image4 right"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image5"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image6 right"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image7 right"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image8 right"></div>
          </div>
          <div className="container__thumbnail">
            <div className="container__thumbnail--image image9 right"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
