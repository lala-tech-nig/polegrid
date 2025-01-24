
import ArchitecturalDesigns from '../../../../assets/images/architectural design.jpg';
import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/Header';
import IntroSection from './IntroSection';

const ArchitecturalDesign = () => {
  return (
    <div>
      <Header />
      <IntroSection />
   
    <section id="service-details" className="service-details section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="services-list">
            <a href="#" className="active">Architecture Design</a>
          </div>

          <h4>Architecture Design</h4>
          <p>
          The process of designing an architecture is intricate and multifaceted, requiring careful consideration of many different elements. Architects may design buildings and structures that suit the demands of its occupants while also making the world a better place by putting a priority on utility, beauty, sustainability, and safety.
          </p>
        </div>

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <img src={ ArchitecturalDesigns } alt="" className="img-fluid services-img" />
          <h3>Understanding the Principles of Great Design: Structural Perfection</h3>
          <p>
          It's critical to pick an image that conveys your message or brand while also being visually appealing, pertinent to the website's content, and relevant. This includes a blueprint, an architect, a 3D model, a building or structure that displays architectural design features, a close-up of a design element, an architectural sketch, and a picture of a finished building or structure.
          </p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>An architecture design creates an efficient environment for users.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>In order to provide people with a safe environment, architecture design focuses safety measures.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>A company's reputation can be improved by architectural design.</span></li>
          </ul>
          <p>
          Buildings should use energy-efficient systems, materials, and green areas to reduce their negative environmental effects.
          </p>
          <p>
          The discipline of architecture design is intricate and multidimensional, requiring careful consideration of many different aspects. The tenants of a building, the environment, and the community at large may all be significantly impacted by well-designed structures. Architects may design buildings that are both beautiful and useful, and that help to make the world a better place for all people, by placing a high priority on utility, aesthetics, and sustainability.
          </p>
        </div>

      </div>

    </div>

  </section>
  <Footer />
  </div>
  )
}

export default ArchitecturalDesign