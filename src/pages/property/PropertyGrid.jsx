import Me from '../../assets/images/Daniel.jpg';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const PropertyGrid = () => {
  const [PropertyPosts, setPropertyPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "PropertyPosts"));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPropertyPosts(posts);
      } catch (error) {
        console.error("Error fetching news posts:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    fetchData();
  }, []);

  const postsPerPage = 8;
  const totalPosts = PropertyPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = PropertyPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="property-grid grid">
    <div className="container">
      <div className="row">
      {currentPosts.map((post) => (
        <div key={post.id} className="col-md-4">
          <div className="card-box-a card-shadow">
            <div className="img-box-a">
              <img src={post.imageUrl} alt="" className="img-a img-fluid" />
            </div>
            <div className="card-overlay">
              <div className="card-overlay-a-content">
                <div className="card-header-a">
                  <h2 className="card-title-a">
                    <Link to={`/properties/properties-details/${post.id}`}>
                    {post.title}
                     </Link>
                  </h2>
                </div>
                <div className="card-body-a">
                  <div className="price-box d-flex">
                    <span className="price-a">Properties</span>
                  </div>
                  <Link to={`/properties/properties-details/${post.id}`} className="link-a">Click here to view
                    <span className="bi bi-chevron-right"></span>
                  </Link>
                </div>
                <div className="card-footer-a">
                  <ul className="card-info d-flex justify-content-around">
                    <li>
                      <h4 className="card-info-title">Location</h4>
                      <span>
                        {post.location}
                      </span>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
         ))}
        
      </div>
      {/* <div className="row">
        <div className="col-sm-12">
          <nav className="pagination-a">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">
                  <span className="bi bi-chevron-left"></span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item next">
                <a className="page-link" href="#">
                  <span className="bi bi-chevron-right"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default PropertyGrid