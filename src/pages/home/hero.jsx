import { Link } from "react-router-dom";
import couser1 from "../../assets/images/mast1.webp";
import couser2 from "../../assets/images/mast2.webp";
import couser3 from "../../assets/images/mast3.webp";

const Hero = () => {
  const heroStyles = {
    overflowX: 'hidden',
    padding: '0',
  };

  const carouselStyles = {
    width: '100%',
    minHeight: '100vh',
    padding: '80px 0',
    margin: '0',
    position: 'relative',
  };

  const carouselItemStyles = {
    position: 'absolute',
    inset: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    zIndex: 1,
    transitionDuration: '0.4s',
  };

  const infoStyles = {
    position: 'absolute',
    inset: '0',
    zIndex: 2,
  };

  const imagePaths = [
    couser2,
    couser1,
    couser3,
  ];

  const carouselItems = imagePaths.map((path, index) => (
    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} style={{ backgroundImage: `url(${path})` }} key={index}></div>
  ));

  return (
    <section id="hero" className="hero" style={heroStyles}>
      <div className="info d-flex align-items-center" style={infoStyles}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">Welcome to <span> <br />PoleGrid</span></h2>
              <p data-aos="fade-up">
              Your trusted platform dedicated to bridging the gap between landowners and telecom companies.
             {/* Your Telecom Site Appreciation and Leasing */}
              </p>
              <Link data-aos="fade-up" data-aos-delay="200" to="/about" className="btn-get-started">Know more about us!</Link>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        {carouselItems}
        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
