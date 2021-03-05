import React, { useContext } from 'react';
import AuthenticationContext from '../context/authentication/authenticationContext';

export const AuthLogout = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { logout } = authenticationContext;

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
