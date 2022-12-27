import React, {useEffect, useState} from "react";
import { signOut , onAuthStateChanged} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Home(){
    const nav = useHistory();
    var [userName, changeName] = useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(!user){
                nav.push("/");
            }
            else{
                changeName(user.email)
            }
        })
    },[])
    const handleSignOut = ()=>{
        signOut(auth).then(()=>{
            nav.push("/")
        }).catch((err)=>{
            alert(err.message);
        })
    }
    return (
        <div>
            <h1>Hi {userName} Firebase Works at last</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Home;