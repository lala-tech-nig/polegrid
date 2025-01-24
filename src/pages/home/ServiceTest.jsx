import { Link } from "react-router-dom"

const ServiceTest = () => {
  return (
    <section id="services" className="services home_services section-bg ">
    <div className="container" data-aos="fade-up">
    <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Our Service</h2>
                            </div>
                            <div className="title-link">
                                <Link to="/services">All Services
                                    <span className="bi bi-chevron-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

      <div className="row gy-4 allServices">
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fa-solid fa-mountain-city"></i>
              </div>
              <h3>Land Leasing for Towers</h3>
              <p>
              We connect landowners with telecom companies seeking locations for network tower installations. Our platform ensures a seamless process from listing to agreement finalization.
              </p>
              {/* <Link to="/service/architectural-design" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi-solid bi-arrow-up-from-ground-water"></i>
              </div>
              <h3>Equipment Placement Services</h3>
              <p>Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.</p>
              {/* <Link to="/service/strctural-design" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi-solid bi-compass-drafting"></i>
              </div>
              <h3>Negotiation Support</h3>
              <p>
              Simplify the negotiation process with our built-in tools and expert guidance.
              </p>
              {/* <Link to="/service/cad-traning" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

      </div>

    </div>
  </section>
  )
}

export default ServiceTest