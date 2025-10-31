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
        "Unlock new revenue potential by leasing your land to telecom providers. We handle discovery, negotiation, and agreements — ensuring transparency and fair returns.",
      link: "/services/land-leasing",
    },
    {
      title: "Equipment Placement",
      image: StructuralDesign,
      description:
        "Maximize property value by partnering with trusted brands for equipment placement — ATMs, POS systems, or telecom devices — all with minimal effort.",
      link: "/services/equipment-placement",
    },
    {
      title: "Expert Negotiation",
      image: CAD,
      description:
        "Our professionals simplify complex negotiations between landowners and organizations — guaranteeing you get the best possible deal with full confidence.",
      link: "/services/negotiation",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden">
      {/* background accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-14">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-3">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
              Empowering landowners and businesses with innovative solutions that
              connect opportunities, simplify processes, and create real value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="text-emerald-700 font-semibold flex items-center gap-2 hover:text-emerald-900 transition-colors"
            >
              Explore All Services <i className="bi bi-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative bg-white/70 backdrop-blur-md border border-emerald-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:gap-3 transition-all duration-200"
                >
                  Learn More →
                </Link>
              </div>

              {/* Animated green glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-700 opacity-0 group-hover:opacity-10 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
