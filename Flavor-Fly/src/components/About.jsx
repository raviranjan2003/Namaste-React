import React from 'react'
import User from './User';
import UserClass from './UserClass';

//class-based About component
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor called !");
  }
  componentDidMount() {
    console.log("Parent Component mounted !");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React !</h2>
        <hr />
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