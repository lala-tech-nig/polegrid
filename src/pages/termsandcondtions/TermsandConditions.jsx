"use client";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";

const TermsandConditions = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Animated Page Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
          >
            Terms and Conditions
          </motion.h1>

          {/* Terms Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              PoleGrid Solutions Terms of Service
            </h2>
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              Welcome to <b>Polegrid Solutions</b>, registered in Nigeria and verified by
              the <b>Special Control Units Against Money Laundering (SCUML)</b>.  
              By using our platform, you agree to comply with these Terms of Service.
              Please read them carefully.
            </p>

            {/* Terms List */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  1. Introduction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions (“Terms”) govern the use of Polegrid
                  Solutions' services (“Services”) and website (“Website”).  
                  By registering for our Services, you (“Client”) agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2. Definitions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  - <b>Property:</b> Land or site registered by the Client for our Services. <br />
                  - <b>Service:</b> Telecom infrastructure, ATM installation, and related services. <br />
                  - <b>Service Provider:</b> Telecom, tower, and financial institutions working with Polegrid.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  3. Registration and Payment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients must provide accurate registration details.  
                  A one-time consultation and registration fee of <b>₦15,500</b> applies and is
                  non-refundable except as stated otherwise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  4. Service Provision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Polegrid Solutions facilitates service installation and access for maintenance.  
                  The company reserves the right to modify or terminate services at any time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  5. Client Obligations
                </h3>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                  <li>Comply with all applicable laws.</li>
                  <li>Ensure the property is suitable for infrastructure installation.</li>
                  <li>Notify Polegrid Solutions of any property or service changes.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  6. Liability and Indemnification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Polegrid shall not be liable for damages except in cases of proven negligence.  
                  Clients agree to indemnify Polegrid against any claims resulting from a breach of these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  7. Confidentiality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Both parties agree to maintain confidentiality of shared data and information.  
                  This obligation continues after the termination of services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  8. Termination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Polegrid Solutions may terminate the agreement at any time, with or without cause.  
                  Upon termination, the Client must stop using the services immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  9. Governing Law
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-center mt-12 text-gray-500"
          >
            <p>
              Need clarification?{" "}
              <a
                href="mailto:support@polegrid.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsandConditions;
