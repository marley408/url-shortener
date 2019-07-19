import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';
import Register from '../Components/Register';

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
