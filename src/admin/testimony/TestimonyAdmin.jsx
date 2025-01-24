import { useState, useEffect, useContext  } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import { AuthContext } from '../../context/AuthContext'; 

const TestimonyList = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // Check the user's role and navigate to the home page if they are not an admin
    if (!currentUser || currentUser.role !== "admin") {
      navigate('/no-access');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'testimony'));
      const testimonyList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonies(testimonyList);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'testimony', id));
      setTestimonies(testimonies.filter(testimony => testimony.id !== id));
      toast.success('Testimony Deleted Successfully!');
    } catch (error) {
      console.error('Error deleting document: ', error);
      toast.error('Error deleting testimony. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading testimonies...</p>;
  }

  function Toggle() {
    setToggle(!toggle);
  }


  return (
    <div className="d-flex">
    <div className={toggle ? 'd-none' : 'w-auto position-fixed'}>
      <Sidebar />
    </div>

    <div className={toggle ? 'd-none' : 'invisible'}>
      <Sidebar />
    </div>

    <div className="col">
      <Navbar Toggle={Toggle}/>
    <div>
      <ToastContainer />
      <h2>Testimonies</h2>
      <ul>
        {testimonies.map(testimony => (
          <li key={testimony.id}>
            <p><strong>Name:</strong> {testimony.name}</p>
            <p><strong>Email:</strong> {testimony.email}</p>
            <p><strong>Location:</strong> {testimony.location}</p>
            <p><strong>Heading:</strong> {testimony.heading}</p>
            <p><strong>Message:</strong> {testimony.message}</p>
            <button onClick={() => handleDelete(testimony.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default TestimonyList;
