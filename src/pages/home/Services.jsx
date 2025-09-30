
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CAD from "../../assets/images/negotiation.webp";
import ArchitecturalDesign from "../../assets/images/land.webp";
import StructuralDesign from "../../assets/images/equipment.webp";
import "../services/service.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="services" className="home_service services section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between align-items-center">
              <div className="title-box">
                <h2
                  className="title-a"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  What We Offer
                </h2>
                <p
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Innovative solutions designed to maximize opportunities for
                  landowners, organizations, and telecom partners.
                </p>
              </div>
              <div
                className="title-link"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <Link to="/services" className="explore-link">
                  Explore All Services{" "}
                  <span className="bi bi-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="HeaderSection-posts" className="HeaderSection-posts">
        <div className="container">
          <div className="row gy-5">
            {/* Service Card 1 */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <article className="service-card gradient-border">
                <div className="post-img">
                  <img
                    src={ArchitecturalDesign}
                    alt="Land Leasing for Towers"
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">Land Leasing for Towers</h2>
                <p className="post-category">
                  Unlock revenue potential by leasing your land to telecom
                  companies for tower installations. We handle the process from
                  discovery to agreement, ensuring transparency and fair value.
                </p>
                <Link to="/services/land-leasing" className="learn-more">
                  Learn More →
                </Link>
              </article>
            </div>

            {/* Service Card 2 */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <article className="service-card gradient-border">
                <div className="post-img">
                  <img
                    src={StructuralDesign}
                    alt="Equipment Placement Services"
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">Equipment Placement</h2>
                <p className="post-category">
                  We connect shop and property owners with trusted partners for
                  installing ATMs, POS systems, and other telecom equipment,
                  helping you maximize income streams with minimal effort.
                </p>
                <Link to="/services/equipment-placement" className="learn-more">
                  Learn More →
                </Link>
              </article>
            </div>

            {/* Service Card 3 */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <article className="service-card gradient-border">
                <div className="post-img">
                  <img
                    src={CAD}
                    alt="Negotiation Support"
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">Expert Negotiation</h2>
                <p className="post-category">
                  Our experienced team simplifies complex negotiations between
                  landowners and organizations. We provide professional support
                  to ensure you get the best possible deal with ease.
                </p>
                <Link to="/services/negotiation" className="learn-more">
                  Learn More →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


