"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CAD from "../../assets/images/negotiation.webp";
import ArchitecturalDesign from "../../assets/images/land.webp";
import StructuralDesign from "../../assets/images/equipment.webp";

const Services = () => {
  const services = [
    {
      title: "Land Leasing for Towers",
      image: ArchitecturalDesign,
      description:
        "Unlock revenue potential by leasing your land to telecom companies for tower installations. We handle everything from discovery to agreement, ensuring transparency and fair value.",
      link: "/services/land-leasing",
    },
    {
      title: "Equipment Placement",
      image: StructuralDesign,
      description:
        "We connect shop and property owners with trusted partners for installing ATMs, POS systems, and telecom equipment, helping you maximize income streams with minimal effort.",
      link: "/services/equipment-placement",
    },
    {
      title: "Expert Negotiation",
      image: CAD,
      description:
        "Our experienced team simplifies complex negotiations between landowners and organizations — ensuring you get the best possible deal with confidence and ease.",
      link: "/services/negotiation",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-gray-100 overflow-hidden">
      {/* background visuals */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-14">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
              Innovative solutions designed to maximize opportunities for
              landowners, organizations, and telecom partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-800 transition-colors"
            >
              Explore All Services <i className="bi bi-chevron-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all duration-200"
                >
                  Learn More →
                </Link>
              </div>

              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
