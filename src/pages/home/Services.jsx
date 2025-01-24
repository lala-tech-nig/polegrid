import CAD from '../../assets/images/cad traning.jpeg';
import ArchitecturalDesign from '../../assets/images/architectural design.jpg';
import StructuralDesign from '../../assets/images/structural.webp';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="home_service services section">

    <div className="container" data-aos="fade-up" data-aos-delay="100">
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

      <div className="row gy-5">
        {/* Architectural Design  */}
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="service-item">
            <div className="img">
              <img src={ ArchitecturalDesign } className="img-fluid" alt="" />
            </div>
            <div className="details position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <Link to="/services/architectural-design" className="stretched-link">
                <h3>Architecture Design</h3>
              </Link>
              <p>
              Architectural design is a complex process that requires technical expertise, creativity, and professional teamwork to create successful buildings.
              </p>
            </div>
          </div>
        </div>
         {/* Structual Design  */}
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
          <div className="service-item">
            <div className="img">
              <img src={ StructuralDesign } className="img-fluid" alt="" />
            </div>
            <div className="details position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <Link to="/services/structural-design" className="stretched-link">
                <h3>Structural Design</h3>
              </Link>
              <p>
              Buildings, bridges, and other structures must have sound structural design in order to be safe and stable.
              </p>
            </div>
          </div>
        </div>
        {/* CAD Traning  */}
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
          <div className="service-item">
            <div className="img">
              <img src={ CAD } className="img-fluid" alt="" />
            </div>
            <div className="details position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <Link to="/services/cad-tranning" className="stretched-link">
                <h3>CAD Training</h3>
              </Link>
              <p>
CAD software is used to create accurate designs for buildings, bridges, and other structures.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Services