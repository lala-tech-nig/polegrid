import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CAD from '../../assets/images/negotiation.webp';
import ArchitecturalDesign from '../../assets/images/land.webp';
import StructuralDesign from '../../assets/images/equipment.webp';
import '../services/service.css';
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
        </div>

       <div id="HeaderSection-posts" className="HeaderSection-posts">
          <div className="container">
            <div className="row gy-4">
           <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article>
                <div className="post-img">
                      <img src={ ArchitecturalDesign } alt="Land Leasing for Towers" className="img-fluid" />
                  </div>
      
                  <h2 className="title">Land Leasing for Towers</h2>
                  <p className="post-category">
                  We connect landowners with telecom companies seeking locations for network tower installations. Our platform ensures a seamless process from listing to agreement finalization.
                  </p>
               </article>
               
              </div>
      
      
           <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article>
               
                  <div className="post-img">
                      <img src={ StructuralDesign } alt="Equipment Placement Services " className="img-fluid" />
                  </div>
      
                  <h2 className="title">Equipment Placement Services </h2>
                  <p className="post-category">
                  Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.
                  </p>
                </article>
              </div>
         
           <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article>
              
                  <div className="post-img">
                   
                      <img src={ CAD } alt="daytopia workshop and seminals Image" className="img-fluid" />
                   
                  </div>
      
                  <h2 className="title"> Negotiation Support </h2>
                  <p className="post-category">
                  Simplify the negotiation process with our built-in tools and expert guidance.
                  </p> 
                </article>
              </div>
           
            </div>
          </div>
        </div>

    </section>
  );
};

export default Services;
