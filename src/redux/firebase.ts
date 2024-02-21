import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //"AIzaSyB8dtKNSA_z_kCs_2-VetCULBLGQa7cVdk",
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN, //"all-auth-db.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, //"all-auth-db",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, //"all-auth-db.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, //"383633344321",
  appId: import.meta.env.VITE_FIREBASE_APP_ID, //"1:383633344321:web:d443ed46e5adcbc25e43c0",
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

// Export firebase auth and firestore instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });