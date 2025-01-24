import React, { useState } from "react";
import { db, storage } from "../../firebase/Firebase"; // Adjust the import based on your file structure
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    state: "",
    localgovernment: "",
    nearestbustop: "",
    serviceType: "telecom",
  });
  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prev) => [...prev, ...files].slice(0, 4)); // Limit to 4 photos
  };

  const deletePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (photos.length === 0) {
      toast.error("Please upload at least one photo.");
      return;
    }

    setIsSubmitting(true); // Disable the button and show ongoing feedback
    toast.info("Registering...");

    try {
      // Upload photos and get URLs
      const photoUrls = await Promise.all(
        photos.map(async (photo) => {
          const storageRef = ref(storage, `photos/${photo.name}`);
          const uploadTask = await uploadBytesResumable(storageRef, photo);
          return await getDownloadURL(uploadTask.ref);
        })
      );

      // Save form data to Firestore
      await addDoc(collection(db, "registrations"), {
        ...formData,
        photos: photoUrls,
      });

      // Show success toast
      toast.success("Registration successful!");

      // Reset form data and photos
      setFormData({
        name: "",
        email: "",
        number: "",
        location: "",
        state: "",
        nearestbustop: "",
        localgovernment: "",
        serviceType: "telecom",
      });
      setPhotos([]);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <section id="get-started" className="get-started section-bg">
      <div className="container">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label>Email (optional):</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Number:</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label>Address:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Nearest Bus stop:</label>
              <input
                type="text"
                name="nearestbustop"
                value={formData.nearestbustop}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label>Local Government:</label>
              <input
                type="text"
                name="localgovernment"
                value={formData.localgovernment}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label>Service Type:</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="telecom">Telecom Service</option>
                <option value="moneyMachine">Money Machine</option>
              </select>
            </div>
          </div>

          <div className="browerseFile">
            <label>Upload your photo and other supporting document (up to 4):</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {photos.map((photo, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Preview ${index}`}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <button
                    type="button"
                    onClick={() => deletePhoto(index)}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="QuoteBtn">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
