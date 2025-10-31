"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Pay = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    const { name, email, phonenumber } = formData;

    if (!name || !email || !phonenumber) {
      toast.error("Please fill in all fields!");
      return;
    }

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-b9bce3b0dad14eece267381ca5e6de08-X",
      tx_ref: `tx-${Date.now()}`,
      amount: 15499,
      currency: "NGN",
      customer: { email, phonenumber, name },
      callback: async (data) => {
        toast.info("Verifying payment...");
        try {
          const res = await axios.post("https://<your-verification-url>", {
            transactionId: data.transaction_id,
          });

          if (res.data.message === "Payment verified successfully") {
            toast.success("Payment successful 🎉");
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (error) {
          toast.error("An error occurred during verification.");
        }
      },
      onclose: () => toast.info("Payment window closed."),
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
      <ToastContainer />
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            Consultation Registration
          </h2>
          <p className="text-gray-600">
            Complete your one-time consultation payment to continue.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-green-100 p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side — Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-green-700">
                  One-Time Payment
                </h3>
                <p className="text-gray-600 mt-2">
                  Gain access to expert consultation and tailored support.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                <h4 className="text-3xl font-bold text-green-700">₦15,499</h4>
                <p className="text-gray-500 text-sm">Flat rate / service</p>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handlePayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md"
              >
                Pay ₦15,499
              </motion.button>
            </div>

            {/* Right Side — Form */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Pay;
