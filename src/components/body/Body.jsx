import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.scss";

function Body() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToSlide: true,
  };

  return (
      <div className="body">
        <div className="body__container">
            <Slider {...settings}>
              <div className="slides">
                <h2 className="body__heading">Building the future</h2>
              </div>
              <div className="slide1">
              </div>
              <div className="slide2">
              </div>
              <div className="slide3">
              </div>
            </Slider>
        </div>
      </div>
  );
}

export default Body;
