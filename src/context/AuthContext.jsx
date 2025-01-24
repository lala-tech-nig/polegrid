import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [accountCreationInProgress, setAccountCreationInProgress] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!accountCreationInProgress) {
        if (user) {
          console.log("Auth state changed. User:", user); // Add logging
          try {
            const userDocRef = doc(db, 'users', user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
              setCurrentUser(userData);
              console.log('User data:', userData); // Add logging
            } else {
              console.log('User not found in Firestore'); // Add logging
            }
          } catch (error) {
            console.error('Error fetching user document from Firestore:', error);
          }
        } else {
          setCurrentUser({});
        }
      }
    });

    return () => {
      unsub();
    };
  }, [accountCreationInProgress]);

  const handleAccountCreation = async (userData) => {
    setAccountCreationInProgress(true);
    try {
      setCurrentUser(userData);
    } catch (error) {
      console.error('Error creating account:', error);
    } finally {
      setAccountCreationInProgress(false);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleAccountCreation }}>
      {children}
    </AuthContext.Provider>
  );
};
