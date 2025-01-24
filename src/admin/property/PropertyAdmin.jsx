import { useState, useEffect, useContext } from "react";
import { collection, query, getDocs, addDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/Firebase";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Replace with the actual path to AuthContext
import '../admin.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PropertyAdmin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [propertyPosts, setPropertyPosts] = useState([]);
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
    // Fetch property posts from Firestore for the admin panel
    const fetchData = async () => {
      const q = query(collection(db, "PropertyPosts"));
      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id; // Store the document ID for deleting
        posts.push(data);
      });
      setPropertyPosts(posts);
    };

    fetchData();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleCreateProperty = async () => {
    if (!title || !content || !location || !image || !video) {
      alert("Please fill in all fields.");
      return;
    }

    // Upload the image to Firebase Storage
    const imageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    // Upload the video to Firebase Storage
    const videoRef = ref(storage, `videos/${video.name}`);
    await uploadBytes(videoRef, video);
    const videoUrl = await getDownloadURL(videoRef);

    // Create a new property post in Firestore
    const newPropertyRef = await addDoc(collection(db, "PropertyPosts"), {
      title,
      content,
      location,
      imageUrl,
      videoUrl,
      timestamp: Timestamp.now(),
    });

    // Add the new post to the displayed list
    setPropertyPosts([...propertyPosts, { title, content, location, imageUrl, videoUrl, id: newPropertyRef.id }]);

    setTitle("");
    setContent("");
    setLocation("");
    setImage(null);
    setVideo(null);
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      await deleteDoc(doc(db, "PropertyPosts", propertyId));
      const updatedProperties = propertyPosts.filter((post) => post.id !== propertyId);
      setPropertyPosts(updatedProperties);
    } catch (error) {
      console.error("Error deleting property post:", error);
    }
  };

  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    }
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, []);

  return (
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"} >
        <Sidebar />
      </div>

      <div className={toggle ? "d-none" : "invisible"} >
        <Sidebar />
      </div>

      <div className='col'>
        <Navbar Toggle={Toggle} />
        <div className="admin">
          <h1> Property <span className="admintitle">Panel</span></h1>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
            placeholder="Content"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
          />
          <button onClick={handleCreateProperty}>Create Property</button>

          <h2>Property <span className="admintitle">Posts</span></h2>
          <ul>
            {propertyPosts.map((post) => (
              <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.location}</p>
                <button onClick={() => handleDeleteProperty(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyAdmin;
