import React from 'react';
import couser2 from "../../assets/images/mast2.webp";
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section id="call-to-action" class="call-to-action section dark-background">

    <img src={ couser2 } alt="" />

    <div class="container">
      <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div class="col-xl-10">
          <div class="text-center">
            <h3>With PoleGrid We connect landowners with telecom companies seeking locations for network tower installations.</h3>
            <p>Subscribe to get your consulation service</p>
            <Link class="cta-btn" to="/registration">Register Now</Link>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Cta
