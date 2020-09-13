import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWc5S9NJc1FszwOinS5Ny-IRe5mOPW4zc",
  authDomain: "challenge-2f087.firebaseapp.com",
  databaseURL: "https://challenge-2f087.firebaseio.com",
  projectId: "challenge-2f087",
  storageBucket: "challenge-2f087.appspot.com",
  messagingSenderId: "510199018979",
  appId: "1:510199018979:web:fc2fc3604d10a9139d1cd6",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };