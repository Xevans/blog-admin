/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { BlogStorageType } from "../../types/blogStorageType.type";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged, User } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBJcrvdK9VQVHv82KYbbRvb30JH61UVvaI",
  authDomain: "xevans-blog.firebaseapp.com",
  projectId: "xevans-blog",
  storageBucket: "xevans-blog.firebasestorage.app",
  messagingSenderId: "474952038593",
  appId: "1:474952038593:web:468170058e2674fea77c40",
  measurementId: "G-XKSMXPF0WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();

googleProvider.setCustomParameters({
  prompt: "select_account" // prompt user to select google account
});


 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    /*const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      const token = credential.accessToken;
      console.log(token);
    }
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...*/
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
    // ...
  });



// firebase function wrapped in a helper function
export const uploadBlog = async(collectionName: string, blog_document: BlogStorageType) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), blog_document);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const onAuthStateChangedListener = (user: User | null) => {
  if (user) {
    onAuthStateChanged(auth, (user) => {
      
      if (user) {
        const uid = user.uid // '?' because user could be null (just to sate typescript).
        //console.log("user is signed in with uid: ", user.uid)
        return user;
      }
      else {
        //console.log("user is signed out");
        return null;
      }

    })
  }
}