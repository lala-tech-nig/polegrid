const functions = require("firebase-functions");
const axios = require("axios");

exports.verifyPayment = functions.https.onRequest(async (req, res) => {
  const { transactionId } = req.body;

  if (!transactionId) {
    return res.status(400).send({ message: "Transaction ID is required" });
  }

  const SECRET_KEY = "FLWSECK_TEST-f8f978389783efe13c2b1514089e0276-X"; // Replace with your secret key

  try {
    const response = await axios.get(
      `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
      {
        headers: {
          Authorization: `Bearer ${SECRET_KEY}`,
        },
      }
    );

    if (response.data.status === "success") {
      return res.status(200).send({
        message: "Payment verified successfully",
        data: response.data.data,
      });
    } else {
      return res.status(400).send({ message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
});
