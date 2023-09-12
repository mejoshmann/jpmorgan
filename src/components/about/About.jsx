import "./About.scss";

function About() {
  return (
    <>
      <section className="about">
        <h2 className="about__heading">About Us</h2>
        <div className="about__image"></div>
        <section className="about__container">
          <h2 className="about__what">What we do..</h2>
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
              <p className="container__box--content"></p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Commercial</h2>
              <p className="container__box--content"></p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Renovations</h2>
              <p className="container__box--content"></p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Project Management</h2>
              <p className="container__box--content"></p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Alterations</h2>
              <p className="container__box--content"></p>
            </div>

            <div className="container__box">
              <h2 className="container__box--heading">Additions</h2>
              <p className="container__box--content"></p>
            </div>

          </div>

          {/* <aside className="about__left">
            <h3 className="about__left--heading">What We Do</h3>
            <p className="about__left--content">
             
            </p>
          </aside>
          <aside className="about__middle">
            <h3 className="about__middle--heading">Working Together</h3>
            <p className="about__middle--content">
              We offer an end-to-end client experience that includes seamless
              communication, budgeting, staffing, on-site organization, and
              solid, quality handiwork every time.
            </p>
          </aside>
          <aside className="about__right">
            <h3 className="about__right--heading">Why Us?</h3>
            <p className="about__right--content">
              We work with architects and designers to produce beautiful,
              functional structures. Call us today and bring our project
              management skills and extensive construction experience to your
              next project.
            </p>
          </aside> */}
        </section>
      </section>
    </>
  );
}

export default About;
