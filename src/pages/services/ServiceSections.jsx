import CAD from '../../assets/images/negotiation.webp';
import ArchitecturalDesign from '../../assets/images/land.webp';
import StructuralDesign from '../../assets/images/equipment.webp';
import Property from '../../assets/images/property.webp';
import Legal from '../../assets/images/legal.jpeg';
import Atm from '../../assets/images/atm.jpg';
import { Link } from 'react-router-dom';

const ServiceSections = () => {
  return (
    <section id="HeaderSection-posts" className="HeaderSection-posts">
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
     <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <article>
            <div className="post-img">
                <img src={ Legal } alt="Legal and Technical Resources" className="img-fluid" />
            </div>

            <h2 className="title">Legal and Technical Resources</h2>
            <p className="post-category">
            Access the support you need to navigate contracts and technical requirements confidently.
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
                <img src={ Property } alt="Property Management" className="img-fluid" />
            </div>

            <h2 className="title">Property Management</h2>
            <p className="post-category">
            Managing rental properties on behalf of landlords, including tenant communications, maintenance, rent collection, and property upkeep.
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
                <img src={ Atm } alt="Property Management" className="img-fluid" />
            </div>

            <h2 className="title">ATM Installation</h2>
            <p className="post-category">
            We connect banks, businesses, and property owners with fast, secure ATM installation—covering everything from setup to maintenance.
            </p> 
          </article>
        </div>
     
      </div>
    </div>
  </section>
  )
}

export default ServiceSections