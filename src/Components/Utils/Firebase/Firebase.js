// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
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

export const userRef = collection(fdb, "Users")


export function RegisterNewUser({ email, toast, password, companyName, firstName, lastName, phoneNumber }) {
  createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential)  =>  {
          const userData = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              phoneNumber: phoneNumber,
              userID: userCredential.user.uid
          };
          console.log(userCredential)
          // Setting user data in Firestore after user creation
          await addDoc(userRef, userData)
          // setIsLoading(false)
      })
      .then(() => {
          console.log("New user has been created successfully");
          toast({ title: "Registration successful", description: "User account was created successfully", status: "success", position: "bottom", duration: 3000, })
      })
      .catch((error) => {
          console.log("An error occurred: " + error.message);
      });
}




export function GetCurrentUserId(){
    const user = auth.currentUser.uid
    return user;
}


