import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

export const Logout = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
