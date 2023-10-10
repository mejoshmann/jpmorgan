import "./Contact.scss";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
    
  }

  
  return (
    <section className="contact">

      <div className="contact__parallax"></div>
      <h2 className="contact__heading">Contact Us</h2>

      <aside className="contact__aside">
        
        <p className="contact__blurb">
          Ready to turn your construction dreams into reality? We can't wait to
          hear from you! Whether you're planning a new project, seeking expert
          advice, or have any questions about our services, our team is here to
          help. Fill out the form below and let's start building together. Your
          vision is our blueprint, and we're excited to bring it to life. Get in
          touch today, and let's lay the foundation for your next successful
          project!
        </p>
        
        <form className="form" onSubmit={sendEmail}>
          <label htmlFor="name" className="name">
            <input
              type="text"
              className="form__name"
              id="name"
              placeholder="Enter Your Name *"
              required
            />
          </label>

          <label htmlFor="email" className="email">
            <input
              type="email"
              className="form__email"
              id="email"
              placeholder="Enter Your Email *"
              required
            />
          </label>

          <label htmlFor="company" className="company">
            <input
              type="text"
              className="form__company"
              placeholder="Company Name "
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

          <button className="form__button" type="submit" >
            SUBMIT
          </button>
        </form>
        
      </aside>
    </section>
  );
}

export default Contact;
