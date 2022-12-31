import React, {useEffect, useState} from "react";
import { signOut , onAuthStateChanged} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import Profile from "./Profile";
import Navbar from "./Navbar";


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
            <Navbar name={userName} click={handleSignOut}/>
            <Profile name={userName} />
        </div>
    )
}


export default Home;