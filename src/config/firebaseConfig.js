import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsLhUN64akTd3CR-TTQRmoG5WE6PAzyEY",
  authDomain: "stokbarang-a5ca9.firebaseapp.com",
  databaseURL: "https://stokbarang-a5ca9.firebaseio.com",
  projectId: "stokbarang-a5ca9",
  storageBucket: "stokbarang-a5ca9.appspot.com",
  messagingSenderId: "567346311466",
  appId: "1:567346311466:web:20d716f7f20bb386236e53",
  measurementId: "G-R1ZMCQ560D",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
