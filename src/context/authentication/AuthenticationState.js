import React, { useReducer, useCallback } from 'react';
import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT } from '../types';
import AuthenticationContext from './authenticationContext';
import authenticationReducer from './authenticationReducer';

const AuthenticationState = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  const login = useCallback(
    (userInputData) => {
      dispatch({ type: AUTHENTICATION_LOGIN, payload: userInputData });
      console.log(userInputData);
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch({ type: AUTHENTICATION_LOGOUT });
  }, [dispatch]);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationState;
