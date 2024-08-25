import { useState } from "react";
import img from "../assets/smoking-burger-with-lettuce-3624ld.png"

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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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