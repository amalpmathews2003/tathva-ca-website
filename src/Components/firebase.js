import firebase from 'firebase';
// import firebase from 'firebase';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyPli1D97zoUZaqD0OgkmnnQrcj7kgd8U",
  authDomain: "ca-tathva-21.firebaseapp.com",
  projectId: "ca-tathva-21",
  storageBucket: "ca-tathva-21.appspot.com",
  messagingSenderId: "1030423280960",
  appId: "1:1030423280960:web:d7aa0f802b74371eb64ea5"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default function initializeFirebase(getDatabase = false){

  
    if (firebase.apps.length===0){
      
      firebase.initializeApp(firebaseConfig);
      console.log('firebase initialized');
    }
    
    //console.log(firebase.apps);
    
    if(getDatabase){
      return firebase.firestore();
    }
    
    
}