import EngineringBills from '../../../../assets/images/Enginerring bills.webp';
import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/Header';
import IntroSection from './IntroSection';

const EngineeringBills = () => {
  return (
    <div>
      <Header />
      <IntroSection />
    <section id="service-details" className="service-details section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="services-list">
            <a href="#" className="active">Engineering Bills</a>
          </div>

          <h4>Engineering Bills</h4>
          <p>
          Engineering bills give a thorough description of the supplies, tools, and labor required for a construction project, guaranteeing that it is finished on schedule, under budget, and to the highest standards possible.
          </p>
        </div>

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <img src={ EngineringBills } alt="" className="img-fluid services-img" />
          <h3>Engineering Bills: A Key Component for Project Cost Management</h3>
          <p>
          Engineering bills are the basis for budget creation, procurement and bidding, project management, and cost estimate. According to the job breakdown structure, they are arranged. By offering a thorough explanation of operations and related costs, engineering bills facilitate accurate cost estimation, efficient cost control, transparent procurement, and enhanced project planning.
          </p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Engineering bills provide accurate cost estimation for construction projects.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>A carefully constructed budget reduces expense escalations and guarantees financial security.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Clients can plan and manage projects more efficiently with the aid of engineering bills.</span></li>
          </ul>
          <p>
          Engineering bills are essential for cost estimation, budget preparation, procurement, and project control.
          </p>
          <p>
          Project supervision is essential for effective project management, providing experience, risk management, resource allocation, and communication. It increases the likelihood of project success by managing risks, providing excellent results, and keeping projects on pace. It is essential for achieving project goals, exceeding customer expectations, and guaranteeing success.
          </p>
        </div>

      </div>

    </div>

  </section>
  <Footer />
  </div>
  )
}

export default EngineeringBills