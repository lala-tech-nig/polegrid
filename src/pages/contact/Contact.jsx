import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pay from "../registration/Pay";
import Form from "./Form";
import IntroSection from "./IntroSection";
import './contact.css'
import usePageTracking from "../../usePageTracking"

const Contact = () => {
  usePageTracking();
  return (
    <div>
      <Header />
      <IntroSection />
      <Form />
      <Pay />
      <Footer />
    </div>
  )
}

export default Contact