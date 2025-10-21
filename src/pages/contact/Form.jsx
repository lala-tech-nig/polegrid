import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import usePageTracking from '../../usePageTracking';

const Form = () => {
  usePageTracking
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();

    // Change the button text to "Sending..."
    setButtonText('Sending...');

    emailjs.sendForm('service_r9ve7v8', 'template_6i5qr4s', form.current, 'WbtPBxdXq5qitkKNu') 
      .then((result) => {
        console.log(result.text);
        // Clear the form fields after a successful submission
        form.current.reset();
        // Change the button text to "Sent"
        setButtonText('Sent');
        // Reset the button text to "Send Message" after a delay (e.g., 2 seconds)
        setTimeout(() => setButtonText('Send Message'), 2000);
      })
      .catch((error) => {
        console.log(error.text);
        // Change the button text back to "Send Message" in case of an error
        setButtonText('Send Message');
      });
  };

  return (
    <section className="contact">
    <div className="container">
      <div className="row">
        {/* <div className="col-sm-12">
          <div className="contact-map box">
            <div id="map" className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>
        </div> */}
        <div className="col-sm-12 section-t8">
          <div className="row">
            <div className="col-md-7">
              <form action="" method="post" ref={form} onSubmit={sendEmail} role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <input type="text" name="subject" className="form-control form-control-lg form-control-a" placeholder="Subject" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" cols="45" rows="8" placeholder="Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 my-3">
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" value="send" id="submitbtn" className="btn btn_general btn-a">{buttonText}</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5 section-md-t3">
              <div className="icon-box section-b2">
                <div className="icon-box-icon">
                  <span className="bi bi-envelope"></span>
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Say Hello</h4>
                  </div>
                  <div className="icon-box-content">
                    <p className="mb-1">Email.
                      <span className="color-a">polegrid01@gmail.com</span>
                    </p>
                    <p className="mb-1">Phone.
                      <span className="color-a">+234 701 816 2166</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon-box section-b2">
                <div className="icon-box-icon">
                  <span className="bi bi-geo-alt"></span>
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Find us in</h4>
                  </div>
                  <div className="icon-box-content">
                    <p className="mb-1">
                    Block 4A, Ajimo Logere, Pinnacle Horizon Estate, Ibeju Lekki,
                      <br /> Lagos. Nigeria.
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon-box">
                <div className="icon-box-icon">
                  <span className="bi bi-share"></span>
                </div>
                <div className="icon-box-content table-cell">
                  <div className="icon-box-title">
                    <h4 className="icon-title">Social networks</h4>
                  </div>
                  <div className="icon-box-content">
                    <div className="socials-footer">
                      <ul className="list-inline">
                        {/* <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li> */}
                        <li className="list-inline-item">
                          <a href="https://x.com/polegrid" target="_blank" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.instagram.com/_polegrid/" target="_blank" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        {/* <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Form