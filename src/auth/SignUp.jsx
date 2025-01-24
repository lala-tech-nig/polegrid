import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, storage, db } from '../firebase/Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer/Footer';
import './auth.css';

const Signup = () => {
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      const storageRef = ref(storage, firstName);
      const uploadTask = uploadBytesResumable(storageRef);

      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          console.error('Error uploading image:', error);
          setIsLoading(false);
          setErr(true);
          toast.error('Error uploading image');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: firstName,
              photoURL: downloadURL,
            });

            const role = 'admin';

            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: firstName,
              email,
              role,
            });

            setIsLoading(false);

            navigate('/');
          });
        }
      );
    } catch (error) {
      console.error('Firebase authentication error:', error);
      setIsLoading(false);
      setErr(true);
      toast.error(error.message);
    }
  }

  return (
    <div>
    <Header />
    <section className="h-100 bg-light">
      <div className="container py-5 h-100">
        <ToastContainer />
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6">
              <div className="card card-registration">
                <div className="card-body p-md-5 text-dark">
                  <h4 className="mb-5 text-uppercase text-center">Sign up to create an account</h4>
                  <form onSubmit={handleSubmit}>
                    <div className=" mb-4 signupInput">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1m">
                          Your name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name and last name"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>

                    <div className="mb-3 signupInput">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input name="email" type="email" className="form-control" placeholder="wisky@example.com" required />
                    </div>
                    <div className="mb-3 signupInput">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="At least 6 characters"
                        required
                      />
                      <div className='info_passoword'>
                          <i className="bi bi-info"></i> 
                   <p>password must be at least 6 chracters</p>
                      </div>
                    
                    </div>

                    <div className="mb-3 signupInput">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        placeholder="Confirm your password..."
                        required
                      />
                    </div>
                    <button type="submit" className="btn  signinbtn btn-lg ms-2">
                    {isLoading ? 'Signing Up...' : 'Sign Up'}
                  </button>
                  {err && <span>Something went wrong</span>}
                </form>
                <p className="signuptext">
                  You do not have an account? <Link to="/auth/signIn">Login</Link>
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

export default Signup;
