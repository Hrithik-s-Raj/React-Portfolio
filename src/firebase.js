// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSgL6OxAiAUwuy3XZjyzOmK9uJAmFAmQQ",
  authDomain: "hrithik-portfolio.firebaseapp.com",
  projectId: "hrithik-portfolio",
  storageBucket: "hrithik-portfolio.appspot.com",
  messagingSenderId: "646261497445",
  appId: "1:646261497445:web:9a7f7ceb2301f8bd0fb08c",
  measurementId: "G-5F8FSZVGBV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
