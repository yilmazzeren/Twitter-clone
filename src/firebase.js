import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHa1Z4xCVOQk9uWaGb9MvEp2Iee3SAb3k",
  authDomain: "twitter-185fd.firebaseapp.com",
  projectId: "twitter-185fd",
  storageBucket: "twitter-185fd.appspot.com",
  messagingSenderId: "477139033940",
  appId: "1:477139033940:web:6951ee7904a62c4efbb2c1",
  measurementId: "G-RW43WV90NG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
