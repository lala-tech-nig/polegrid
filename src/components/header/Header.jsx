import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './header.css';
import openIcon from '../../assets/icons/icons8-menu-24.png';
import closeIcon from '../../assets/icons/icons8-close-24.png';
import Logo from '../../assets/images/logo.png';

const Header = ({ Toggle }) => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');


  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");

    // ToggleIcon
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  };

  return (
    <header id='header' className="fixed-top navbar-expand-lg d-flex align-items-center">
    <div className="container d-flex align-items-center">
    <div className='me-auto logo-menuflex'>
     <NavLink to="/"><img src={ Logo } className="logoimg" alt="Daytopia logo"/></NavLink>
     {/* <h2>PoleGrid</h2> */}
    </div>
    <nav id="navbar" className="navbar order-last order-md-0">
    <ul className={active}>
    <li>
    <NavLink className="nav-link" to="/">Home</NavLink>
    </li>

    <li className="dropdown"><NavLink to="/about"><span>About</span> </NavLink>
    </li>

    <li className="dropdown"><NavLink to="/services"><span>Service</span></NavLink>
    </li> 
    
    <li>
    <NavLink className="nav-link " to="/contact">Contact</NavLink>
    </li>

    <li>
    <NavLink className="nav-link request_a_prayer" to="/registration">Registration</NavLink>
    </li>
    
    </ul>
    <div onClick={navToggle} className={toggleIcon}>
    <img src={toggleIcon === 'nav__toggler' ? openIcon : closeIcon} alt="Toggle Icon" />
    </div>
    </nav>
    <div>
    {/* Conditionally render login or sign up / sign in based on user authentication status */}
    <div>
   
  </div>
  
  </div>
    </div>
    </header>
  );
};

export default Header;