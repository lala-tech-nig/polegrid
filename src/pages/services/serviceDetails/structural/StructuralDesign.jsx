
import StructuralDesigns from '../../../../assets/images/structural.webp';
import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/Header';
import IntroSection from './IntroSection';

const StructuralDesign = () => {
  return (
    <div>
      <Header />
      <IntroSection />
    <section id="service-details" className="service-details section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="services-list">
            <a href="#" className="active">Structural Design</a>
          </div>

          <h4>Structural Design</h4>
          <p>
          Construction must include structural design as a crucial component. To assure the safety and stability of buildings, bridges, and other structures, it entails developing the framework and support system.
          </p>
        </div>

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <img src={ StructuralDesigns } alt="" className="img-fluid services-img" />
          <h3>Structural Design: The Importance of Structural Design in Construction</h3>
          <p>
          Structural design is an important part of the construction process, as it involves the analysis and design of load-bearing elements such as foundations, beams, columns, and walls. CAD software is used to create detailed 3D models, and structural engineers work closely with the construction team to ensure the structure is built according to the design specifications.
          </p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>A construction company will create a customized design to meet client needs.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Building a building requires calculations and blueprints.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Creating thorough plans to direct the construction process.</span></li>
          </ul>
          <p>
          Structural design is essential for creating safe and stable structures that meet occupant needs.
          </p>
          <p>
          A qualified and experienced construction business can offer a full collection of documentation, calculations, and drawings to guarantee the structure is erected in accordance with the plan and complies with all applicable building standards and laws. Structural design is crucial for any construction project.
          </p>
        </div>

      </div>

    </div>

  </section>
  <Footer />
  </div>
  )
}

export default StructuralDesign