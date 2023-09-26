import "./About.scss";

function About() {
  return (
    <>
      <section className="about">
        <div className="about__image"></div>
        <section className="about__container">
          <h2 className="about__what">WHAT WE DO..</h2>
          <p className="about__wedo">
            From new construction to renovations, our portfolio unites artistry
            and precision. Occupied sites pose no challenge, and we excel in
            managing multi-phase projects. Our commitment extends to crafting
            unique experiences, whether revitalizing history or innovating for
            the present. We can help you turn your ideas into reality.
          </p>

          <div className="container">
            <div className="container__box">
              <h2 className="container__box--heading">New Build</h2>
              <p className="container__box--content">
                If you are subdividing, buying a section or knocking down and
                rebuilding, let us create your dream home from the ground up.
              </p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Commercial</h2>
              <p className="container__box--content">
                We specialize in providing comprehensive commercial construction
                services. Our team brings expertise and resources to every
                project, whether it's building, renovating, or expanding
                commercial properties. We ensure that all our projects meet
                stringent safety, regulatory, and aesthetic standards,
                delivering excellence in every aspect of construction.
              </p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Renovations</h2>
              <p className="container__box--content">
                No need to move! Redesigning the layout of your current home can
                open it up and increase its value.
              </p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Project Management</h2>
              <p className="container__box--content">
                We offer Full Project Management from start to finnish. Building
                doesn't need to be a headache, let us do the organizing for you
              </p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Alterations</h2>
              <p className="container__box--content">
                Moving walls and rearranging layouts to make your home just as
                you want it. We work with the space you have with as little
                disruption as possible.
              </p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Marine</h2>
              <p className="container__box--content">
                We offers professional waterfront protection services, including
                expert floating dock repair and new build solutions, ensuring
                the longevity and safety of your waterfront property.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
