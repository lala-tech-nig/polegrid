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
              {/* <div className="icon">
                <i className="bi bi-activity"></i>
              </div> */}
            
                <h3>Land Leasing for Towers</h3>
           
              <p>
              We connect landowners with telecom companies seeking locations for network tower installations. Our platform ensures a seamless process from listing to agreement finalization.
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
              {/* <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div> */}
             
                <h3>Equipment Placement Services</h3>
            
              <p>
              Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.
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
              {/* <div className="icon">
                <i className="bi bi-easel"></i>
              </div> */}
              
                <h3>Negotiation Support</h3>
             
              <p>
              Simplify the negotiation process with our built-in tools and expert guidance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
          <div className="service-item">
            <div className="img">
              <img src={ Legal } className="img-fluid" alt="" />
            </div>
            <div className="details position-relative">
              {/* <div className="icon">
                <i className="bi bi-easel"></i>
              </div> */}
              
                <h3>Legal and Technical Resources</h3>
             
              <p>
              Access the support you need to navigate contracts and technical requirements confidently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
          <div className="service-item">
            <div className="img">
              <img src={ Property } className="img-fluid" alt="" />
            </div>
            <div className="details position-relative">
              {/* <div className="icon">
                <i className="bi bi-easel"></i>
              </div> */}
              
                <h3>Property Management</h3>
             
              <p>
              Managing rental properties on behalf of landlords, including tenant communications, maintenance, rent collection, and property upkeep.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>