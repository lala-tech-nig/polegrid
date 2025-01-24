import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { applyActionCode, checkActionCode } from 'firebase/auth';   

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhkwMA8wMw2jKbBjywIJwxGXBsddUWZdg",
  authDomain: "hubvisits-8c232.firebaseapp.com",
  projectId: "hubvisits-8c232",
  storageBucket: "hubvisits-8c232.appspot.com",
  messagingSenderId: "916671485469",
  appId: "1:916671485469:web:98726c812b8e95dbf2d8f4",
  measurementId: "G-WPNWS9RKWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
export { applyActionCode, checkActionCode };
