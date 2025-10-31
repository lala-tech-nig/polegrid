import { motion } from "framer-motion";
import CAD from "../../assets/images/negotiation.webp";
import ArchitecturalDesign from "../../assets/images/land.webp";
import StructuralDesign from "../../assets/images/equipment.webp";
import Property from "../../assets/images/property.webp";
import Legal from "../../assets/images/legal.jpeg";
import Atm from "../../assets/images/atm.jpg";

const services = [
  {
    image: ArchitecturalDesign,
    title: "Land Leasing for Towers",
    desc: "We connect landowners with telecom companies seeking locations for network tower installations. Our platform ensures a seamless process from listing to agreement finalization.",
  },
  {
    image: StructuralDesign,
    title: "Equipment Placement Services",
    desc: "Shop owners can find reliable providers for essential equipment such as ATMs and money machines. Boost your business with the right tools.",
  },
  {
    image: CAD,
    title: "Negotiation Support",
    desc: "Simplify the negotiation process with our built-in tools and expert guidance.",
  },
  {
    image: Legal,
    title: "Legal and Technical Resources",
    desc: "Access the support you need to navigate contracts and technical requirements confidently.",
  },
  {
    image: Property,
    title: "Property Management",
    desc: "Managing rental properties on behalf of landlords, including tenant communications, maintenance, rent collection, and property upkeep.",
  },
  {
    image: Atm,
    title: "ATM Installation",
    desc: "We connect banks, businesses, and property owners with fast, secure ATM installation—covering everything from setup to maintenance.",
  },
];

const ServiceSections = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* subtle gradient background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,168,89,0.1),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Our <span className="text-green-600">Services</span>
        </motion.h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Explore a range of professional services designed to make property and
          infrastructure management seamless and transparent.
        </p>
      </div>

      {/* Grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-green-100 hover:shadow-2xl transition-all group relative"
          >
            <div className="overflow-hidden h-52">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* accent line animation */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSections;
