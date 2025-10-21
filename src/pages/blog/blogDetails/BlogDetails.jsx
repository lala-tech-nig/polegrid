import FetchBlogDetails from "./FetchBlogDetails";
import '../blog.css'
import IntroSection from "./IntroSection";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import usePageTracking from "../../../usePageTracking"


const BlogDetails = () => {
  usePageTracking();
  return (
    <div>
        <Header />
        <IntroSection />
        <FetchBlogDetails />
        <Footer />
    </div>
  )
}

export default BlogDetails