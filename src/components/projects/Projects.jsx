import "./Projects.scss";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="container__mainImage"></div>
        <h2 className="project--heading">PROJECT HIGHLIGHTS</h2>

        <div className="container__thumbnails">
          <div className="container__thumbnail left">
            <div className="container__thumbnail--image image1"></div>
            <div className="container__thumbnail--heading">62nd Ave</div>
          </div>
          <div className="container__thumbnail right">
            <div className="container__thumbnail--image image2 right"></div>
            <div className="container__thumbnail--heading">Hartford</div>
          </div>
          <div className="container__thumbnail left">
            <div className="container__thumbnail--image image3"></div>
            <div className="container__thumbnail--heading">Kits House</div>
          </div>
          <div className="container__thumbnail right">
            <div className="container__thumbnail--image image4 right"></div>
            <div className="container__thumbnail--heading"></div>
          </div>
          <div className="container__thumbnail left">
            <div className="container__thumbnail--image image5"></div>
            <div className="container__thumbnail--heading"></div>
          </div>
          <div className="container__thumbnail right">
            <div className="container__thumbnail--image image6 right"></div>
            <div className="container__thumbnail--heading"></div>
          </div>
          <div className="container__thumbnail left">
            <div className="container__thumbnail--image image7 right"></div>
            <div className="container__thumbnail--heading"></div>
          </div>
          <div className="container__thumbnail right">
            <div className="container__thumbnail--image image8 right"></div>
            <div className="container__thumbnail--heading"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
