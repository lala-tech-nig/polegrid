import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const PaymentPage = () => {
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

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    const { name, email, phonenumber } = formData;

    if (!name || !email || !phonenumber) {
      toast.error("Please fill in all the fields.");
      return;
    }

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK-012ad42fcbf7c66468ebd72625a04ad3-X", // Replace with your public key
      tx_ref: `tx-${Date.now()}`,
      amount: 15499, // Amount to be paid in Naira
      currency: "NGN",
      customer: {
        email,
        phonenumber,
        name,
      },
      callback: async (data) => {
        toast.info("Verifying payment...");
        try {
          const response = await axios.post(
            "https://<your-cloud-function-url>/verifyPayment", // Replace with your Firebase function URL
            { transactionId: data.transaction_id }
          );

          if (response.data.message === "Payment verified successfully") {
            toast.success("Payment successful and verified!");
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          toast.error("An error occurred during verification.");
        }
      },
      onclose: () => {
        toast.info("Payment process was closed.");
      },
    });
  };

  return (
    <div>
      <ToastContainer />
      <h1>Make a Payment</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Pay ₦15,499
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
