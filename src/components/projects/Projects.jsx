import "./Projects.scss";
import { useState } from "react";
import richmond from "../../images/richmond/front-house.jpg";
import image2 from "../../images/image2/front-house.jpg";
import kits from "../../images/kits/front.jpg";
import image4 from "../../images/decks/deck1.jpg";
import image5 from "../../images/image5/216.jpg";
import image6 from "../../images/image6/no-roof.jpg";
import sasamat from "../../images/sasamat/sasamat.jpg";
import deck from "../../images/decks/deck3.jpg"

import commer1 from "../../images/commercial/officewerks1.jpg";
import office  from "../../images/commercial/officewerks.jpg";
import commer2 from "../../images/1616cambie/cambie6.jpg";
import commer3 from "../../images/commercial/2091.jpg";
import commer6 from "../../images/commercial/2520.jpg";
import cambie from "../../images/1616cambie/cambie4.jpg";

function Projects() {
  const [selectCategory, setSelectCategory] = useState("Residential");

  const handleCategoryClick = (category) => {
    setSelectCategory(category);
  };

  const residentImages = [
    { src: richmond, caption: "Richmond" },
    { src: image2, caption: "North Vancouver" },
    { src: kits, caption: "Kitsilano" },
    { src: image4, caption: "Cadboro Bay" },
    { src: image5, caption: "North Vancouver" },
    { src: image6, caption: "Kitsilano" },
    { src: sasamat, caption: "Sasamat"},
    { src: deck, caption: "North Vancouver"}
  ];

  const commerchImages = [
    { src: office, caption: "Ofiswerks"},
    { src: commer1, caption: "Ofiswerks" },
    { src: commer2, caption: "Cambie" },
    { src: cambie, caption: "Cambie"},
    { src: commer6, caption: "Highlands Firehouse" },
    { src: commer3, caption: "Highlands Firehouse" },
  
  ];

  return (
    <>
      <div className="container">
        <div className="container__mainImage"></div>
        <h2 className="container__heading">PROJECT HIGHLIGHTS</h2>

        <div className="container__sub-headings">
          <h3
            className={`container__residential ${
              selectCategory === "Residential" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Residential")}
          >
            Residential
          </h3>

          <h3
            className={`container__commercial ${
              selectCategory === "Commercial" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("Commercial")}
          >
            Commercial
          </h3>
        </div>

        <div className="container__thumbnails">
          {selectCategory === "Residential"
            ? residentImages.map((imageData, index) => (
                <div className="container__thumbnail" key={index}>
                  <img
                    className="container__thumbnail--image"
                    src={imageData.src}
                    alt={`Residential ${index + 1} loading="lazy"`}
                  ></img>
                  <div className="container__bottom">
                    <div className="container__bottom--icon"></div>
                    <p className="container__bottom--place">
                    {imageData.caption}</p>
                    </div>
                </div>
              ))
            : commerchImages.map((imageData, index) => (
                <div className="container__thumbnail" key={index}>
                  <img
                    className="container__thumbnail--image"
                    src={imageData.src}
                    alt={`Commercial ${index + 1}`}
                    loading="lazy"
                  ></img>
                  <div className="container__bottom">
                    <div className="container__bottom--icon"></div>
                    <p
                      className="container__bottom--place
            "
                    >
                      {imageData.caption}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
