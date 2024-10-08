import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu";

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

const AppLayout = () => {
    return (
        <>
            <div className="app" >
                {/* Header Component */}
                <Header />
                {/* Outlet--> It will be replaced by children routes which matches the route */}
                <Outlet />
                {/* Footer */}
            </div>
        </>
    )
}

const appRoute = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/contact',
                element : <Contact />
            },
            {
                path : '/restaurants/:resId',
                element : <RestaurantMenu />
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRoute} />);