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

const AdminLandlordPanel = () => {
  const [landlords, setLandlords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLandlords = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "landlordregistrations"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLandlords(data);
    } catch (error) {
      console.error("Error fetching landlord registrations:", error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "landlordregistrations", id));
      toast.success("Deleted successfully");
      setLandlords((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    fetchLandlords();
  }, []);

  return (
    <div className="admin-panel container">
      <ToastContainer />
      <h2>Landlord Registrations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : landlords.length === 0 ? (
        <p>No landlord registrations found.</p>
      ) : (
        <div className="admin-table">
          {landlords.map((item, index) => (
            <div key={item.id} className="admin-card">
              <h3>{item.name}</h3>
              <p><strong>Email:</strong> {item.email || "N/A"}</p>
              <p><strong>Phone:</strong> {item.number}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>State:</strong> {item.state}</p>
              <p><strong>Nearest Bus Stop:</strong> {item.nearestbustop}</p>
              <p><strong>Local Government:</strong> {item.localgovernment}</p>
              <p><strong>Service Type:</strong> {item.serviceType}</p>
              <p><strong>Sex:</strong> {item.sex}</p>

              <div style={{ marginTop: "10px" }}>
                <strong>Photo:</strong>
                <div style={{ marginTop: "5px" }}>
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt="ID/Passport"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  ) : (
                    <p>No photo uploaded</p>
                  )}
                </div>
              </div>

              <div style={{ marginTop: "10px" }}>
                <strong>Supporting Documents:</strong>
                <div style={{ display: "flex", gap: "10px", marginTop: "5px", flexWrap: "wrap" }}>
                  {item.documents?.length > 0 ? (
                    item.documents.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt={`Doc ${i}`}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    ))
                  ) : (
                    <p>No documents uploaded</p>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="selected-image-admin-delete-button"
                style={{ marginTop: "10px" }}
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

export default AdminLandlordPanel;
