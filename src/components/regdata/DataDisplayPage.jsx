import { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataDisplayPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // Image Preview Modal

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
        toast.error("Error fetching registrations.");
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  // Delete a registration
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this registration?")) return;
    
    try {
      await deleteDoc(doc(db, "registrations", id));
      setRegistrations((prev) => prev.filter((item) => item.id !== id));
      toast.success("Registration deleted successfully.");
    } catch (error) {
      toast.error("Error deleting registration.");
      console.error("Error deleting registration:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="data-display" className="data-display section-bg p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Registrations</h2>

        {registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrations.map((registration) => (
              <div key={registration.id} className="bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">{registration.name}</h3>
                <p>Email: {registration.email || "N/A"}</p>
                <p>Number: {registration.number}</p>
                <p>Location: {registration.location}</p>
                <p>State: {registration.state}</p>
                <p>Service Type: {registration.serviceType}</p>
                <p>Sex: {registration.sex}</p>

                {/* Image Preview */}
                <div className="photo-gallery reg-fetchImg flex space-x-2 mt-2">
                  {registration.photos?.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-20 h-20 object-cover cursor-pointer rounded"
                      onClick={() => setSelectedImage(photo)}
                    />
                  ))}
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(registration.id)}
                  className="mt-3 px-3 py-1 btn_reg-fetch"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {/* {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" className="max-w-2xl max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )} */}
    </section>
  );
};

export default DataDisplayPage;
