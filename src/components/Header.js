import React from "react";
import { FaGlobe } from 'react-icons/fa';
import "./Header.css";

function Header() {
    return (
        <div className="container-fluid">
            <div className="top-menu">
                <div className="left">

                </div>
                <div className="className main heading">
                    <h1>Designed By Denver</h1>
                </div>
                <div className="right">

                </div>
            </div>
            <div className="container-fluid">
                <div className="main-navigationBar" id="navbar">
                    <FaGlobe />
                    {/* <i className="fas fa-globe fa-lg"></i> */}
                    <span>Home</span>
                </div>
            </div>

        </div>

    )

}

export default Header;