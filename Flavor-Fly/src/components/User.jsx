import React, { useState } from 'react';

const User = () => {
  const [count] = useState(0);

  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>User Functional</h1>
        <h2>Name: </h2>
        <h3>Location: </h3>
        <h4>Contact: </h4>
    </div>
  )
}

export default User;