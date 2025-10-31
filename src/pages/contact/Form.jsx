import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import usePageTracking from "../../usePageTracking";

const Form = () => {
  usePageTracking();
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_r9ve7v8",
        "template_6i5qr4s",
        form.current,
        "WbtPBxdXq5qitkKNu"
      )
      .then(() => {
        form.current.reset();
        setButtonText("Sent ✅");
        setTimeout(() => setButtonText("Send Message"), 2000);
      })
      .catch(() => {
        setButtonText("Send Message");
      });
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_60%)]"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-10 border border-green-100"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a <span className="text-green-600">Message</span>
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition-all"
                  />
                  <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-focus:text-green-600 peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition-all"
                  />
                  <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-focus:text-green-600 peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs">
                    Your Email
                  </label>
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition-all"
                />
                <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-focus:text-green-600 peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs">
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-green-500 focus:ring-1 focus:ring-green-400 outline-none transition-all resize-none"
                ></textarea>
                <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-focus:text-green-600 peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs">
                  Message
                </label>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {buttonText}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-gray-700"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Get in <span className="text-green-600">Touch</span>
              </h3>
              <p className="text-gray-600">
                Have a question, proposal, or partnership idea? We’d love to hear from you.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">polegrid01@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+234 701 816 2166</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Block 4A, Ajimo Logere, Pinnacle Horizon Estate, Ibeju Lekki,
                    <br /> Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">
                  <i className="bi bi-share"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Follow Us</h4>
                  <div className="flex gap-4 text-green-600 mt-1">
                    <a
                      href="https://x.com/polegrid"
                      target="_blank"
                      className="hover:text-green-700"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/_polegrid/"
                      target="_blank"
                      className="hover:text-green-700"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
