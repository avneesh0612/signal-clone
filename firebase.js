import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxy9Y8Z1-80kSFEHXqUx70N0ZNZMOBIuA",
  authDomain: "signal-clone-d6ee3.firebaseapp.com",
  projectId: "signal-clone-d6ee3",
  storageBucket: "signal-clone-d6ee3.appspot.com",
  messagingSenderId: "661885969755",
  appId: "1:661885969755:web:b234c405dac198375e667e",
  measurementId: "G-0H8GVJXBN5",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
