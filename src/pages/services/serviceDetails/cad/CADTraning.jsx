import CAD from '../../../../assets/images/cad traning.jpeg';
import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/Header';
import IntroSection from './IntroSection';

const CADTraning = () => {
  return (
    <>
    <Header />
    <IntroSection />
    <section id="service-details" className="service-details section">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="services-list">
            <a href="#" className="active">CAD Training</a>
          </div>

          <h4>CAD Training</h4>
          <p>
          CAD is a construction software used to create detailed and accurate designs for buildings, bridges, and other structures. It allows architects and engineers to create 3D models of their designs, which can be modified, tested, and shared with stakeholders.
          </p>
        </div>

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <img src={ CAD } alt="" className="img-fluid services-img" />
          <h3>CAD Training: A Comprehensive Guide to CAD Training</h3>
          <p>
          CAD (Computer-Aided Design) is a powerful tool used in a wide range of industries to create detailed 2D and 3D models of their designs. CAD training provides individuals with the opportunity to understand the software, draw and model tools, file management, real-world examples, and hands-on practice. It can be delivered in a variety of formats, including online courses, in-person classes, and self-paced study programs, and is an essential skill for anyone seeking a career in design or engineering.
          </p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Customized training program for CAD software/projects.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>CAD training covers drawing, modeling, object manipulation, and annotation.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>CAD training offers practical experience to develop proficiency and assurance with the program.</span></li>
          </ul>
          <p>
          CAD training provides hands-on practice and real-world examples to build skills and confidence.
          </p>
          <p>
          CAD (Computer-Aided Design) training is essential for anyone interested in a profession in design or engineering. It allows students to produce accurate and thorough 2D and 3D models of their creations, which can be used to construct prototypes, test designs, and improve communication. It covers a variety of subjects, including software installation, user interface, drawing and modeling tools, file management, and more. It also offers practical training and real-world experiences to help students develop their abilities and confidence.
          </p>
        </div>

      </div>

    </div>

  </section>
  <Footer />
  </>
  )
}

export default CADTraning