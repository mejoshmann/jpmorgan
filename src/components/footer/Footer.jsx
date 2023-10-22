import "./Footer.scss";

function Footer() {

  return (
    <>
      <footer className="footer">
          <div className="footer__details">
            <h3 className="footer__details--heading">
              JP Morgan Construction Inc
            </h3>
            <h4 className="footer__details--email">info@jpmorgan.com</h4>
            <h4 className="footer__details--number">250 508 5605</h4>
          </div>

          <div className="footer__socials">
            <div className="footer__socials--container">
              {/* <div className="footer__fb"></div> */}
                <a href={`https://www.instagram.com/jpmorganconstruction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__insta"></a>
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
