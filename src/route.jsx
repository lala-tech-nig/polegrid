// routes.jsx
import { createHashRouter } from "react-router-dom";

// Layout
import RootLayout from "./pages/RootLayout";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Property from "./pages/property/Property";
import Signin from "./auth/SignIn";
import Signup from "./auth/SignUp";
import Service from "./pages/services/Service";
import BlogDetails from "./pages/blog/blogDetails/BlogDetails";
import Gallery from "./pages/gallery/Gallery";
import PropertyDetails from "./pages/property/propertyDetails.jsx/PropertyDetails";
import Testimony from "./pages/testimony/Testimony";
import Registration from "./pages/registration/Registration";
import TermsandConditions from "./pages/termsandcondtions/TermsandConditions";
import Privacypolicy from "./pages/privacy/Privacypolicy";
import RefundPolicy from "./pages/refundpolicy/RefundPolicy";
import Organiation from "./pages/registration/organization/Organiation";
import DataDisplayPage from "./components/regdata/DataDisplayPage";
import RegData from "./components/regdata/RegData";

// Admin Pages
import BlogAdmin from "./admin/blog/Blog";
import GalleryAdmin from "./admin/gallery/GalleryAdmin";
import TestimonyAdmin from "./admin/testimony/TestimonyAdmin";
import PropertyAdmin from "./admin/property/PropertyAdmin";
import OrgainizationAdmin from "./admin/organization/OrgainizationAdmin";
import LandlordAdmin from "./admin/landlord/LandlordAdmin";

// Define the route tree
export const route = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/blog-details/:id", element: <BlogDetails /> },
      { path: "/properties", element: <Property /> },
      { path: "/properties/properties-details/:id", element: <PropertyDetails /> },
      { path: "/services", element: <Service /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/testimony", element: <Testimony /> },
      { path: "/termsandconditions", element: <TermsandConditions /> },
      { path: "/privacy-policy", element: <Privacypolicy /> },
      { path: "/refund-policy", element: <RefundPolicy /> },
      { path: "/auth/signin", element: <Signin /> },
      { path: "/auth/signup", element: <Signup /> },
      { path: "/registration/landlord", element: <Registration /> },
      { path: "/registration/organization", element: <Organiation /> },
      { path: "/data-display", element: <RegData /> },

      // Admin
      { path: "/admin/blog", element: <BlogAdmin /> },
      { path: "/admin/organization", element: <OrgainizationAdmin /> },
      { path: "/admin/landlord", element: <LandlordAdmin /> },
      { path: "/admin/gallery", element: <GalleryAdmin /> },
      { path: "/admin/testimony", element: <TestimonyAdmin /> },
      { path: "/admin/property", element: <PropertyAdmin /> }
    ]
  }
]);
export default route;