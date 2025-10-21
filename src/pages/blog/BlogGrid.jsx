import Me from '../../assets/images/Daniel.jpg';
import { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import Pagination from '../../components/pagination/Pagination';
import { Link } from 'react-router-dom';
import usePageTracking from '../../usePageTracking';

const BlogGrid = () => {
  usePageTracking();
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "blogPosts"));
      const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogPosts(posts);
    };

    fetchData();
  }, []);

  const postsPerPage = 8;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);




  return (
    <section className="news-grid grid">
    <div className="container">
      <div className="row ">
      {currentPosts.map((post) => (
        <div key={post.id}  className="col-md-4">
          <div className="card-box-b card-shadow blog-general news-box">
            <div className="img-box-b">
              <img src={post.imageUrl} alt="" className="img-b img-fluid" />
            </div>
            <div className="card-overlay">
              <div className="card-header-b">
                <div className="card-category-b">
                  <a href="#" className="category-b">Blog</a>
                </div>
                <div className="card-title-b">
                  <h2 className="title-2">
                    <Link to={`/blog/blog-details/${post.id}`}>{post.title}</Link>
                  </h2>
                </div>
                {/* <div
                    className="content blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content.slice(0,200) }}
                  /> */}
                <div className="card-date">
                  {/* <span className="date-b">18 Sep. 2017</span> */}
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

export default BlogGrid