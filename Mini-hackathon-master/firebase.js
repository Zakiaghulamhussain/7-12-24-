
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth ,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore, collection, addDoc, onSnapshot,query,where, } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";





const firebaseConfig = {
    apiKey: "AIzaSyD1145dp6uAUSt-xmfQRk8kW7M88ExmgTw",
    authDomain: "website-9490d.firebaseapp.com",
    projectId: "website-9490d",
    storageBucket: "website-9490d.firebasestorage.app",
    messagingSenderId: "408613816274",
    appId: "1:408613816274:web:d6aba87c4e9a3b1fce2a0b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export {db,collection, addDoc, getAuth,signOut ,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification, updateEmail, updatePassword, deleteUser, signInWithPopup, GoogleAuthProvider, auth, onSnapshot,query,where, }
