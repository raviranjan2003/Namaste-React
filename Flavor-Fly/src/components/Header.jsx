import { useState } from "react";
import img from "../assets/smoking-burger-with-lettuce-3624ld.png"

import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("LogIn");

    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={img}/>
                </div>
                
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li>Cart</li>
                        <button style={{ padding : "5px 20px"}} onClick={() => {
                            btnName === "LogIn" ?
                            setBtnName("LogOut") :
                            setBtnName("LogIn")
                        }}>{btnName}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;