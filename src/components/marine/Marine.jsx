import "./Marine.scss";
import { Helmet } from "react-helmet";

function Marine() {
  return (
    <>
      <div className="steel">
        <Helmet>
          <meta
            name="description"
            content="Discover excellence in residential and commercial construction with JP Morgan Construction, your trusted partner in Vancouver, BC. Specializing in new builds, renovations, and commercial carpentry. our skilled team brings artistry and precision to every project. From revitalizing history to innovating for the present, we craft unique experiences that stand the test of time. Contact us today to turn your construction dreams into reality in the heart of Vancouver."
          />
          <meta
            name="keywords"
            content="Welded aluminum docks, Aluminum gangways, Vancouver waterfront properties, Marine-grade gangways, Aluminum floating docks, Custom aluminum marine structures, Vancouver marina solutions,  Vancouver construction, BC builders, new builds, construction consulting, Vancouver construction services"
          />{" "}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4M9TQY4H73"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4M9TQY4H73');
              `}
          </script>
        </Helmet>
        <div className="steel__main-image"></div>
        <h2 className="steel__heading">Marine</h2>

        <div className="steel__container">
          <p className="steel__blurb">
            Enhance your waterfront lifestyle with our exceptional floating dock
            solutions, proudly serving Vancouver. We are dedicated to crafting
            companion ways and floating docks that redefine your connection to
            the water.
            <p className="steel__hidden">
              Crafted from lightweight yet durable aluminum, our skilled welders
              build a floating dock system to complement your property's
              distinctive features. Imagine a waterfront that seamlessly blends
              form and function, that's what we deliver. From the initial
              concept to the final installation, our team is driven by a passion
              for precision, ensuring your vision becomes a reality. With safety
              as our top priority, we engineer stable and stylish platforms that
              stand the test of time. Elevate your waterfront experience today.
              Contact us to discuss your project.
            </p>
          </p>
          <div className="steel__thumbnails">
            <div className="steel__thumbnail">
              <div className="steel__image dock1"></div>
            </div>

            <div className="steel__thumbnail">
              <div className="steel__image dock2"></div>
            </div>
            <div className="steel__thumbnail">
              <div className="steel__image dock3"></div>
            </div>

            <div className="steel__thumbnail">
              <div className="steel__image dock4"></div>
            </div>

            <div className="steel__thumbnail">
              <div className="steel__image dock5"></div>
            </div>

            <div className="steel__thumbnail">
              <div className="steel__image dock6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marine;
