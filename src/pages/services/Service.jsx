import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroSection from "./IntroSection";
import ServiceSections from "./ServiceSections";
import './service.css';


const Service = () => {
  return (
    <div>
        <Header />
        <IntroSection />
        <ServiceSections />
        <Footer />
    </div>
  )
}

export default Service