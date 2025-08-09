import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_Odg1JVqKZokFtnuny04pA2XdjF9Xe5w",
  authDomain: "edocufy.firebaseapp.com",
  projectId: "edocufy",
  storageBucket: "edocufy.firebasestorage.app",
  messagingSenderId: "1053516613570",
  appId: "1:1053516613570:web:cc9e64300fa7b0c7b8f85b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
