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
import ArchitecturalDesign from "./pages/services/serviceDetails/architecture/ArchitecturalDesign";
import CADTraning from "./pages/services/serviceDetails/cad/CADTraning";
import ProjectSupervision from "./pages/services/serviceDetails/projectsupervision/ProjectSupervision";
import EngineeringBills from "./pages/services/serviceDetails/enginering/EngineeringBills";
import StructuralDesign from "./pages/services/serviceDetails/structural/StructuralDesign";
import BlogDetails from "./pages/blog/blogDetails/BlogDetails";
import GalleryAdmin from "./admin/gallery/GalleryAdmin";
import TestimonyAdmin from "./admin/testimony/TestimonyAdmin";
import PropertyAdmin from "./admin/property/PropertyAdmin";
import Gallery from "./pages/gallery/Gallery";
import PropertyDetails from "./pages/property/propertyDetails.jsx/PropertyDetails";
import Testimony from "./pages/testimony/Testimony";
import Registration from "./pages/registration/Registration";

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
        path: '/services/architectural-design',
        element: <ArchitecturalDesign />
      },
      {
        path: '/services/cad-tranning',
        element: <CADTraning />
      },
      {
        path: '/services/project-supervision',
        element: <ProjectSupervision />
      },
      {
        path: '/services/engineering-bils',
        element: <EngineeringBills />
      },
      {
        path: '/services/structural-design',
        element: <StructuralDesign />
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

      // Admin 
      {
        path: '/admin/Blog',
        element: <BlogAdmin />
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
        path: '/registration',
        element: <Registration />
      }
     
]);