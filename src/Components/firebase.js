import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmZTeOQys0f_cIMv7pD9cHC3X096iEvMY",
  authDomain: "nitc-a41bf.firebaseapp.com",
  projectId: "nitc-a41bf",
  storageBucket: "nitc-a41bf.appspot.com",
  messagingSenderId: "328024455085",
  appId: "1:328024455085:web:d01984a8d322fe34f85324",
  measurementId: "G-EG11DMG999"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)
export default app;
export {db}
export const authentication = getAuth(app);