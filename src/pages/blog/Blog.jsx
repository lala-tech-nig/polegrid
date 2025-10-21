import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import usePageTracking from "../../usePageTracking";
import BlogGrid from "./BlogGrid"
import IntroSection from "./IntroSection";
import './blog.css'

const Blog = () => {
  usePageTracking();
  return (
    <div>
      <Header />
      <IntroSection />
      <BlogGrid />
      <Footer />
    </div>
  )
}

export default Blog