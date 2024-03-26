
import React from "react";
import "../header/header.css"

function Header() {
    return (
        <div className="header">
         
         <div className="logo">
            TRAINING-CRT
         </div>    
         <a href="/upload" className="nav-link">Upload File</a>
         
         <div className="profile">
          <div className="profile-content">P</div>
         </div>
        </div>
    );
}

export default Header;