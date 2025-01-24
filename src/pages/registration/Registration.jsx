import Header from "../../components/header/Header";
import './registration.css';
import IntroSection from './Introsection';
import Form from "./Form";
import Footer from "../../components/footer/Footer";
import Registrationform from "./Registrationform";
import Paymentservice from "./Paymentservice";
import Pay from "./Pay";

const Registration = () => {
  return (
    <div>
        <Header />
        <IntroSection />
        {/* <Paymentservice /> */}
        {/* <Pay /> */}
        {/* <Form /> */}
        <Registrationform />
        <Footer />
    </div>
  )
}

export default Registration