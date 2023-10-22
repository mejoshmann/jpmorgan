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
        <h3 className="body__clowns">"We build one house at a time, and leave the juggling to the clowns!"</h3>

      </div>
    </div>
  );
}

export default Body;
