import { useState, useEffect, useContext } from "react";
import { ref, deleteObject } from 'firebase/storage';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { storage, db } from '../../firebase/Firebase'; 
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import { AuthContext } from '../../context/AuthContext'; 


const GalleryAdmin = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [uploading, setUploading] = useState(false);
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
      const imagesCollection = collection(db, 'images');
      const querySnapshot = await getDocs(imagesCollection);
      const imageList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imageList);
    };

    fetchData();
  }, []);

  const handleImageUpload = async (e) => {
    e.preventDefault();

    if (image) {
      setUploading(true); // Set uploading state to true during the upload process

      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      try {
        const docRef = await addDoc(collection(db, 'images'), {
          imageUrl,
          description,
        });

        setImages((prevImages) => [
          ...prevImages,
          { id: docRef.id, imageUrl, description },
        ]);

        setImage(null);
        setDescription('');
      } catch (error) {
        console.error('Error adding image: ', error);
      } finally {
        setUploading(false); // Set uploading state back to false after upload completion
      }
    }
  };

  const handleDeleteImage = async (imageId, imageUrl) => {
    try {
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
      await deleteDoc(doc(db, 'images', imageId));

      setImages((prevImages) => prevImages.filter((img) => img.id !== imageId));
    } catch (error) {
      console.error('Error deleting image: ', error);
    }
  };

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
        <div className="admin">
          <h2>Gallery Panel</h2>
          <form>
            {image ? (
              <>
                {/* Display uploaded image */}
                <img src={URL.createObjectURL(image)} alt="Selected" className="selected-image" />
                {/* Hide file input when an image is selected */}
                <input type="file" onChange={(e) => setImage(e.target.files[0])} style={{ display: 'none' }} />
              </>
            ) : (
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            )}
            <input
              type="text"
              placeholder="Image Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" onClick={handleImageUpload}>
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </form>
          <ul>
            {images.map((image) => (
              <li key={image.id}>
                <img src={image.imageUrl} alt={`Image ${image.id}`} />
                <p>{image.description}</p>
                <button onClick={() => handleDeleteImage(image.id, image.imageUrl)}>
                  Delete Image
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryAdmin;
