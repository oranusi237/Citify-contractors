// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
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
const db = getDatabase()
const auth = getAuth()

export function RegisterNewUser({email, password, firstName ="", lastName ="-", displayName, phoneNumber}){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    set(ref(db, "Users/" + userCredential.user.uid),{
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
    })
}).then(()=>{
  console.log("New user has been created succesfully")
}).catch((error)=>{
  console.log("An error occured:" + error.message)
})
}







// export const createUserDocumentFromAuth = async ({userAuth, firstName,lastName,phoneNumber,password}) => {
//     const userDocRef = doc(db, 'users', userAuth.uid);
  
//     const userSnapshot = await getDoc(userDocRef);
  
//     if (!userSnapshot.exists()) {
//       const { displayName, email } = userAuth;
//       const createdAt = new Date();
//       try {
//         await setDoc(userDocRef, {
//           displayName,
//           email,
//           createdAt,
//           firstName,
//           lastName, 
//           phoneNumber,
//           password
//         });
//       } catch (error) {
//         console.log('error creating the user', error.message);
//       }
//     }
//     return userDocRef;
//   };



//Implementing user session persistent

// const auth = getAuth();
// export function LoginEmailandPassword(){
//   .then(({email, password}) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     console.log(errorCode)
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }

  
//   export const createAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return;
//     return await createUserWithEmailAndPassword(auth, email, password)
//   }




//   export const signOutUser = async () => await signOut(auth)
  
//   export const onAuthStateChangedListener = (callBack) => {
//     onAuthStateChanged(auth, callBack)
//   }