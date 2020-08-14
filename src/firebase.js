import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDt0CYvlPMAAi2YYfWpyrWfHgQOmIuqKwI",
  authDomain: "clone-f71c3.firebaseapp.com",
  databaseURL: "https://clone-f71c3.firebaseio.com",
  projectId: "clone-f71c3",
  storageBucket: "clone-f71c3.appspot.com",
  messagingSenderId: "949190089417",
  appId: "1:949190089417:web:5bdcafb352927d79d30b18",
  measurementId: "G-2FGW21BF26",
});

const db = firebaseApp.firestore();
export default db;
