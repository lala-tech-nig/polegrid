import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Testimony from "../../components/testimony/Testimony"
import Clients from "./Clients";
import Cta from "./Cta";
import Hero from "./hero";
import './home.css';
import Homeabout from "./Homeabout";
import Properties from "./Properties";
import Services from "./Services";
import ServiceTest from "./ServiceTest";


const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        {/* <Homeabout /> */}
        <ServiceTest />
        <Clients />
        {/* <Properties /> */}
        <Testimony />
        <Cta />
        <Faq />
        <Footer />
        </div>
  )
}

export default Home