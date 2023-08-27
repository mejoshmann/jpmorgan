import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <aside className="footer__aside">
          <h2 className="footer__heading">Contact Us</h2>
          <p className="footer__blurb">
            Ready to turn your construction dreams into
            reality? We can't wait to hear from you! Whether you're planning a
            new project, seeking expert advice, or have any questions about our
            services, our team is here to help.
            Fill out the form below and let's start building together. Your
            vision is our blueprint, and we're excited to bring it to life. Get
            in touch today, and let's lay the foundation for your next
            successful project!
          </p>
          <form className="form">
            <label htmlFor="name" className="name">
              <input
                type="text"
                className="form__name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </label>
            <label htmlFor="company" className="company">
              <input
                type="text"
                className="form__company"
                placeholder="Company Name"
              />
            </label>

            <label htmlFor="email" className="email">
              <input
                type="email"
                className="form__email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </label>

            <label htmlFor="message" className="message">
              <textarea
                type="text"
                className="form__message"
                id="message"
                placeholder="Enter Your Message"
                required
              />
            </label>

            <button className="form__button" type="submit">
              SUBMIT
            </button>
          </form>
        
        </aside>
        <aside className="footer__right">
          <div className="footer__details">
            <h3 className="footer__details--heading">
              JP Morgan Construction Inc
            </h3>
            <h4 className="footer__details--email">info@jpmorgan.com</h4>
            <h4 className="footer__details--number">250 508 5605</h4>
          </div>
          <div className="footer__socials">
            <div className="footer__socials--container">
            <div className="footer__fb"></div>
            <div className="footer__insta"></div>
            <div className="footer__twitter"></div>
            </div>
            <p className="footer__copyright">&#169; JP Morgan Construction inc. 2003</p>
          </div>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
