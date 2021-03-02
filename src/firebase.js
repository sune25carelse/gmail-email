import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2ZbWlRFoJTNDbIuzHkGpIXWRA2qG5rUw",
  authDomain: "app-29040.firebaseapp.com",
  projectId: "app-29040",
  storageBucket: "app-29040.appspot.com",
  messagingSenderId: "901519389163",
  appId: "1:901519389163:web:8fd7f14cf4468cd736e9ae",
  measurementId: "G-24TZ1WJMRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

// connects db to firestore, auth to email and googleProvider
