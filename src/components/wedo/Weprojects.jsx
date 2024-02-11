function Weprojects() {
  return (
    <>
      <div className="container">
        <h2 className="container__heading">Our Projects</h2>
        <div className="container__subcontainer">
            <div className="container__residential">
                <div className="container__residential--image"></div>
                <div className="container__residential--container">
                    <h3 className="container__residential--heading">Residential</h3>
                    <h4 className="container__residential--sub-heading">Residential Construction</h4>
                    <p className="container__residential--content">Stuff</p>
                    <button className="container__residential--button">Get A Quote</button>
                </div>
            </div>

            <div className="container__commercial">
                <div className="container__commercial--image"></div>
                <div className="container__commercial--container">
                    <h3 className="container__commercial--heading">Commercial</h3>
                    <h4 className="container__commercial--sub-heading">Commercial Construction</h4>
                    <p className="container__commercial--content">Stuff</p>
                    <button className="container__commercial--button">Get A Quote</button>
                </div>
            </div>

            <div className="container__marine">
                <div className="container__marine--image"></div>
                <div className="container__marine--container">
                    <h3 className="container__marine--heading">Marine</h3>
                    <h4 className="container__marine--sub-heading">Marine Construction</h4>
                    <p className="container__marine--content">Stuff</p>
                    <button className="container__marine--button">Get A Quote</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Weprojects;
