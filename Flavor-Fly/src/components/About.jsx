import React from 'react'
import User from './User';
import UserClass from './UserClass';
import userContext from '../utils/userContext.js';

//class-based About component
class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor called !");
  }
   componentDidMount() {
    // console.log("Parent Component mounted !");
  }
  //! Since we cannot use hooks in class-based components
  //! we cannot use useContext hooks
  //! So we'll use <UserContext.Consumer> component

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React !</h2>
        <hr />
        <userContext.Consumer>
          {({ loggedInUser }) => (
            <h1 style={{ fontSize: "bold" }}>LoggedIn User: {loggedInUser}</h1>
          )}
        </userContext.Consumer>
        <User />
        <hr />
        <UserClass name="Ravi"/>
     </div>
    )
  }
}

// const About = () => {
//   console.log("Parent Render")
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>This is Namaste React !</h2>
//         <hr />
//         <User />
//         <hr />
//         <UserClass name="Ravi"/>
//     </div>
//   )
// }

export default About;


/* React lifecycle

-Parent constructor called
-Parent render
  -Child1 constructor called
  -Child1 render

  -Child2 constructor called
  -Child2 render

  <DOM updated in SINGLE BATCH>

  -Child1 componentDidMount
  -Child2 componentDidMount
  
-Parent componentDidMount

*/