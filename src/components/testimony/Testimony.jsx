"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Timage1 from "../../assets/images/timage1.jpg";
import Timage2 from "../../assets/images/timage2.jpg";
import Timage3 from "../../assets/images/timage3.jpg";
import Timage4 from "../../assets/images/timage4.jpg";
import Timage5 from "../../assets/images/timage5.jpg";

const testimonials = [
  {
    name: "High Chief Okoro",
    role: "Land Owner",
    image: Timage1,
    quote:
      "We've seen significant growth in our community since partnering with PoleGrid Solutions. They're the perfect bridge between landowners and telecoms companies!",
  },
  {
    name: "Mrs. Kemi Ademola",
    role: "Land Owner (Lagos State)",
    image: Timage2,
    quote:
      "PoleGrid Solutions has been instrumental in connecting us with reliable financial institutions, increasing our revenue streams.",
  },
  {
    name: "Mrs. Deborah Alasin",
    role: "Land Owner (Ekiti State)",
    image: Timage3,
    quote:
      "Their customer service is exceptional! PoleGrid Solutions truly prioritizes their clients' needs.",
  },
  {
    name: "Alhaja Abdullahi Zainab",
    role: "Land Owner (Kano State)",
    image: Timage4,
    quote:
      "I was skeptical at first, but PoleGrid Solutions has proven to be a valuable partner in connecting us with telecom companies.",
  },
  {
    name: "Engr. Bishop Chris O.",
    role: "Land Owner (Edo State)",
    image: Timage5,
    quote:
      "PoleGrid Solutions has helped us navigate the complex telecoms landscape with ease. We're grateful for their expertise!",
  },
];

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/30 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-3">
          What People Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Hear from landowners and clients across Nigeria who have partnered
          with{" "}
          <span className="text-emerald-600 font-semibold">
            PoleGrid Solutions
          </span>
          .
        </p>
      </motion.div>

      {/* Testimonials Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-100"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  <span className="text-emerald-600 text-2xl font-serif mr-1">
                    “
                  </span>
                  {item.quote}
                  <span className="text-emerald-600 text-2xl font-serif ml-1">
                    ”
                  </span>
                </p>

                {/* Star Rating */}
                <div className="flex mt-4 text-yellow-400">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-lg"></i>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimony;
