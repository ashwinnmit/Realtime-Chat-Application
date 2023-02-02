import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./profile.css";
import { db } from "../firebase";


function Profile(props)
{

    var newAbout = "";
    var aboutUserName = "";
    const [about, setAbout] = useState("");

    const handleEdit = ()=>{
        const about = document.querySelector(".about");
        const status = about.getAttribute("contentEditable");
        if(status==="true"){
            about.setAttribute("contentEditable","false");
            newAbout = about.innerText;
            console.log(newAbout);
        }
        else{
            about.setAttribute("contentEditable", "true");
            about.focus();
        }
    }   

    useEffect(()=>{
        getMovies();
    },[]);

    useEffect(()=>{
        console.log("This " , about);
    },[about]);
    const getMovies = ()=>{
        const movieCollectionRef = collection(db, "About");
        getDocs(movieCollectionRef).then(response =>{
            const abouts = response.docs.map(doc =>({
                data: doc.data(), 
                id:doc.id
            }))
            setAbout(abouts);
            aboutUserName = about[0].data.aboutUser;
            // const about = response.docs;
        }).catch(err =>{
            alert(err.message);
        })
    }
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog bg-dark border-styles">
                <div className="modal-content  bg-dark">
                    <div className="modal-header bg-dark profile-div">
                        <h1 className="modal-title fs-5 text-light username-profile" id="staticBackdropLabel">{props.name}</h1>
                        <svg onClick = {handleEdit} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        {/* <div data-bs-theme="dark"> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" class="bi bi-x" viewBox="0 0 16 16"
                                onClick={handleEdit}  data-bs-dismiss="modal">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            {/* data-bs-theme="dark" type="button" */}                  
                    </div>
                    <div className="modal-body text-light">
                        <p>About: </p>
                        <p className="about" contentEditable="false">{aboutUserName}</p>
                        {/* {about.map(a => <p className="about" contentEditable="false">{a.data.aboutUser}</p>)} */}
                    </div>
                    <div className="modal-footer">
                        <button onClick = {handleEdit} type="button" className="btn discord-background-purple" data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile;