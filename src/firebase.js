import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfwrza0C80T5FtsABQINK-ieJu_iKRJ28",
  authDomain: "linkedin-clone-ae81f.firebaseapp.com",
  projectId: "linkedin-clone-ae81f",
  storageBucket: "linkedin-clone-ae81f.appspot.com",
  messagingSenderId: "497895232416",
  appId: "1:497895232416:web:c2b03f45563d3bf2a38ac5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
