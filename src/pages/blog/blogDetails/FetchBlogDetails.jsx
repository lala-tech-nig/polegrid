import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../../firebase/Firebase";
import '../blog.css'

const FetchBlogDetails = () => {
    const [post, setPost] = useState({});
  const [, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "blogPosts"));
      const querySnapshot = await getDocs(q);
      const selectedPost = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .find((item) => item.id === id);
      setPost(selectedPost);
    };

    const fetchComments = async () => {
      const commentsQuery = query(collection(db, "comments"), where("postId", "==", id));
      const commentsSnapshot = await getDocs(commentsQuery);
      const commentsData = commentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    };

    fetchData();
    fetchComments();
  }, [id]);


  return (
    <section className="news-single nav-arrow-b">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="news-img-box blog-img text-center">
            <img src={post.imageUrl} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div className="post-information">
            <ul className="list-inline text-center color-a">
              <li className="list-inline-item mr-2">
                <strong>Author: </strong>
                <span className="color-text-a">Admin</span>
              </li>
              <li className="list-inline-item mr-2">
                <strong>Category: </strong>
                <span className="color-text-a">Blog</span>
              </li>
              {/* <li className="list-inline-item">
                <strong>Date: </strong>
                <span className="color-text-a">19 Apr. 2017</span>
              </li> */}
            </ul>
          </div>
          <div className="post-content color-text-a">
            <h3 className="text-center post-intro">{post.title}</h3>
            <div
                    className="content blog-content"
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                  />
            {/* <p>
              Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur non
              nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada.
              Quisque velit nisi.
            </p> */}
            {/* <blockquote className="blockquote">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                <strong>Albert Vargas</strong>
                <cite title="Source Title">Author</cite>
              </footer>
            </blockquote> */}
            {/* <p>
              Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit
              tortor eget felis
              porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p> */}
          </div>
          {/* <div className="post-footer">
            <div className="post-share">
              <span>Share: </span>
              <ul className="list-inline socials">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="bi bi-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
          <div className="title-box-d">
            <h3 className="title-d">Comments (4)</h3>
          </div>
          <div className="box-comments">
            <ul className="list-comments">
              <li>
                <div className="comment-avatar">
                  <img src="assets/img/author-2.jpg" alt="">
                </div>
                <div className="comment-details">
                  <h4 className="comment-author">Emma Stone</h4>
                  <span>18 Sep 2017</span>
                  <p className="comment-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                    ipsam temporibus maiores
                    quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis.
                  </p>
                  <a href="3">Reply</a>
                </div>
              </li>
              <li className="comment-children">
                <div className="comment-avatar">
                  <img src="assets/img/author-1.jpg" alt="">
                </div>
                <div className="comment-details">
                  <h4 className="comment-author">Oliver Colmenares</h4>
                  <span>18 Sep 2017</span>
                  <p className="comment-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                    ipsam temporibus maiores
                    quae.
                  </p>
                  <a href="3">Reply</a>
                </div>
              </li>
              <li>
                <div className="comment-avatar">
                  <img src="assets/img/author-2.jpg" alt="">
                </div>
                <div className="comment-details">
                  <h4 className="comment-author">Emma Stone</h4>
                  <span>18 Sep 2017</span>
                  <p className="comment-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                    ipsam temporibus maiores
                    quae natus libero optio.
                  </p>
                  <a href="3">Reply</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="form-comments">
            <div className="title-box-d">
              <h3 class="title-d"> Leave a Reply</h3>
            </div>
            <form class="form-a">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="form-group">
                    <label for="inputName">Enter name</label>
                    <input type="text" class="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="form-group">
                    <label for="inputEmail1">Enter email</label>
                    <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="inputUrl">Enter website</label>
                    <input type="url" class="form-control form-control-lg form-control-a" id="inputUrl" placeholder="Website">
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="textMessage">Enter message</label>
                    <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-a">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default FetchBlogDetails