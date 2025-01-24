import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { AuthContext } from "../context/AuthContext";


const Logout = () => {
    const { currentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div>
    {currentUser ? (
    <li className="nav-item nav-logout">
    {currentUser.photoURL && <img src={currentUser.photoURL} alt="user Image" className='currenuserImage' />}
    <NavLink to="/" className="get-started-btn scrollto" onClick={handleSignOut}>Log out</NavLink>
  </li>
) : (
    <p>Not logged in</p>
  )}
    </div>
  )
}

export default Logout