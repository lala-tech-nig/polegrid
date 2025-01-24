import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimony.css';
import Timage1 from '../../assets/images/timage1.jpg';
import Timage2 from '../../assets/images/timage2.jpg';
import Timage3 from '../../assets/images/timage3.jpg';
import Timage4 from '../../assets/images/timage4.jpg';
import Timage5 from '../../assets/images/timage5.jpg';


const Testimony = () => {
   

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Adjust for tablets and below
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div>
    <section id="testimonials" className="testimonials section-bg">
    <div className="container">
      {/* <div className="section-title" data-aos="fade-up">
        <h2>Meet the Daytopia Foundation Trustees</h2>
      </div> */}
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
       
        <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={ Timage1 } className="testimonial-img" alt="" />
                <h3>High Chief Okoro</h3>
                <h4>Land Owner</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                  We've seen significant growth in our community since partnering with Pole Grid Solutions. They're the perfect bridge between landowners and telecoms companies!" - High Chief Okoro
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

        <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={ Timage2 } className="testimonial-img" alt="" />
                <h3>Mrs Kemi Ademola</h3>
                <h4>Land Owner(Lagos State)</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                  Pole Grid Solutions has been instrumental in connecting us with reliable financial institutions, increasing our revenue streams." 
                  
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

        <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={ Timage3 } className="testimonial-img" alt="" />
                <h3>Mrs Deborah Alasin</h3>
                <h4>Land Owner(Ekiti State)</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                  Their customer service is exceptional! Pole Grid Solutions truly prioritizes their clients' needs.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

        <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={ Timage4 } className="testimonial-img" alt="" />
                <h3>Alhaja Abdullahi Zainab</h3>
                <h4>Land Owner(Kano State)</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                  I was skeptical at first, but Pole Grid Solutions has proven to be a valuable partner in connecting us with telecoms companies.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

        <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={ Timage5 } className="testimonial-img" alt="" />
                <h3>Engr. Bishop Chris O.</h3>
                <h4>Land Owner(Edo State)</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                  Pole Grid Solutions has helped us navigate the complex telecoms landscape with ease. We're grateful for their expertise!
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

           </Slider>
    </div>
  </section>
    </div>
  );
}

export default Testimony
