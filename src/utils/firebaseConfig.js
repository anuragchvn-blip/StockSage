// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW2iIjZI4DOhR1th0A9vrqo0tCOU7TUuc",
  authDomain: "pantry-tracker-53b9c.firebaseapp.com",
  projectId: "pantry-tracker-53b9c",
  storageBucket: "pantry-tracker-53b9c.appspot.com",
  messagingSenderId: "775967811762",
  appId: "1:775967811762:web:2cc9ca9aa5066625dec1ab",
  measurementId: "G-0RBE41DN97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }; // Export Firestore database
