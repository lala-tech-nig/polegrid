"use client";
import PartnersImg from "../../assets/images/partners.webp";
import Africa from "../../assets/images/africa.jpg";

const Partners = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/20 overflow-hidden">
      {/* Decorative blurred auras */}
      <div className="absolute top-[-8rem] left-[-6rem] w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10rem] right-[-6rem] w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={Africa}
            alt="Africa map"
            className="w-full h-auto rounded-3xl shadow-xl transform transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 leading-tight mb-4">
              Strongly Backed by <br /> <span className="text-emerald-600">Global Partners</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are proudly supported by leading telecom companies, tower providers, 
              financial institutions, and real estate developers across Nigeria — 
              delivering expert site acquisition services that drive measurable business success.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-2">
              Trusted by Leading Brands
            </h3>
            <p className="text-gray-700 font-medium">Our Trusted Record</p>
            <p className="text-gray-600 mt-2">
              With over <span className="font-bold text-emerald-700">500 successful deals</span>, 
              our experienced team has built a reputation for delivering efficient, 
              cost-effective, and compliant solutions tailored to meet diverse client needs.
            </p>
          </div>

          {/* Partner logos or image (optional) */}
          <div className="flex items-center gap-6 flex-wrap mt-10">
            <img
              src={PartnersImg}
              alt="Partner brands"
              className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
