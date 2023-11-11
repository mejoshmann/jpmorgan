import "./Contact.scss";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
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
      <div className="contact__parallax"></div>
      <h2 className="contact__heading">Contact Us</h2>

      <aside className="contact__aside">
        <p className="contact__blurb">
          Are you searching for a reputable construction company in Vancouver,
          BC, that can bring your construction dreams to life? Look no further!
          JP Morgan Construction is your premier choice for top-quality
          construction services in the Vancouver area. With a proven track
          record of excellence, we specialize in residential and commercial
          construction, carpentry and framing, offering a wide range of services to meet your needs.
        </p>

        <form onSubmit={sendEmail} className="form">
          <label htmlFor="name" className="name">
            <input
              type="text"
              className="form__name"
              id="name"
              name="to_name"
              placeholder="Enter Your Name *"
              required
            />
          </label>

          <label htmlFor="email" className="email">
            <input
              type="email"
              className="form__email"
              id="email"
              name="email"
              placeholder="Enter Your Email *"
              required
            />
          </label>

          <label htmlFor="company" className="company">
            <input
              type="text"
              className="form__company"
              placeholder="Company Name"
              name="company"
              id="company"
            />
          </label>

          <label htmlFor="message" className="message">
            <textarea
              name="message"
              type="text"
              className="form__message"
              id="message"
              placeholder="Enter Your Message"
              required
            />
          </label>

          <button className="form__button" type="submit">
            SEND
          </button>
        </form>
      </aside>
    </section>
  );
}

export default Contact;
