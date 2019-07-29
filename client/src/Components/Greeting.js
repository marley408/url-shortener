import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Greeting = () => {
  const context = useContext(UserContext);

  return (
    <div className="jumbotron col-lg-8 mx-auto">
      <h1 className="display-4">Hello, {context.globalName}!</h1>
    </div>
  );
};

export default Greeting;
