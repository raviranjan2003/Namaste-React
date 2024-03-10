import React from "react";
import ReactDOM from "react-dom/client";

//todo React.createElement => Object => When render to browser, it converted into HTML

// const heading = React.createElement("h1", {}, "Hello Raviii !");
// console.log(heading);

//! JSX => It is not HTML, it HTML like syntax

//This is not a pure javascript code, which understood by browser,
//first of all, it is transpiled before it reaches the JS engine
//transpiled ==> converted into ES6 which browser understand.

//Transpiling is done by PARCEL, one more thing to keep in mind
// parcel is not doing this transpiling by it's own, it is a manager
// it appoint BABEL for the same job.

//todo JSX => React.createElement() => JS Object => Converted into HTML

const jsxHeading = <h1>Namaste React using JSX</h1>
// console.log(jsxHeading);

//? React Componet
//todo Class Based Component - OLD

//todo Functional Component - NEW
//? A function which returns ReactElement is known as functional component.

const title = (
    <h1>Namaste React</h1>
)
const Title = () => {
    return (
        <h1>Namaste React</h1>
    )
}
const HeadingComponent = () => {
    return (
        <>
            {title}
            <Title />
            {Title()}
            {/* line 42 and 43 both are same, in 43 we calling the function */}
            <h1>Namaste React using functinal component.</h1>
        </>
    )
}
// same thing
const HeadingComponent1 = () => <h1>Namaste React using functinal component.</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);