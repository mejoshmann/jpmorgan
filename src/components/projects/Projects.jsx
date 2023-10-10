import "./Projects.scss";
import { useState } from "react";
import image1 from "../../images/image1/front-house.jpg";
import image2 from "../../images/image2/front-house.jpg";
import image3 from "../../images/image3/front.jpg";
import image4 from "../../images/image4/planters.jpg";
import image5 from "../../images/image5/216.jpg";
import image6 from "../../images/image6/no-roof.jpg";

function Projects() {

  const [selectCategory, setSelectCategory] = useState('Residential');

  const handleCategoryClick = (category) => {
    setSelectCategory(category);
  }

  const residentImages = [
   image1, image2, image3, 
  ];

  const commerchImages = [
  image4, image5, image6,

  ];



  return (
    <>
      <div className="container">
        <div className="container__mainImage"></div>
        <h2 className="container__heading">PROJECT HIGHLIGHTS</h2>

        <div className="container__sub-headings">

          <h3 className={`container__residential ${selectCategory === 'Residential' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Residential')}
          >Residential</h3>

          <h3 className={`container__commercial ${selectCategory === 'Commercial' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Commercial')}
          >Commercial</h3>

        </div>

        <div className="container__thumbnails">
          {selectCategory === 'Residential'
          ? residentImages.map((image, index) => (
          <div className="container__thumbnail" key={index}>
            <img className="container__thumbnail--image" src={image} alt={`Residential ${index + 1} loading="lazy"`}></img>
          </div>
          ))

          : commerchImages.map((image, index) => (
              <div className="container__thumbnail" key={index}>
            <img className="container__thumbnail--image" src={image} alt={`Commercial ${index +1}`} loading="lazy"></img>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
