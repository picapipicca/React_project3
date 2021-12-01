import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCon_WShxZw5LA1eRyLttq0WO9QmUBDstA",
  authDomain: "ministagram-e9e63.firebaseapp.com",
  projectId: "ministagram-e9e63",
  storageBucket: "ministagram-e9e63.appspot.com",
  messagingSenderId: "168709879640",
  appId: "1:168709879640:web:a0139290c64489a3b6572d",
  measurementId: "G-3Q6Z59BWRX"
};


firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export {auth,apiKey};