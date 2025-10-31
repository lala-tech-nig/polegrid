"use client";
import React from "react";
import { Link } from "react-router-dom";
import couser2 from "../../assets/images/mast2.webp";

const Cta = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={couser2}
          alt="Telecom mast"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-emerald-700/80"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug drop-shadow-lg">
          With{" "}
          <span className="text-emerald-300">PoleGrid</span>, we connect
          landowners with telecom companies seeking locations for network tower
          installations.
        </h3>

        <p className="text-gray-200 text-lg mb-10">
          Subscribe today and get access to our professional consultation
          service.
        </p>

        <Link
          to="/registration/landlord"
          className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-500 hover:shadow-emerald-400/50 transition-all duration-300"
        >
          Register Now
          <span className="absolute inset-0 rounded-full ring-2 ring-emerald-400/50 animate-pulse pointer-events-none"></span>
        </Link>
      </div>

      {/* Decorative glow elements */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-green-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Cta;
