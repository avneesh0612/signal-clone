import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsMo0Wy_8N5OHYI7szaNGSo5gpv-JAk00",
  authDomain: "signal-clone-4eab1.firebaseapp.com",
  projectId: "signal-clone-4eab1",
  storageBucket: "signal-clone-4eab1.appspot.com",
  messagingSenderId: "1093155981535",
  appId: "1:1093155981535:web:8f1464312bc606b7c3416a",
  measurementId: "G-K83N7G3KZB",
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
