import AboutcontentImg from '../../assets/images/mast.jpg';

const Aboutcontent = () => {
  return (
    <section id="about" className="aboutcontent section">

            <div className="container">

                <div className="row position-relative">

                    <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img
                            src={ AboutcontentImg } /></div>

                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                        {/* <h2 className="inner-title">Simplifying Student Housing for You.</h2> */}
                        <div className="our-story">
                            {/* <h4>Est 1988</h4> */}
                            <h3>What is PoleGrid?</h3>
                            <p>
                            At PoleGrid, we are committed to creating seamless connections between landowners, telecom providers, and shop owners. Our mission is to simplify complex negotiations and foster mutually beneficial partnerships through a transparent and efficient platform.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> <span><b>Our Vision:</b> To be the leading platform for property and equipment connection services.</span></li>
                                <li><i className="bi bi-check-circle"></i> <span><b>Our Mission:</b> To empower landowners, telecom providers, and shop owners through reliable and innovative solutions.</span></li>
                               
                            </ul>
                            <p>
                            With years of experience in the industry, we understand the challenges and opportunities in connecting people and businesses. That’s why we provide expert support, reliable resources, and innovative tools to ensure success for all parties involved.
                            </p>

                            {/* <div className="watch-video d-flex align-items-center position-relative">
                                <i className="bi bi-play-circle"></i>
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                    className="glightbox stretched-link">Watch Video</a>
                            </div> */}
                        </div>
                    </div>

                </div>

            </div>

        </section>
  )
}

export default Aboutcontent