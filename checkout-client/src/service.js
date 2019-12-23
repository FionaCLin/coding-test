// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import {API_KEY} from './apiKey.json'
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "fir-checkout-challenge.firebaseapp.com",
  databaseURL: "https://fir-checkout-challenge.firebaseio.com",
  projectId: "fir-checkout-challenge"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });
