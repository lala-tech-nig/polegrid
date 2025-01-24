import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Aboutcontent from "./Aboutcontent";
import Aboutus from "./Aboutus";
import IntroSection from "./IntroSection";
import Team from "./Team";
import './about.css'


const About = () => {
  return (
    <div>
        <Header />
        <IntroSection />
        <Aboutcontent />
        <Faq />
        <Footer />
    </div>
  )
}
  
export default About