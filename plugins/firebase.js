import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCDDEQ1MH0nmmCyRPU7qzMAMKc3cvAhzH0",
    authDomain: "portfolio-app-b2ffd.firebaseapp.com",
    projectId: "portfolio-app-b2ffd",
    storageBucket: "portfolio-app-b2ffd.appspot.com",
    messagingSenderId: "862875188534",
    appId: "1:862875188534:web:4f45d5942f54410cb0c797",
    measurementId: "G-PL9MGX0EX9"
  });
}

export default firebase;
