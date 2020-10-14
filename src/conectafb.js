import firebase from 'firebase/app';
import 'firebaser/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC_-TDCiyD5teYEv6F_tqjuLf5Ef1BmXH4",
    authDomain: "bands-1baa2.firebaseapp.com",
    databaseURL: "https://bands-1baa2.firebaseio.com",
    projectId: "bands-1baa2",
    storageBucket: "bands-1baa2.appspot.com",
    messagingSenderId: "983072734336",
    appId: "1:983072734336:web:4e38dc62756dfca748fa65"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();