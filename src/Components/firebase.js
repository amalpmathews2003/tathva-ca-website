import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig);

// export default app;
export const authentication = getAuth(app);