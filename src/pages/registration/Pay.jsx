import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

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
      public_key: "FLWPUBK_TEST-b9bce3b0dad14eece267381ca5e6de08-X", // Replace with your public key
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
    
    <section id="buy-tickets" className="buy-tickets section light-background">

    <ToastContainer />
    <div className="container section-title" data-aos="fade-up">
      <h2>Consulation Registration Fee<br /></h2>
      {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
    </div>

    <div className="container">

      <div className="row gy-4 pricing-item featured mt-4" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <h3>One Time Payment<br /></h3>
        </div>
        <div className="col-lg-3 d-flex align-  items-center justify-content-center">
          <h4><sup>#</sup>15,500<span> / service</span></h4>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <form className="paymentform">

        <div className="paymentformchild">
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

        <div className="paymentformchild"> 
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

        <div className="paymentformchild">
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
        
      </form>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <div className="text-center">
            {/* <a href="#" className="buy-btn">Buy Now</a> */}
            <button className="buy-btn" type="button" onClick={handlePayment}>
          Pay ₦15,499
        </button>
          </div>
        </div>
      </div>

     
    </div>

  </section>
  )
}

export default Pay