import React, {useRef, useEffect} from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import {useHistory} from "react-router-dom";
import "./Signup.css";

function SignUp(){
    const email = useRef("");
    const password = useRef("");
    const nav = useHistory()
    const handleSignIn = (e)=>{
      const em = email.current.value;
      const p = password.current.value;
      signInWithEmailAndPassword(auth, em, p).then(()=>{
        nav.push("/home");
      }).catch((err)=>{
        alert(err.message);
      })
    }
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          nav.push("/home");
        }
      })
    },[])
    return (
      <main className="form-signin">
  <form>
    {/* LOGIN PAGE */}
    {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
    <div className="dice-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#5865F2" className="bi bi-dice-5 logo" viewBox="0 0 16 16">
        <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
        <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
    </div>
    <h1 className="h3 mb-3 fw-normal discord-purple">Sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={email}/>
      <label for="floatingInput">Username</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control radius-control" id="floatingPassword" placeholder="Password" ref={password}/>
      <label for="floatingPassword">Password</label>
    </div>


    <button className="w-100 btn btn-lg discord-background-purple" type="button" onClick={handleSignIn}>Sign in</button>
    <p className="mt-5 mb-3 discord-purple">&copy; 2021-present</p>
  </form>
  <p className="login-check">Dont Have an account??? <br/><a href="/login" className="discord-purple">Click Here</a></p>
</main>
    )
}

export default SignUp;