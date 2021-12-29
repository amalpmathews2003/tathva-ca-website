import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function updateAmbassadorFeedback(uid,feedback){

      const docRef=doc(db,"ambassador",uid)

      await updateDoc(docRef,{
            feedback:feedback
      })
} 

export async function updateAmbassadorDrive(uid,drive){

      const docRef=doc(db,"ambassador",uid)

      await updateDoc(docRef,{
            drive:drive
      })
} 