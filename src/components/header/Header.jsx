"use client";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-semibold text-green-700">PoleGrid</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-green-700 flex items-center gap-1 font-medium">
              Registration
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 top-8 bg-white border border-gray-100 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
              <NavLink
                to="/registration/landlord"
                className="block px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-t-lg"
              >
                Landlord
              </NavLink>
              <NavLink
                to="/registration/organization"
                className="block px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-b-lg"
              >
                Organization
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-700 focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-5 animate-fadeIn">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 font-medium hover:text-green-700 transition"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="border-t pt-2 mt-2">
              <span className="text-gray-700 font-medium">Registration</span>
              <ul className="mt-2 ml-3 space-y-1">
                <li>
                  <NavLink
                    to="/registration/landlord"
                    onClick={() => setOpen(false)}
                    className="block text-gray-600 hover:text-green-700"
                  >
                    Landlord
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/registration/organization"
                    onClick={() => setOpen(false)}
                    className="block text-gray-600 hover:text-green-700"
                  >
                    Organization
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
