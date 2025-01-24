
import Images from './Images'
import Header from '../../components/header/Header'
import IntroSection from './IntroSection'
import Footer from '../../components/footer/Footer'

const Gallery = () => {
  return (
    <div>
      <Header />
      <IntroSection />
        <Images />
        <Footer />
    </div>
  )
}

export default Gallery