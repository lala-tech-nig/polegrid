import CAD from '../../assets/images/cad traning.jpeg';
import ProjectSupervison from '../../assets/images/project supervision.jpg';
import ArchitecturalDesign from '../../assets/images/architectural design.jpg';
import EngineringBills from '../../assets/images/Enginerring bills.webp';
import StructuralDesign from '../../assets/images/structural.webp';
import { Link } from 'react-router-dom';

const ServiceSections = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

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
                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
              </div>
              <h3>Equipment Placement Services</h3>
              <p>
              Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.
              </p>
              {/* <Link to="/service/strctural-design" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3>Property Management</h3>
              <p>
              Managing rental properties on behalf of landlords, including tenant communications, maintenance, rent collection, and property upkeep.
              </p>
              {/* <Link to="/service/cad-traning" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-trowel-bricks"></i>
              </div>
              <h3>Negotiation Support</h3>
              <p>
              Simplify the negotiation process with our built-in tools and expert guidance.
              </p>
              {/* <Link to="/service/project-supervision" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </div>
              <h3>Legal and Technical Resources</h3>
              <p>
              Access the support you need to navigate contracts and technical requirements confidently.
              </p>
              {/* <Link to="/service/engineering-bills" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></Link> */}
            </div>
          </div>

        
          

        </div>

      </div>
    </section>
  )
}

export default ServiceSections