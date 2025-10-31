"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const brandColor = "#00A859";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    state: "",
    localgovernment: "",
    nearestbustop: "",
    serviceType: "telecom",
    sex: "male",
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePhotoUpload = (e) => setPhotoFile(e.target.files[0]);
  const handleDocumentsUpload = (e) => setDocumentFiles(Array.from(e.target.files).slice(0, 4));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photoFile) return toast.error("Please upload a personal photo (ID or passport).");
    if (documentFiles.length === 0) return toast.error("Please upload at least one supporting document.");

    setIsSubmitting(true);
    toast.info("Submitting...");

    try {
      const photoRef = ref(storage, `photos/${photoFile.name}`);
      const photoUpload = await uploadBytesResumable(photoRef, photoFile);
      const photoUrl = await getDownloadURL(photoUpload.ref);

      const documentUrls = await Promise.all(
        documentFiles.map(async (doc) => {
          const docRef = ref(storage, `documents/${doc.name}`);
          const docUpload = await uploadBytesResumable(docRef, doc);
          return await getDownloadURL(docUpload.ref);
        })
      );

      await addDoc(collection(db, "landlordregistrations"), {
        ...formData,
        photo: photoUrl,
        documents: documentUrls,
      });

      toast.success("🎉 Registration successful!");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);

      setFormData({
        name: "",
        email: "",
        number: "",
        location: "",
        state: "",
        localgovernment: "",
        nearestbustop: "",
        serviceType: "telecom",
        sex: "male",
      });
      setPhotoFile(null);
      setDocumentFiles([]);
      setTimeout(() => navigate("/contact"), 2500);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4 py-12">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <ToastContainer />

      <motion.div
        className="w-full max-w-2xl bg-white/80 backdrop-blur-lg border border-green-100 shadow-2xl rounded-3xl p-8 md:p-10 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: brandColor }}>
            Landlord Registration
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Fill your details correctly to get verified.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { label: "Full Name", name: "name", type: "text", required: true },
            { label: "Email (optional)", name: "email", type: "email" },
            { label: "Phone Number", name: "number", type: "number", required: true },
            { label: "Property Address", name: "location", type: "text", required: true },
            { label: "State", name: "state", type: "text", required: true },
            { label: "Local Government", name: "localgovernment", type: "text", required: true },
            { label: "Nearest Bus Stop", name: "nearestbustop", type: "text", required: true },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-sm text-gray-600 font-medium mb-1">{field.label}</label>
              <input
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
              />
            </div>
          ))}

          {/* Service Type */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-1">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option value="telecom">Tower</option>
              <option value="moneyMachine">ATM Installation</option>
            </select>
          </div>

          {/* Sex */}
          <div>
            <label className="block text-sm text-gray-600 font-medium mb-1">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Photo Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 font-medium mb-1">
              Upload Photo <small className="text-gray-400">(Valid ID or Passport)</small>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full mt-1 text-sm text-gray-500"
            />
            {photoFile && (
              <div className="flex items-center mt-3">
                <img
                  src={URL.createObjectURL(photoFile)}
                  alt="preview"
                  className="w-16 h-16 rounded-md object-cover border border-gray-200 shadow-sm"
                />
                <p className="ml-3 text-xs text-gray-500 truncate">{photoFile.name}</p>
              </div>
            )}
          </div>

          {/* Documents Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 font-medium mb-1">
              Upload Supporting Documents{" "}
              <small className="text-gray-400">(Utility bill, deed, or land photo)</small>
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleDocumentsUpload}
              className="w-full mt-1 text-sm text-gray-500"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {documentFiles.map((doc, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(doc)}
                  alt={`doc-${i}`}
                  className="w-16 h-16 rounded-md object-cover border border-gray-200 shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="md:col-span-2 mt-6 w-full py-3 text-white font-semibold rounded-xl shadow-lg transition-all bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
