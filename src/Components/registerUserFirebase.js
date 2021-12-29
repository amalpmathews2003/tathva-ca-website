import {setDoc,doc  } from "firebase/firestore";
import {db} from './firebase'

async function addAmbassador({name,uid,email,college,branch,year,phone}){

      await setDoc(doc(db,"ambassador",uid),{
            Uid:uid,
            name:name,
            email:email,
            college:college,
            branch:branch,
            year:year,
            phone:phone,
            points:0,
            refCodes:{},
            drive:"",
            feedback:""
      })

}

export default addAmbassador