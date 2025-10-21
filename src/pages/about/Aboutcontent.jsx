import AboutcontentImg from '../../assets/images/mast.jpg';
import usePageTracking from '../../usePageTracking';


const Aboutcontent = () => {
    usePageTracking();
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
                            At Polegrid Solutions, we specialize in creating connections that drive growth and development. Our expertise spans three key areas:
                            </p>
                            <p>
                            <b>Telecom Site Acquisition</b>: We bridge the gap between landowners, telecom companies, and tower companies, facilitating seamless acquisitions of prime land and locations for telecom tower installations.

                            </p>
                            <p>
                            <b>Financial Services Connectivity</b>: We link businesses, such as shops and supermarkets, with financial institutions to facilitate ATMs (money machines)installations and access other financial services, enhancing their financial development.


                            </p>
                            <p>
                            <b>Real Estate Services</b>: Our comprehensive real estate solutions empower individuals and organizations to acquire, sell, or manage properties efficiently.

                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> <span><b>Our Vision:</b> Our vision is to be the leading platform solutions provider for property and equipment connection services empowering individuals, businesses, and communities to thrive in a rapidly evolving world.</span></li>
                                <li><i className="bi bi-check-circle"></i> <span><b>Our Mission:</b> To empower Landowners , telecom companies , tower companies and businesses through reliable and innovative solutions.</span></li>
                               
                            </ul>
                            <p>
                            As a connectivity solutions provider, we foster partnerships between landowners, telecom companies, financial institutions, and property owners. With years of industry experience, we understand the challenges and opportunities in connecting people and businesses.

<br /><br />Our team provides expert support, reliable resources, and innovative tools to ensure success for all parties involved.

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