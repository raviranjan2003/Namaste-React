import React from "react";
import ReactDOM  from "react-dom/client";

//todo React.createElement => Object => When render to browser, it converted into HTML

// const heading = React.createElement("h1", {}, "Hello Raviii !");
// console.log(heading);

//! JSX => It is not HTML, it HTML like syntax

//?This is not a pure javascript code, which understood by browser,
//?first of all, it is transpiled before it reaches the JS engine
//?transpiled ==> converted into ES6 which browser understand.

//?Transpiling is done by PARCEL, one more thing to keep in mind
//? parcel is not doing this transpiling by it's own, it is a manager
//? it appoint BABEL for the same job.

//todo JSX => React.createElement() => JS Object => Converted into HTML

const jsxHeading = <h1>Namaste React using JSX</h1>
// console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);