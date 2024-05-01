// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getFirestore, } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "developers-console-19c4f.firebaseapp.com",
  projectId: "developers-console-19c4f",
  storageBucket: "developers-console-19c4f.appspot.com",
  messagingSenderId: "580553291823",
  appId: "1:580553291823:web:34cb650f13d9415bd7eeda",
  measurementId: "G-MQXX3DBPYM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export const userRef = collection(fdb, "Users")

export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user
    } else {
      return "not logged in"
    }
  });
}