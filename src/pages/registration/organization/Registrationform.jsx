import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { db, storage } from "../../../firebase/Firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    localgovernment: "",
    Designation: "",
    contactpersonname: "",
    contactpersonemail: "",
    contactpersonnumber: "",
    nearestbustop: "",
    registrationProcess: "Partnership",
    serviceType: "telecom",
    sex: "male",
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
  
    setIsSubmitting(true);
    toast.info("Registering...");
  
    try {
      // If you reintroduce photo upload later, use the logic here.
      const photoUrls = [];
  
      await addDoc(collection(db, "organizationregistrations"), {
        ...formData,
        photos: photoUrls,
      });
  
      toast.success("Registration successful!");
  
      setFormData({
        name: "",
        email: "",
        number: "",
        location: "",
        nearestbustop: "",
        contactpersonnumber: "",
        contactpersonname: "",
        contactpersonemail: "",
        Designation: "",
        localgovernment: "",
        serviceType: "telecom",
        registrationProcess: "Partnership",
        sex: "male",
      });
      setPhotos([]);
  
      setTimeout(() => {
        navigate("/registration/organization");
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
          {/* <h1>Property Address</h1> */}
          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Organization Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label>Email Address:</label>
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
              <label>Phone Number:</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formFlex_ii">
              <label> Address:</label>
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
              <label>Contact Person(name)</label>
             <input
             type="text"
             name="contactpersonname"
             value={formData.contactpersonname}
             onChange={handleChange}
           />
           
            </div>

            <div className="formFlex_ii">
              <label>Contact Person (email):</label>
              <input
  type="email"
  name="contactpersonemail"
  value={formData.contactpersonemail}
  onChange={handleChange}
/>

            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Contact Person(Phone Number):</label>
              <input
  type="text"
  name="contactpersonnumber"
  value={formData.contactpersonnumber}
  onChange={handleChange}
/>

            </div>

            <div className="formFlex_ii">
              <label>Organization Type:</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="telecom">Telecom Company</option>
                <option value="towerco">Towerco</option>
                <option value="Realestate">Real Estate</option>
                <option value="Financial">Financial Institution</option>
                <option value="Agents">Agents</option>
                <option value="Energy">Energy companies </option>
                <option value="Infrastructure">Infrastructure companies </option>
                <option value="Government">Government Agencies </option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div className="form1Flex">
            <div className="formFlex_i">
              <label>Designation:</label>
              <textarea
          name="Designation"
           value={formData.Designation}
           onChange={handleChange}
           />

            </div>

            <div className="formFlex_ii">
              <label>Registration Process:</label>
                <select
            name="registrationProcess"
              value={formData.registrationProcess}
             onChange={handleChange}
             >
                <option value="Partnership">Partnership/Collaboration</option>
                <option value="Service">Service Provision</option>
                <option value="Property">Property Listing</option>
                <option value="Investment">Investment Opportunities</option>
                {/* <option value="others">Others</option> */}
              </select>
            </div>
          </div>

          {/* <div className="form1Flex">
            <div className="formFlex_i">
              <div className="browerseFile">
                <label>Upload your photo and other supporting document (up to 4):</label>
                <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} />
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
            </div>

            <div className="formFlex_ii">
              <label>Sex</label>
              <select name="sex" value={formData.sex} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div> */}

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
