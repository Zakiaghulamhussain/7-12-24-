

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCP9QM4gVgyKRgAt5IIAWwbK6vgTcb2NMg",
    authDomain: "demoproject-a-6a550.firebaseapp.com",
    projectId: "demoproject-a-6a550",
    storageBucket: "demoproject-a-6a550.firebasestorage.app",
    messagingSenderId: "1029036910489",
    appId: "1:1029036910489:web:52b8aa1c10a1f4f2b35508",
    measurementId: "G-ZRKYWDVELM"
  };

 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user) => {
    if (user) {
        // Store the user ID in localStorage if it's not already stored
        if (!localStorage.getItem('loggedInUserId')) {
            localStorage.setItem('loggedInUserId', user.uid);
            console.log("User ID stored in localStorage:", user.uid);
        }

        const loggedInUserId = localStorage.getItem('loggedInUserId');
        console.log("Logged in User ID from localStorage:", loggedInUserId); // Debug log

        if (loggedInUserId) {
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        console.log("User data retrieved:", userData); // Debug log

                        // Populate user data on the page
                        document.getElementById('loggedUserFName').innerText = userData.firstName;
                        document.getElementById('loggedUserEmail').innerText = userData.email;
                        document.getElementById('loggedUserLName').innerText = userData.lastName;
                    } else {
                        console.log("No document found matching ID:", loggedInUserId);
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error);
                });
        }
    } else {
        console.log("User is not logged in");
    }
});

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })


