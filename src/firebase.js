import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF9wKvgpsFaw518hT0uMA3ACliQCCEKVs",
  authDomain: "clone-c145d.firebaseapp.com",
  projectId: "clone-c145d",
  storageBucket: "clone-c145d.appspot.com",
  messagingSenderId: "116636575917",
  appId: "1:116636575917:web:c1def9b768cd9fe0ccbe24",
  measurementId: "G-FX5EC97XV9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth}; 