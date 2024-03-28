
import React from "react";
import "../header/header.css"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">

            <div className="logo" onClick={()=>{
               navigate("/dashboard");
            }}>
                TRAINING-CTR
            </div>

            <div className="nav-div">
                <a href="/upload" className="nav-link"  >Upload File</a>
                <a href="/ctrdata" className="nav-link" style={{paddingLeft:"17px"}}>CTR Data</a>
            </div>


            <div className="profile">
                <div className="profile-content">P</div>
            </div>
        </div>
    );
}

export default Header;