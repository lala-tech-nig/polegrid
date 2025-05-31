import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CAD from '../../assets/images/negotiation.webp';
import ArchitecturalDesign from '../../assets/images/land.webp';
import StructuralDesign from '../../assets/images/equipment.webp';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="services" className="home_service services section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a" data-aos="fade-right" data-aos-duration="800">Our Service</h2>
              </div>
              <div className="title-link" data-aos="fade-left" data-aos-duration="800">
                <Link to="/services">
                  All Services <span className="bi bi-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-5">
          {/* Architectural Design  */}
          <div className="col-xl-4 col-md-6" data-aos="flip-left" data-aos-delay="200">
            <div className="service-item">
              <div className="img">
                <img src={ArchitecturalDesign} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <h3>Land Leasing for Towers</h3>
                <p>
                  We connect landowners with telecom companies seeking locations for network tower installations. Our platform ensures a seamless process from listing to agreement finalization.
                </p>
              </div>
            </div>
          </div>

          {/* Structural Design  */}
          <div className="col-xl-4 col-md-6" data-aos="flip-up" data-aos-delay="300">
            <div className="service-item">
              <div className="img">
                <img src={StructuralDesign} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <h3>Equipment Placement Services</h3>
                <p>
                  Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.
                </p>
              </div>
            </div>
          </div>

          {/* CAD Training */}
          <div className="col-xl-4 col-md-6" data-aos="flip-right" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src={CAD} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <h3>Negotiation Support</h3>
                <p>
                  Simplify the negotiation process with our built-in tools and expert guidance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Services;
