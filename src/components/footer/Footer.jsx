import { Link } from "react-router-dom";
import SectionFooter from "./SectionFooter";
import './footer.css';


const Footer = () => {
  return (
    <div>
        <footer id="footer" className="footer dark-background">
    <div className="container">
      <h3 className="sitename">Pole<span className="footer_card1">Grid</span></h3>
      <p>PoleGrid is your trusted partner in connecting opportunities.</p>
      <Link className="termsandcondtionslink" to='/termsandconditions'>Terms and Conditions</Link>
      <div className="social-links d-flex justify-content-center">
        {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        {/* <a href=""><i className="bi bi-skype"></i></a> */}
        {/* <a href=""><i className="bi bi-linkedin"></i></a> */}
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">PoleGrid</strong> <span>All Rights Reserved</span>
        </div>
        <div className="credits">
          
          Powered by <a href="develop-iq.org">Develop-IQ Technologies</a>
        </div>
      </div>
    </div>
  </footer>

        </div>
  )
}

export default Footer