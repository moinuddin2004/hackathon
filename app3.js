import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, doc, query, orderBy, where, updateDoc, deleteField, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyCk7MtPvWz07PahXDdkYTZKZNe04gHmgdE",
  authDomain: "test-b9973.firebaseapp.com",
  projectId: "test-b9973",
  storageBucket: "test-b9973.appspot.com",
  messagingSenderId: "731051060120",
  appId: "1:731051060120:web:c3d63992a345efaaff59ed",
  measurementId: "G-B978XPTVFX"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const user = auth.currentUser;



const q = query(collection(db, "Posts"), orderBy("timestamp", "desc"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let showDiv = document.getElementById("showdiv");
      showDiv.innerHTML = "";


  querySnapshot.forEach ((snapshot) =>{
    const data = snapshot.data();
        
       const bookDiv = document.createElement('div');
       bookDiv.id = 'show';
       const timestamp = data.timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date object
       const formattedTimestamp = timestamp.toLocaleString();
       bookDiv.innerHTML = `
           <div class="classtitle" id="book${snapshot.id}">
               <h3>${data.head}</h3>
               <a href="./profile.html"> <h2>${data.firstname} ${data.lastname}</h2> </a>
               <span> ${formattedTimestamp} </span>
               <p>${data.post} </p>
           </div>
       `;
   showDiv.appendChild(bookDiv);
})          })



  
