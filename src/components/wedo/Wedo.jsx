import "./Wedo.scss";

function Wedo() {
    return <>
    <div className="wedo">
        <div className="wedo__container">
            <h2 className="wedo__heading">
                What Do We Do?
            </h2>
            <p className="wedo__content">We're your full-service construction experts, specializing in luxury homes, commercial projects, and waterfront docks. With us, you're supported at every stage of the journey</p>
        </div>

        <div className="wedo__images">
            <div className="wedo__residential">
                <div className="wedo__residential--image wedo__image"></div>
                <p className="wedo__content">Residential</p>
            </div>
            <div className="wedo__commercial">
                <div className="wedo__commercial--image wedo__image"></div>
                <p className="wedo__content">Commercial</p>
            </div>
            <div className="wedo__marine">
                <div className="wedo__marine--image wedo__image"></div>
                <p className="wedo__content">Marine</p>
            </div>

        </div>
    </div>
    </>
}

export default Wedo;