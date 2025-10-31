import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,168,89,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo & Description */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-white tracking-tight mb-3"
        >
          Pole<span className="text-green-500">Grid</span>
        </motion.h3>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
          PoleGrid is <span className="text-green-400 font-medium">SCUML certified</span>,
          ensuring transparency, security, and integrity in our services.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm mb-10">
          <Link to="/termsandconditions" className="text-gray-300 hover:text-green-400 transition">
            Terms & Conditions
          </Link>
          <span className="text-gray-500">•</span>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-green-400 transition">
            Privacy Policy
          </Link>
          <span className="text-gray-500">•</span>
          <Link to="/refund-policy" className="text-gray-300 hover:text-green-400 transition">
            Refund Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <motion.a
            href="https://x.com/polegrid"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <i className="bi bi-twitter text-2xl"></i>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/_polegrid/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </motion.a>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700/50 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">PoleGrid</span>. All Rights Reserved.
        </p>

        {/* Optional credits */}
        {/* <p className="text-gray-600 text-xs mt-1">
          Powered by <a href="https://develop-iq.org" className="text-green-400 hover:underline">Develop-IQ Technologies</a>
        </p> */}
      </div>
    </footer>
  );
}
