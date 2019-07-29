import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Greeting = () => {
  const context = useContext(UserContext);
  const usersName = context.globalName;

  function upperCaseName(str) {
    if (str === null) {
      return;
    } else {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(' ');
    }
  }

  return (
    <div className="jumbotron col-lg-8 mx-auto">
      <h1 className="display-4">Hello, {upperCaseName(usersName)}!</h1>
    </div>
  );
};

export default Greeting;
