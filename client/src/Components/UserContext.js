import React, { useState, createContext } from 'react';

// this is imported to the components that use this provider
export const UserContext = createContext();

// create user provider. this holds info and passes it down to
export const UserProvider = props => {
  const [name, setName] = useState('marley');
  const [id, setId] = useState('1234');

  return (
    <UserContext.Provider value={{ name, setName, id, setId }}>
      {props.children}
    </UserContext.Provider>
  );
};
