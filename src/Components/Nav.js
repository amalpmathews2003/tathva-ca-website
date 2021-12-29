import React from "react";
import tathvaLogo from "./images/Tathva'21 White Logo.png"
import toggle from "./images/nav-img.png"
import { Link , useHistory, useNavigate} from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {authentication} from './firebase'

import { useUserContext } from "./userContext";

const Nav= ()=>{

  const {user,setUser}=useUserContext()

  const userObj={"name":"","email":"","photoUrl":"","uid":""}
    let navigate = useNavigate();

    const SignInWithFirebase = () =>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(authentication, provider)
  .then((result) => {

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    userObj['name']=user.displayName
    userObj["email"]=user.email
    userObj.photoUrl=user.photoURL
    userObj.uid=user.uid
    setUser(userObj)
    localStorage.setItem("userObj",JSON.stringify(userObj))
    navigate('/signup/');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error);
    // ...
  })

    }

    return(
      <div className="nav container row nav-padding">
      <div className="tathva-logo-container"> 
           <img src={tathvaLogo} alt="tathva-logo" className="nav-logo"/>
      </div>
      <Link to='/' className="nav-text">Home</Link>
      <Link to='/contact' className="nav-text">Contact</Link>
      <Link to='/leaderboard' className="nav-text">Leaderboard</Link>
      
      <Link to='/Dashboard/Referals'>Dashboard</Link>
           <div className=" row nav-btn flex">
           <h3><a className="inter-r txt-black" onClick={SignInWithFirebase} >Sign In</a></h3>
          <button className="nav-toggle">
                   <img src={toggle} onClick={SignInWithFirebase} alt="" />
               </button>
               </div>
           </div>

          
    )
}
export {Nav}