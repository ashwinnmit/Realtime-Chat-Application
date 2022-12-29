import React from "react";
import "./navbar.css"

function Navbar(props){
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary discord-background-purple">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#ffffff" className="bi bi-dice-5 logo" viewBox="0 0 16 16">
        <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
        <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
    </a>
    <a className="navbar-brand text-black big-text" href="#">Dice</a>
    <button className="navbar-toggler text-background" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-black"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav d-flex">
        <li className="nav-item p-2">
          <a className="nav-link active text-black small-text" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-black small-text" href="#">Profile</a>
        </li>
        <li className="nav-item p-2 place-right">
          <div className="profile">
            <a className="nav-link text-black small-text" href="#">Hello, {props.name}</a>
            <svg xmlns='http://www.w3.org/2000/svg' className="pic" width='10' height='10' transform='scale(5)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M20 0L0 10v10l20-10zm0 10v10l20 10V20z'  stroke-width='1' stroke='none' fill='hsla(258.5,59.4%,59.4%,1)'/><path d='M20-10V0l20 10V0zm0 30L0 30v10l20-10zm0 10v10l20 10V40z'  stroke-width='1' stroke='none' fill='hsla(339.6,82.2%,51.6%,1)'/></svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}


export default Navbar;