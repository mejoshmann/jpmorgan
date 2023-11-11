import "./About.scss";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <section className="about">
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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M9TQY4H73"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4M9TQY4H73');
              `}
          </script>
      </Helmet>
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
              <h3 className="container__clowns">"We build one house at a time, and leave the juggling to the clowns!"</h3>

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
                We offer Full Project Management from start to finish. Building
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
