import "./Footer.scss";
import { Helmet } from "react-helmet";

function Footer() {

  return (
    <>
      <footer className="footer">
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
      </Helmet>
          <div className="footer__details">
            <h3 className="footer__details--heading">
              JP Morgan Construction Inc
            </h3>
            <h4 className="footer__details--email">info@jpmorgan.com</h4>
            <h4 className="footer__details--number">250 508 5605</h4>
          </div>

          <div className="footer__socials">
            <div className="footer__socials--container">
                <a href={`https://www.instagram.com/jpmorganconstruction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__insta"><i>Follow on Instagram</i></a>
                  <a href={`https://www.instagram.com/jpmorganconstruction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__fb"><i>Follow on FaceBook</i></a>
                  
            </div>
            <p className="footer__copyright">
              &#169; JP Morgan Construction inc. 2003
            </p>
  
          </div>
      </footer>
    </>
  );
}

export default Footer;
