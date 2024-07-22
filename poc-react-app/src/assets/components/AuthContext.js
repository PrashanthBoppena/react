// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null); // State to store user data

  const login = (newUsername, newToken,userData) => {
    
    
   
    setUsername(newUsername);
    setToken(newToken);
    setUserData(userData);
  };

  const logout = () => {
    setUsername('');
    setToken('');
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ username, token,userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
