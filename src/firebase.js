import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMBV8jgJiSE-RdujvGCNGEC190OllJQUQ",
  authDomain: "disney-clone-cd311.firebaseapp.com",
  projectId: "disney-clone-cd311",
  storageBucket: "disney-clone-cd311.appspot.com",
  messagingSenderId: "928108703548",
  appId: "1:928108703548:web:f40e46eeb6d0dccaaeb839",
  measurementId: "${config.measurementId}"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage};

export default app;