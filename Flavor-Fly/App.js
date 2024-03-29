import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

/*
* Header
    - Logo
    - Navlinks
* Body
    - Search Restaurant
    - Restaurant Container
        - Restaurant Card
            - Name, Img, Description, Reating, TimeOfDelivery
* Footer
    - Copyrights
    - Some Links
*
*
*/
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
const RestaurantCard = (props) => {
    const { name, type, rating } = props;
    return (
        <>
            <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
                <img 
                className="res-logo"
                alt="res-logo" 
                src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574" />
                <h3>{name}</h3>
                <h4>{type}</h4>
                <h4>{rating} stars</h4>
            </div>
        </>
    )
}
const Body = () => {
    return (
        <>
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container" >
                    <RestaurantCard
                        name = "Meghna food" 
                        type = "Noodles"
                        rating = "4.5"
                    />
                    <RestaurantCard 
                        name = "KFC"
                        type = "Chicken"
                        rating = "4.6"
                    />
                    <RestaurantCard 
                        name = "MacD"
                        type = "Burger"
                        rating = "4.4"
                    />
                    <RestaurantCard 
                        name = "Dominos"
                        type = "Pizza"
                        rating = "4.6"
                    />
                </div>
            </div>
        </>
    )
}
const AppLayout = () => {
    return (
        <>
            <div className="app" >
                {/* Header Component */}
                <Header />
                {/* Body */}
                <Body />
                {/* Footer */}
            </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />);