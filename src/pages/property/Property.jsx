import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import IntorSection from "./IntorSection"
import PropertyGrid from "./PropertyGrid"
import './property.css'


const Property = () => {
  return (
   <div>
     <Header />
     <IntorSection />
     <PropertyGrid />
     <Footer />
   </div>
  )
}

export default Property