import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
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

export default About;