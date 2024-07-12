// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/app/firebase-Auth.JS";
import{getFirestore, setDoc,doc} from"firebase/app/firebase-firestore.JS";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PnzVBduHsfFRl3HH-ehXcp-HaDq83xo",
  authDomain: "application-de-chat-a8f3d.firebaseapp.com",
  projectId: "application-de-chat-a8f3d",
  storageBucket: "application-de-chat-a8f3d.appspot.com",
  messagingSenderId: "165209075375",
  appId: "1:165209075375:web:d6d8bd49485cb1fde52e5a",
  measurementId: "G-3VNY6X8Z4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click',(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user =userCredential.user;
        const userData={
            email: email,
        };  
    })
})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log("User signed in: ", user);
    } else {
      // No user is signed in
      console.log("No user signed in");
    }
  });
  
  document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed in: ", userCredential.user);
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  });
  