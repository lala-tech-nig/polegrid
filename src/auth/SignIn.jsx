import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { auth } from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    setIsLoading(true); // Set loading state when the form is submitted

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setErr(true);
    }

    setIsLoading(false); // Reset loading state
  };

  return (
    <div>
      <Header />
      <section className="h-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6">
              <div className="card card-registration">
                <div className="card-body p-md-5 text-dark">
                  <p className="mb-5 text-uppercase">Please login using account detail below</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Set your password"
                      />
                    </div>
                    <button type="submit" className="btn signinbtn btn-lg ms-2">
                      {isLoading ? "Signing..." : "Sign In"}
                    </button>
                    {err && <span>Something went wrong</span>}
                  </form>
                  <p className="signintext">
                    You do not have an account? <Link to="/">Sign up</Link> | <Link to="/password-reset">Forgot Password?</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signin;
