import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';
import Register from '../Components/Register';

const Landing = () => {
  const [isLoginShowing, setState] = useState(true);
  console.log(isLoginShowing);

  const renderForm = () => {
    if (isLoginShowing) {
      return <Login toggleForm={() => setState(!isLoginShowing)} />;
      // Inside of Login
      // props = { toggleForm: whatever }
    } else {
      return <Register toggleForm={() => setState(!isLoginShowing)} />;
    }
  };

  return (
    <div>
      <Navbar />
      {renderForm()}
    </div>
  );
};

export default Landing;
