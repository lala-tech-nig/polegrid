import  { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase"; // Adjust the import based on your file structure
import { collection, getDocs } from "firebase/firestore";

const DataDisplayPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "registrations"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="data-display" className="data-display section-bg">
      <div className="container">
        <h2>Registrations</h2>
        {registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <div className="data-grid">
            {registrations.map((registration) => (
              <div key={registration.id} className="data-card">
                <h3>{registration.name}</h3>
                <p>Email: {registration.email || "N/A"}</p>
                <p>Number: {registration.number}</p>
                <p>Location: {registration.location}</p>
                <p>State: {registration.state}</p>
                <p>Service Type: {registration.serviceType}</p>
                <div className="photo-gallery">
                  {registration.photos?.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DataDisplayPage;
