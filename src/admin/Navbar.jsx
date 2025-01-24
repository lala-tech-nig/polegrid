
import '../components/header/Header';
import './admin.css';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import{ useState } from "react";
import Logout from '../auth/Logout';


// eslint-disable-next-line react/prop-types
const Navbar = ({Toggle}) => {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const { currentUser } = useContext(AuthContext);
  
    const navToggle = () => {
      active === "nav__menu"
        ? setActive("nav__menu nav__active")
        : setActive("nav__menu");
  
        //ToggleIcon
  
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
    };

    return (
        <div>
        <nav className="navbaradmin navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid nav-admin">
                <a className="navbar-brand d-none d-md-block text-white" href="/">Dashboard</a>
                <a className="navbar-brand sidebarclose d-block d-md-none text-white" onClick={Toggle}><i className="bi bi-justify"></i></a>
                <div className=" navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                   <Logout />
                    
                    </ul>
                 
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
