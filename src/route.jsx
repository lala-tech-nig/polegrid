import { createHashRouter} from "react-router-dom";

// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// paths
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Property from "./pages/property/Property";
import Signin from "./auth/SignIn";
import Signup from "./auth/SignUp";
import BlogAdmin from "./admin/blog/Blog";
import Service from "./pages/services/Service";
import BlogDetails from "./pages/blog/blogDetails/BlogDetails";
import GalleryAdmin from "./admin/gallery/GalleryAdmin";
import TestimonyAdmin from "./admin/testimony/TestimonyAdmin";
import PropertyAdmin from "./admin/property/PropertyAdmin";
import Gallery from "./pages/gallery/Gallery";
import PropertyDetails from "./pages/property/propertyDetails.jsx/PropertyDetails";
import Testimony from "./pages/testimony/Testimony";
import Registration from "./pages/registration/Registration";
import TermsandConditions from "./pages/termsandcondtions/TermsandConditions";
import DataDisplayPage from "./components/regdata/DataDisplayPage";
import RegData from "./components/regdata/RegData";
import Organiation from "./pages/registration/organization/Organiation";
import OrgainizationAdmin from "./admin/organization/OrgainizationAdmin";
import LandlordAdmin from "./admin/landlord/LandlordAdmin";
import Privacypolicy from "./pages/privacy/Privacypolicy";
import RefundPolicy from "./pages/refundpolicy/RefundPolicy";

export const route = createHashRouter([
    {
        path: "/",
        element: <Home />
      },
         {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/properties',
        element: <Property />
      },
      {
        path: '/termsandconditions',
        element: <TermsandConditions />
      },
      {
        path: '/auth/signin',
        element: <Signin />
      },
      {
        path: '/auth/signup',
        element: <Signup />
      },
      {
        path:'/services',
        element: <Service />
      },
      {
        path: '/blog/blog-details/:id',
        element: <BlogDetails />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/properties/properties-details/:id',
        element: <PropertyDetails />
      },
      {
        path: '/testimony',
        element: <Testimony />
      },
      {
        path: '/privacy-policy',
        element: <Privacypolicy />
      },
      {
        path: '/refund-policy',
        element: <RefundPolicy />
      },

      // Admin 
      {
        path: '/admin/Blog',
        element: <BlogAdmin />
      },
      {
        path: '/admin/organization',
        element: <OrgainizationAdmin />
      },
      {
        path: '/admin/landlord',
        element: <LandlordAdmin />
      },
      {
        path: '/admin/gallery',
        element: <GalleryAdmin />
      },
      {
        path: '/admin/testimony',
        element: <TestimonyAdmin />
      },
      {
        path: '/admin/property',
        element: <PropertyAdmin />
      },
      {
        path: '/registration/landlord',
        element: <Registration />
      },
      {
        path: '/registration/organization',
        element: <Organiation />
      },
      {
        path: '/data-display',
        element: <RegData />
      }
     
]);