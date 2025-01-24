

const Homeabout = () => {
    return (
      <section id="about" className="about section">
  
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                  <div className="row align-items-xl-center gy-5">
  
                      <div className="col-xl-5 content about_content">
                          <h3>About Us</h3>
                          <h2>What is Vacua</h2>
                          <p>Vacua is an application that offers a platform for students based in different regions of the UK, where students and landlords can list services that they can provide to their fellow students, such as housing, textbooks, meals, clothes, etc.</p>
                          <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                      </div>
  
                      <div className="col-xl-7">
                          <div className="row gy-4 icon-boxes">
  
                              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                  <div className="icon-box">
                                      <i className="bi bi-buildings"></i>
                                      {/* <h3>Eius provident</h3> */}
                                      <p>
                                      Searching home for students
                                      </p>
                                  </div>
                              </div> 
  
                              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                  <div className="icon-box">
                                      <i className="bi bi-clipboard-pulse"></i>
                                      {/* <h3>Rerum aperiam</h3> */}
                                      <p>
                                      Landlords can list their
                                      properties 
                                      </p>
                                  </div>
                              </div> 
  
                              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                  <div className="icon-box">
                                      <i className="bi bi-command"></i>
                                      {/* <h3>Veniam omnis</h3> */}
                                      <p>
                                      Community for 
                                      Students
                                      </p>
                                  </div>
                              </div> 
  
                              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                  <div className="icon-box">
                                      <i className="bi bi-graph-up-arrow"></i>
                                      {/* <h3>Delares sapiente</h3> */}
                                      <p>
                                          Students can sell their products and services 
                                      </p>
                                  </div>
                              </div> 
  
                          </div>
                      </div>
  
                  </div>
              </div>
  
          </section>
    )
  }
  
  export default Homeabout