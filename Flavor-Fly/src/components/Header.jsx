import { useContext, useState } from "react";
import img from "../assets/smoking-burger-with-lettuce-3624ld.png"

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(userContext);

    //Subscribing to our store for data fetching
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={img}/>
                </div>
                
                <div className="nav-items">
                    <ul>
                        <li>{onlineStatus ? <span style={{color:"green"}}>Online</span> : <span style={{color:"red"}}>Offline</span>}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li><Link to="/cart">Cart: {cartItems.length}</Link></li>
                        {loggedInUser ? 
                        <button
                            style={{ padding: "5px 20px", cursor: "pointer"}}
                        >{loggedInUser}</button> :
                        <button style={{ padding : "5px 20px", cursor: "pointer"}} onClick={() => {
                            btnName === "LogIn" ?
                            setBtnName("LogOut") :
                            setBtnName("LogIn")
                        }}>{btnName}</button>}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;