// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { BlogStorageType } from "../../types/blogStorageType.type";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// firebase function wrapped in a helper function
export const uploadBlog = async(collectionName: string, blog_document: BlogStorageType) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), blog_document);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}