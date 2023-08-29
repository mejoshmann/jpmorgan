import "./About.scss";

function About() {
  return (
    <>
      <section className="about"  id="about">
        <h2 className="about__heading">About Us</h2>
        <section className="about__container">
          <aside className="about__left">
            <h3 className="about__left--heading">What We Do</h3>
            <p className="about__left--content">
              From new construction to renovations, our portfolio unites
              artistry and precision. Occupied sites pose no challenge, and we
              excel in managing multi-phase projects. Our commitment extends to
              crafting unique experiences, whether revitalizing history or
              innovating for the present. Welcome to innovation sculpted into
              reality
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
          </aside>
        </section>
      </section>
    </>
  );
}

export default About;
