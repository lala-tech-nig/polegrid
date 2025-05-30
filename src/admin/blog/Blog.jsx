import { useState, useEffect, useContext } from "react";
import {
  collection,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import {
  uploadBytes,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../firebase/Firebase";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
// import { useNavigate } from 'react-router-dom';
import "../admin.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../../context/AuthContext'; 

const BlogAdmin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [posting, setPosting] = useState(false); // New state for tracking posting status
  // const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
   
  //   if (!currentUser || currentUser.role !== "admin") {
  //     navigate('/');
  //   }
  // }, [currentUser, navigate]);


  useEffect(() => {
    // Fetch blog posts from Firestore for the admin panel
    const fetchData = async () => {
      const q = query(collection(db, "blogPosts"));
      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id; // Store the document ID for deleting
        posts.push(data);
      });
      setBlogPosts(posts);
    };

    fetchData();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreatePost = async () => {
    if (!title || !content || !image) {
      alert("Please fill in all fields.");
      return;
    }

    setPosting(true); // Set posting state to true during the post creation process

    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    const newPostRef = await addDoc(collection(db, "blogPosts"), {
      title,
      content,
      imageUrl,
      timestamp: Timestamp.now(),
    });

    // Update the local state to include the new post
    const newPost = { title, content, imageUrl, id: newPostRef.id };
    setBlogPosts([...blogPosts, newPost]);

    // Reset states
    setTitle("");
    setContent("");
    setImage(null);
    setPosting(false); // Set posting state back to false after post creation
  };

  const handleDeletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "blogPosts", postId));
      const updatedPosts = blogPosts.filter((post) => post.id !== postId);
      setBlogPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
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
    };
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div>
      <div className="d-flex">
        <div className={toggle ? "d-none" : "w-auto position-fixed"}>
          <Sidebar />
        </div>

        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar />
        </div>

        <div className="col">
          <Navbar Toggle={Toggle} />
          <div className="admin">
            <h1>
              Blog <span className="admintitle">Panel</span>
            </h1>
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
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="selected-image"
              />
            )}
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageUpload}
            />
            <button type="submit" onClick={handleCreatePost}>
              {posting ? "Blogging..." : "Blog Post"}
            </button>

            <h2>
              Blog <span className="admintitle">Posts</span>
            </h2>
            <ul>
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <p>{post.title}</p>
                  <button onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
