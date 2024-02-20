import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8dtKNSA_z_kCs_2-VetCULBLGQa7cVdk",
  authDomain: "all-auth-db.firebaseapp.com",
  projectId: "all-auth-db",
  storageBucket: "all-auth-db.appspot.com",
  messagingSenderId: "383633344321",
  appId: "1:383633344321:web:d443ed46e5adcbc25e43c0",
  measurementId: "G-0M9CNJL1XH"
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

// Export firebase auth and firestore instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();