import { getFirestore, collection,getDocs,addDoc,setDoc,doc,query,limit,where} from 'firebase/firestore';
import {db} from './firebase'

export default async function getAmbassador(uid){
      const q=query(collection(db,"ambassador"),where("Uid","==",uid))
      const querySnaphot=await getDocs(q);
      let user_data=querySnaphot.docs.map(doc=>doc.data())
      return user_data
}