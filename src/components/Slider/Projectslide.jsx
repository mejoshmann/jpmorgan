import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import seymour1 from "../../images/commercial/seymour10.webp";
import seymour2 from "../../images/commercial/seymour9.webp";
import seymour3 from "../../images/commercial/seymour2.webp";
import seymour4 from "../../images/commercial/seymourfinished.webp";
import seymour11 from "../../images/commercial/seymour11.webp";
import seymour12 from "../../images/commercial/seymour12.webp";

import oficefront from "../../images/commercial/oficefront.webp";
import oficeinside from "../../images/commercial/oficeinside.webp";
import oficeover from "../../images/commercial/ofiswerks3.webp";
import oficeside from "../../images/commercial/officewerks.webp";
import oficeopen from "../../images/commercial/officewerks1.webp";

import church1 from "../../images/church/church3.webp";
import church2 from "../../images/church/church4.webp";
import church3 from "../../images/church/church1.webp";
import church5 from "../../images/church/church5.webp";
import church6 from "../../images/church/church6.webp";
import church7 from "../../images/church/church7.webp";


import kits from "../../images/kits/kits.webp";
import kits1 from "../../images/kits/front.webp";
import kits2 from "../../images/kits/kitsside.webp";
import finished from "../../images/kits/finished.webp";
import back from "../../images/kits/kitsback.webp";

import rich from "../../images/richmond/front-rich1.webp";
import richform from "../../images/richmond/richfoundation.webp";
import rich1 from "../../images/richmond/no-roof.webp";
import rich2 from "../../images/richmond/formwork.webp";
import richback from "../../images/richmond/richback.webp";

import wall from "../../images/wall/wall.webp";
import wall1 from "../../images/wall/wall1.webp";
import wall2 from "../../images/wall/wall2.webp";
import wall3 from "../../images/wall/wall3.webp";



import "./Projectslide.scss";

function Projectslide() {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i classNAme="fas fa-chevron-right"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
    
    <Helmet>
        <meta
          name="description"
          content="Discover excellence in residential and commercial construction with JP Morgan Construction, your trusted partner in Vancouver, BC. Specializing in new builds, renovations, and commercial carpentry. our skilled team brings artistry and precision to every project. From revitalizing history to innovating for the present, we craft unique experiences that stand the test of time. Contact us today to turn your construction dreams into reality in the heart of Vancouver."
        />
        <meta
          name="keywords"
          content="Vancouver construction, BC builders, new builds, carpentry, framing, residential framing, residential carpentry, commercial carpentry, commercial framing, renovations, construction services, Vancouver contractors, building contractors, residential construction, commercial construction, Vancouver construction company, construction projects, expert builders, construction management, design-build, construction consulting, Vancouver construction services"
        />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4M9TQY4H73"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4M9TQY4H73');
              `}
        </script>
      </Helmet>

      <div className="highlights">
        <h2 className="highlights__heading">PROJECT HIGHLIGHTS</h2>

        <div className="highlights__images">
          
          <div className="highlights__residential">

            <div className="highlights__images--container">
            <Slider {...settings}>
            <div className="highlights__project--image">
              {" "}
              <img className="highlights__image" src={rich} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
              <img className="highlights__image" src={richback} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={rich1} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
              <img className="highlights__image" src={richform} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={rich2} alt="hut" />
              </div>
            </Slider>
            <h2 className="highlights__project--copy">New build in Richmond</h2>
            </div>

            <div className="highlights__images--container">
            <Slider {...settings}>
            <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={finished} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={back} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={kits1} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={kits} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={kits2} alt="hut" />
              </div>
            </Slider>
            <h2 className="highlights__project--copy">New build in Kitsilano</h2>
            </div>


            <div className="highlights__images--container">
            <Slider {...settings}>
            <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={wall} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={wall1} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={wall3} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={wall2} alt="hut" />
              </div>
            </Slider>
            <h2 className="highlights__project--copy">Private Residence Vancouver</h2>
            </div>

          </div>



          <div className="highlights__commercial">

            <div className="highlights__images--container">
            <Slider {...settings}>
            <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={oficefront} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={oficeinside} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={oficeover} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={oficeside} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={oficeopen} alt="hut" />
              </div>
            </Slider>
            <h2 className="highlights__project--copy">Ofiswerks Olympic Village</h2>
            </div>

            <div className="highlights__images--container">
            <Slider {...settings}>
            <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={seymour4} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={seymour11} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={seymour12} alt="hut" />
              </div>
              <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={seymour1} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={seymour2} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={seymour3} alt="hut" />
              </div>
            </Slider>
            <h2 className="highlights__project--copy">Mt Seymour Lift Huts</h2>
            </div>

              <div className="highlights__images--container">
               <Slider {...settings}>
              <div className="highlights__project--image">
              {" "}
                <img className="highlights__image" src={church5} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={church1} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={church2} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={church3} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={church7} alt="hut" />
              </div>
              <div className="highlights__project--image">
                {" "}
                <img className="highlights__image" src={church6} alt="hut" />
              </div>
              
              
            </Slider>
            <h2 className="highlights__project--copy">First Baptist Church, Nelson st</h2>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default Projectslide;
