import "./Footer.scss";

function Footer() {

    

    return (
        <>
        <footer className="footer">
            <aside className="footer__aside">
                <h2 className="footer__heading">Contact Us</h2>
                <form className="form">
                    <label htmlFor="name" className="name">
                    <input type="text" className="form__name" id="name" placeholder="Enter Your Name" required/>
                    </label>
                    <label htmlFor="company" className="company">
                        <input type="text" className="form__company" placeholder="Company Name" />
                    </label>

                    <label htmlFor="email" className="email">
                    <input type="email" className="form__email" id="email" placeholder="Enter Your Email" required/>
                    </label>

                    <label htmlFor="message" className="message">
                    <textarea type="text" className="form__message" id="message" placeholder="Enter Your Message" required/>
                    </label>

                    <button className="form__button" type="submit">SUBMIT</button>
                </form>
            </aside>
            <aside className="footer__right">
                <div className="footer__fb"></div>
                <div className="footer__insta"></div>
            </aside>
        </footer>
        </>
    )
}

export default Footer;
