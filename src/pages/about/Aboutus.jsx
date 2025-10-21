import Me from '../../assets/images/Daniel.jpg';
import Slide1 from '../../assets/images/about_hero1.jpeg';
import CEO from '../../assets/images/Daniel.jpg';
import usePageTracking from '../../usePageTracking';

const Aboutus = () => {
  usePageTracking();
  return (
    <section className="section-about">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 position-relative">
          <div className="about-img-box">
            <img src={ Slide1 } alt=" The CEO Image" className="img-fluid" />
          </div>
          <div className="sinse-box">
            <h3 className="sinse-title">Colony Properties
              <span></span>
              <br /> Since 2022
            </h3>
            <p>Real Estate Solutions</p>
          </div>
        </div>
        <div className="col-md-12 section-t8 position-relative">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <img src={ CEO } alt="" className="img-fluid" />
            </div>
            <div className="col-lg-2  d-none d-lg-block position-relative">
              <div className="title-vertical d-flex justify-content-start">
                <span><span className='about_style'>Colony</span> Properties</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 section-md-t3">
              <div className="title-box-d">
                <h3 className="title-d">Welcome
                  to Colony 
                  <br />  <span className="color-d"> Properties</span> 
                </h3>
              </div>
              <p className="color-text-a">
              At Colony Properties, we believe in creating lasting connections between people and properties. With years of expertise in the real estate market, we specialize in both sales and rentals of residential and commercial spaces. Our mission is to make property ownership and renting a hassle-free experience, offering personalized services and unmatched local knowledge. Whether you're looking for your next home or an investment opportunity, Colony Properties is here to guide you every step of the way.
              </p>
              {/* <p className="color-text-a">
                Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                Mauris blandit aliquet
                elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                convallis at tellus.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutus