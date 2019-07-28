import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Greeting = () => {
  const context = useContext(UserContext);
  console.log(context);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, {context.name}!</h1>
    </div>
  );
};

export default Greeting;
