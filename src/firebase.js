import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDcwXi7xDqWKHWYPq_n1gJBc3bWtjmC3ug",
  authDomain: "neekahin.firebaseapp.com",
  databaseURL: "https://neekahin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neekahin",
  storageBucket: "neekahin.appspot.com",
  messagingSenderId: "759194042098",
  appId: "1:759194042098:web:472087602e06dd306e5a6b",
  measurementId: "G-22XRFE9N07"
});

export const db = app.database();
export const namesRef = db.ref('names');