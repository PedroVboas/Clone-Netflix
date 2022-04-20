import React from "react";
import "./Header.css";
import Logo from "../imagens/netflixlogo.jpg"

export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
             <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Netflix" />
                </a>
             </div>
             <div className="header--user">
                 <a href="/">
                <img src="https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png" alt="User"/>
                 </a>
             </div>
        </header>
    );
}