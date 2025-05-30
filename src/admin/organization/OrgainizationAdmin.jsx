import { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminOrganizationPanel = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "organizationregistrations"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "organizationregistrations", id));
      toast.success("Deleted successfully");
      setRegistrations((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className="admin-panel container">
      <ToastContainer />
      <h2>Organization Registrations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <div className="admin-table">
          {registrations.map((item, index) => (
            <div key={item.id} className="admin-card">
              <h3>{item.name}</h3>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.number}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Designation:</strong> {item.Designation}</p>
              <p><strong>Service Type:</strong> {item.serviceType}</p>
              <p><strong>Registration Type:</strong> {item.registrationProcess}</p>
              <p><strong>Contact Person:</strong> {item.contactpersonname}</p>
              <p><strong>Contact Email:</strong> {item.contactpersonemail}</p>
              <p><strong>Contact Phone:</strong> {item.contactpersonnumber}</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {item.photos?.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Uploaded ${i}`}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                ))}
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="selected-image-admin-delete-button"
              >
                Delete
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrganizationPanel;
