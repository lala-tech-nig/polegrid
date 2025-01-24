import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const Properties = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, "PropertyPosts"),
                orderBy("timestamp", "desc"),
                limit(3) // Limit to the last three posts
            );
            const querySnapshot = await getDocs(q);

            const fetchedPosts = [];
            querySnapshot.forEach((doc) => {
                fetchedPosts.push({ ...doc.data(), id: doc.id });
            });

            setRecentPosts(fetchedPosts);
        };

        fetchData();
    }, []);

    return (
        <section className="property-grid grid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Latest Properties</h2>
                            </div>
                            <div className="title-link">
                                <Link to="/properties">All Property
                                    <span className="bi bi-chevron-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {recentPosts.length > 0 ? (
                        recentPosts.map((post) => (
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
                        ))
                    ) : (
                        <p>No recent properties available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Properties;
