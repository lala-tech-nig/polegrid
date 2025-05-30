import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { db, storage } from "../../firebase/Firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const handleDocumentsUpload = (e) => {
    const files = Array.from(e.target.files);
    setDocumentFiles(files.slice(0, 4));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photoFile) {
      toast.error("Please upload a personal photo (ID or passport).");
      return;
    }

    if (documentFiles.length === 0) {
      toast.error("Please upload at least one supporting document.");
      return;
    }

    setIsSubmitting(true);
    toast.info("Registering...");

    try {
      // Upload photo
      const photoRef = ref(storage, `photos/${photoFile.name}`);
      const photoUpload = await uploadBytesResumable(photoRef, photoFile);
      const photoUrl = await getDownloadURL(photoUpload.ref);

      // Upload documents
      const documentUrls = await Promise.all(
        documentFiles.map(async (doc) => {
          const docRef = ref(storage, `documents/${doc.name}`);
          const docUpload = await uploadBytesResumable(docRef, doc);
          return await getDownloadURL(docUpload.ref);
        })
      );

      // Save to Firestore
      await addDoc(collection(db, "landlordregistrations"), {
        ...formData,
        photo: photoUrl,
        documents: documentUrls,
      });

      toast.success("Registration successful!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        number: "",
        location: "",
        state: "",
        nearestbustop: "",
        localgovernment: "",
        serviceType: "telecom",
        sex: "male",
      });
      setPhotoFile(null);
      setDocumentFiles([]);

      setTimeout(() => {
        navigate("/contact");
      }, 2000);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="formFlex_ii">
              <label>Email (optional):</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Phone Number:</label>
              <input type="number" name="number" value={formData.number} onChange={handleChange} required />
            </div>

            <div className="formFlex_ii">
              <label>Property Address:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Nearest Bus stop:</label>
              <input type="text" name="nearestbustop" value={formData.nearestbustop} onChange={handleChange} required />
            </div>

            <div className="formFlex_ii">
              <label>Local Government:</label>
              <input type="text" name="localgovernment" value={formData.localgovernment} onChange={handleChange} required />
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>State:</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>

            <div className="formFlex_ii">
              <label>Service Type:</label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                <option value="telecom">Telecom installation</option>
                <option value="moneyMachine">ATM installation</option>
              </select>
            </div>
          </div>

          {/* Separated File Uploads */}
          <div className="form1Flex">
            <div className="formFlex_i">
              <label>
                Upload your photo: <br />
                <small>A valid ID card or passport, or a clear picture of yourself.</small>
              </label>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} />
              {photoFile && (
                <div style={{ marginTop: "10px" }}>
                  <img
                    src={URL.createObjectURL(photoFile)}
                    alt="Photo Preview"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>

            <div className="formFlex_ii">
              <label>
                Upload at least one supporting document: <br />
                <small>Utility bill, land documents (e.g., certificate of occupancy, deed of assignment), or property/land photo.</small>
              </label>
              <input type="file" multiple accept="image/*" onChange={handleDocumentsUpload} />
              <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                {documentFiles.map((doc, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={URL.createObjectURL(doc)}
                      alt={`Doc ${index}`}
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Sex</label>
              <select name="sex" value={formData.sex} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
