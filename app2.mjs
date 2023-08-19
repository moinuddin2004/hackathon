import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
  const auth = getAuth(app);

  var signup = document.getElementById('signup')

  signup.addEventListener('click', function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      const firstname = document.getElementById("fname").value;
      const lastname = document.getElementById("lname").value;
      // Storing data in Local Storage
   localStorage.setItem("userfname",firstname);
   localStorage.setItem("userlname",lastname);
   
      alert('Sign Up Successful')
      location.href= './signin.html'

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert('Error:' + errorMessage)
    });


  })





const handleAuthStateChange = (user) => {
    if (user) {
      
      console.log('User is logged in:', user.email);

      window.location.href = `./app.html`;

    } else {
    
      console.log('User is logged out');
    }
  };
  

onAuthStateChanged(auth, handleAuthStateChange);