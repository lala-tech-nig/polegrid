import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase";
import Me from '../../../assets/images/Daniel.jpg';

const PropertyFetch = () => {
    const [PropertyPosts, setPropertyPosts] = useState(null); // Change to single post state
    const { id } = useParams();

    useEffect(() => {
        // Fetch news posts from Firestore for the frontend news page
        const fetchData = async () => {
          const q = query(collection(db, "PropertyPosts"));
          const querySnapshot = await getDocs(q);
          const posts = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (doc.id === id) {
              posts.push({ ...data, id: doc.id });
            }
          });
          if (posts.length > 0) {
            setPropertyPosts(posts[0]);
          }
        };
    
        fetchData();
      }, [id]);
    
      if (!PropertyPosts) {
        // Handle the case where the post is not found or not loaded yet
        return <div>Loading...</div>;
      }

  return (
    <section className="property-single nav-arrow-b">
    <div className="container" key={PropertyPosts.id}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div id="property-single-carousel" className="swiper">
            <div className="swiper-wrapper">
              <div className="carousel-item-b properties_fetchimg swiper-slide">
                <img src={PropertyPosts.imageUrl} alt="" />
              </div>
            </div>
          </div>
          <div className="property-single-carousel-pagination carousel-pagination"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">

          <div className="row justify-content-between">
            <div className="col-md-7 col-lg-7 section-md-t3">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box-d properties_fetchTitle">
                    <h3 className="title-d">{PropertyPosts.title}</h3>
                  </div>
                </div>
              </div>
              <div className="property-description">
                <div
                className="content properties_fetchContent blog-content"
                dangerouslySetInnerHTML={{ __html: PropertyPosts.content }}
              />
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-md-10 offset-md-1">
          <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="pills-video-tab" data-bs-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="true">Video</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" id="pills-plans-tab" data-bs-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Floor Plans</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" id="pills-map-tab" data-bs-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Ubication</a>
            </li> */}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
            {PropertyPosts.videoUrl && (
        <video width="100%" height="460" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen controls>
          <source src={PropertyPosts.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
            </div>
            <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
              <img src="assets/img/plan2.jpg" alt="" className="img-fluid" />
            </div>
          
          </div>
        </div>
        <div className="col-md-12">
          <div className="row section-t3">
            <div className="col-sm-12">
              <div className="title-box-d">
                <h3 className="title-d">Contact Agent</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <img src={ Me } alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="property-agent">
                <h4 className="title-agent">Anabella Geller</h4>
                <p className="color-text-a">
                  Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                  dui. Quisque velit nisi,
                  pretium ut lacinia in, elementum id enim.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <strong>Phone:</strong>
                    <span className="color-text-a">(222) 4568932</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Mobile:</strong>
                    <span className="color-text-a">777 287 378 737</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Email:</strong>
                    <span className="color-text-a">annabella@example.com</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Skype:</strong>
                    <span className="color-text-a">Annabela.ge</span>
                  </li>
                </ul>
                <div className="socials-a">
                  <ul className="list-inline">
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
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="property-contact">
                <form className="form-a">
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <textarea id="textMessage" className="form-control" placeholder="Comment *" name="message" cols="45" rows="8" required></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button type="submit" className="btn btn_general btn-a">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PropertyFetch