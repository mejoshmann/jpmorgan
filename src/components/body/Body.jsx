import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.scss";

function Body() {
  const settings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    dots: true,
    cssEase: "ease-out",
    arrows: false,
  };

  return (
    <div className="body">
      <div className="body__container">
        <Slider {...settings}>
          <div className="slide slide1">
            <h2 className="body__heading">Building the future</h2>
          </div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
        </Slider>
      </div>
      <div className="body__flyer">
        <h1 className="body__specialists">Your Building Specialists</h1>
        <p className="body__hidden">
          Are you searching for a reputable construction company in Vancouver,
          BC, that can bring your construction dreams to life? Look no further!
          JP Morgan Construction is your premier choice for top-quality
          construction services in the Vancouver area. With a proven track
          record of excellence, we specialize in residential and commercial
          construction, offering a wide range of services to meet your needs.
        </p>
      </div>
    </div>
  );
}

export default Body;
