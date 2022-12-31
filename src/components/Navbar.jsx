import React from "react";
import "./navbar.css"
import { Avatar } from "react-lorem-ipsum";

function Navbar(props){

  const sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  function menuBtnChange() {
    if(sidebar.classList.contains("open")){
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns className
    }else {
      closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns className
    }
   }

  const handleClickButton = ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
  }


    return (
      <div className="sidebar">
      <div className="logo-details">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#1d1b31" className="bi bi-dice-5 icon" viewBox="0 0 16 16">
        <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
        <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
          <div className="logo_name">Dice</div>
          <i className='bx bx-menu' id="btn" onClick={handleClickButton}></i>
      </div>
      <ul className="nav-list">
        <li>
            <i className='bx bx-search' onClick={handleClickButton}></i>
           <input type="text" placeholder="Search..."/>
           <span className="tooltip">Search</span>
        </li>
        <li data-bs-toggle="modal" data-bs-target="#staticBackdrop">
         <a href="#">
           <i className='bx bx-user' ></i>
           <span className="links_name">User</span>
         </a>
         <span className="tooltip">User</span>
       </li>
       <li>
         <a href="#">
           <i className='bx bx-chat' ></i>
           <span className="links_name">Messages</span>
         </a>
         <span className="tooltip">Messages</span>
       </li>
       <li className="profile">
           <div className="profile-details">
             {/* <img src="C:/Users/Asus/Documents/GitHub/NH2023_V1/src/assets/Ashwin.png" alt="profileImg" /> */}
             <Avatar data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
             <div className="name_job">
               <div className="name">{props.name}</div>
               {/* <div className="job">Web designer</div> */}
             </div>
           </div>
           <i className='bx bx-log-out' id="log_out"  onClick={props.click}></i>
       </li>
      </ul>
    </div>
    )
}


export default Navbar;