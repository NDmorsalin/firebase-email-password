// Import the functions you need from the SDKs you need
;
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdMIXZy5nSgRFdWvxH8JjTEDHEET4CGcc",
  authDomain: "email-password-26add.firebaseapp.com",
  projectId: "email-password-26add",
  storageBucket: "email-password-26add.appspot.com",
  messagingSenderId: "862613681741",
  appId: "1:862613681741:web:1c6946f05504c47d594e04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app, auth, firebaseConfig
}