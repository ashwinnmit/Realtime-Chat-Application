import React, {useRef} from "react";
import { auth } from "../firebase";
import "firebase/auth";
//import handleLogin from "./handleLogin";
import "./Signup.css";

var formValues = {username : "", password : ""}
function Login(){
    const userName = useRef("")
    const password = useRef("")
    const confirmPassword = useRef("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userName.current.value;
        const pass = password.current.value;
        //const conf = confirmPassword.current.value;
        
        // if(pass === conf){
        //     formValues = {user, pass};
        // }
        // else{
        //     alert("Error occured!!! Please try again");
        //     password.current.value = ""
        //     confirmPassword.current.value = ""
        // }
        formValues = {user, pass};
        auth.signInWithEmailAndPassword(formValues.username, formValues.password).then(()=>{
            console.log("Sign in succesful");
        })
        .catch((error)=>{
            console.log(error);
        })
      };
    return (
        <main className="form-signin">
         {/* SignIn Page */}
  <form onSubmit={()=>{return false;}}>
    <div className="dice-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#5865F2" className="bi bi-dice-5 logo" viewBox="0 0 16 16">
        <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
        <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
    </div>
    <h1 className="h3 mb-3 fw-normal discord-purple">Login</h1>

    <div className="input-container">
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={userName}/>
            <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control radius-add" id="floatingPassword" placeholder="Password" ref={password}/>
            <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control radius-control" id="floatingPassword" placeholder="Password" ref={confirmPassword}/>
            <label for="floatingPassword">Confirm Password</label>
        </div>
    </div>

    <button className="w-100 btn btn-lg discord-background-purple" type="button" onClick={handleSubmit}>Login</button>
    <p className="mt-5 mb-3 discord-purple">&copy; 2021-present</p>
  </form>
</main>
    )
}

export {formValues};
export default Login;
