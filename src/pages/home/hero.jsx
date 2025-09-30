
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import couser1 from "../../assets/images/mast1.webp";
import couser2 from "../../assets/images/mast2.webp";
import couser3 from "../../assets/images/mast3.webp";
import "./Hero.css";

const Hero = () => {
  const heroStyles = {
    overflowX: "hidden",
    padding: "0",
  };

  const infoStyles = {
    position: "absolute",
    inset: "0",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    background: "rgba(0,0,0,0.4)",
  };

  const imagePaths = [couser2, couser1, couser3];

  const carouselItems = imagePaths.map((path, index) => (
    <div
      className={index === 0 ? "carousel-item active" : "carousel-item"}
      style={{
        position: "absolute",
        inset: "0",
        backgroundImage: `url(${path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
      key={index}
    ></div>
  ));

  // Typewriter effect
  const phrases = [
    "Start earning with your land today! 💰",
    "Earn by leasing your land for telecom towers! 📡",
    "Earn 2 million+ yearly with Pole Grid! 💵",
    "Empowering Telecom Growth 🚀",
    "Connecting Landowners & Telecoms 🌍",
    "Your Trusted Site Leasing Partner 🔑",
    "Simplifying Telecom Infrastructure ⚡",
  ];

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = deleting ? 50 : 100;

    const type = () => {
      if (!deleting && charIndex < currentPhrase.length) {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentPhrase.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="hero" className="hero" style={heroStyles}>
      <div className="info" style={infoStyles}>
        <div>
          <h1 className="hero-title">
            Welcome to <span className="brand-name">Pole Grid</span>
          </h1>
          <h2 className="typewriter">
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-subtext">
            Bridging the gap between landowners and telecom companies.
          </p>
          <div className="cta-buttons" style={{ marginTop: "20px" }}>
            <Link
              to="/about"
              className="btn-get-started me-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Know more about us!
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="btn-earn-now"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Start Earning Now
            </button>
          </div>
        </div>
      </div>

      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {carouselItems}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h3>Select an Option</h3>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/registration/landlord");
                }}
                className="modal-btn"
              >
                Landlord
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/registration/organization");
                }}
                className="modal-btn"
              >
                Organization
              </button>
            </div>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
