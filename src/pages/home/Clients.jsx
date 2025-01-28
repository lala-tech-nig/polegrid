
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import MTN from '../../assets/images/MTN.png';
import Airtel from '../../assets/images/airtel.png';
import Etisalat from '../../assets/images/etisalat.jpg';
import Glo from '../../assets/images/glo.jpg';
import Polaris from '../../assets/images/polaris.png';
import Fcmb from '../../assets/images/fcmb.png';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Large tablets and desktops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" className="clients section light-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Our Partners</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="swiper-slide">
            <img src={ MTN } className="img-fluid" alt="Client 1" />
          </div>
          <div className="swiper-slide">
            <img src={ Airtel } className="img-fluid" alt="Client 2" />
          </div>
          <div className="swiper-slide">
            <img src={ Etisalat } className="img-fluid" alt="Client 3" />
          </div>
          <div className="swiper-slide">
            <img src={ Glo} className="img-fluid" alt="Client 4" />
          </div> 
          
          <div className="swiper-slide">
            <img src={Polaris} className="img-fluid" alt="Client 6" />
          </div>
          <div className="swiper-slide">
            <img src={ Fcmb } className="img-fluid" alt="Client 7" />
          </div>
         
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
