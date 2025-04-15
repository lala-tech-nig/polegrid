import PartnersImg from '../../assets/images/partners.webp'; 

const Partners = () => {
    return (
        <section id="about" class="about section">

        
        {/* <div class="container section-title" data-aos="fade-up">
          <span>About Us<br></span>
          <h2>About Us<br></h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>< */}
  
        <div class="container">
  
          <div class="row gy-4">
  
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
              <img src={ PartnersImg } class="img-fluid" alt="/" />
            </div>
  
            <div class="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
              <h3>Strongly backed by Global Partners</h3>
              <p class="fst-italic">
                 We are proudly backed by leading telecom companies, tower providers, financial institutions and real estate developers in Nigeria, providing expert
                 site acquisition services that drive business success.
              </p>

              <h3>Trusted by leading brands</h3>
              <p><b>Our Trusted Record</b></p>
              <p class="fst-italic">
                With over 500 successful deals, our team has established a reputation for delivering efficient, cost-effective, and compliant solutions that meet the unique needs of our clients.
              </p>

              
            </div>
  
          </div>
  
        </div>
  
      </section>
    )
  }
  
  export default Partners