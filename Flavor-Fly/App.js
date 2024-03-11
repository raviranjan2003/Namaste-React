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
* Footer
    - Copyrights
    - Some Links
*
*
*/
const AppLayout = () => {
    return (
        <>
            <div className="app" >
            
            </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />);