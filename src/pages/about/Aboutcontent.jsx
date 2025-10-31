import React from "react";
import { motion } from "framer-motion";
import AboutcontentImg from "../../assets/images/mast.jpg";
import usePageTracking from "../../usePageTracking";

const Aboutcontent = () => {
  usePageTracking();

  return (
    <section className="relative bg-gradient-to-b from-white via-green-50/20 to-white py-24 overflow-hidden">
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_60%)]"></div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
        >
          <img
            src={AboutcontentImg}
            alt="About PoleGrid"
            className="w-full h-[460px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-700/30 to-transparent"></div>

          {/* Floating caption */}
          <div className="absolute bottom-6 left-6 text-white">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="uppercase tracking-wide text-xs font-semibold opacity-75"
            >
              PoleGrid Solutions
            </motion.h4>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-bold leading-tight"
            >
              Connecting Growth <br /> & Development
            </motion.h2>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">PoleGrid?</span>
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            At PoleGrid Solutions, we specialize in creating <b>connections that drive growth and development</b>. 
            Our expertise spans across three strategic domains that strengthen both businesses and communities:
          </p>

          {/* Services List */}
          <div className="space-y-6 text-gray-700">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-white/70 backdrop-blur-lg border border-green-100 shadow-sm hover:shadow-md transition"
            >
              <p>
                <b className="text-green-600">Telecom Site Acquisition:</b> We bridge the gap between landowners and telecom operators, 
                ensuring smooth site acquisition for modern network infrastructures.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-white/70 backdrop-blur-lg border border-green-100 shadow-sm hover:shadow-md transition"
            >
              <p>
                <b className="text-green-600">Financial Services Connectivity:</b> We link local businesses with financial institutions 
                for ATM placements and fintech solutions that boost economic accessibility.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-white/70 backdrop-blur-lg border border-green-100 shadow-sm hover:shadow-md transition"
            >
              <p>
                <b className="text-green-600">Real Estate Services:</b> We empower individuals and organizations to buy, sell, 
                and manage properties with precision and confidence.
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="mt-10 bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 shadow-md p-8 hover:shadow-lg transition">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="bi bi-check-circle text-green-600 text-2xl"></i>
                <p>
                  <b>Our Vision:</b> To become the leading platform connecting property, telecom, and finance sectors 
                  for sustainable growth across Africa.
                </p>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-check-circle text-green-600 text-2xl"></i>
                <p>
                  <b>Our Mission:</b> To empower landowners, telecom providers, and businesses with efficient, 
                  tech-driven, and transparent connectivity solutions.
                </p>
              </li>
            </ul>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-gray-700 leading-relaxed"
          >
            As a trusted connectivity partner, we unite landowners, telecom companies, 
            and financial institutions with a shared goal — to build reliable and future-ready infrastructures. 
            Our dedicated team ensures every project is executed with innovation, integrity, and impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutcontent;
