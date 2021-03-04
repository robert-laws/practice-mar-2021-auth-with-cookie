import React, { useReducer, useCallback } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN, LOGOUT, LOGIN_ERROR } from '../types';
import { getLoginCookie } from '../../utilities/formUtil';

const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    isLoading: true,
    errorMessage: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(
    (username, password) => {
      try {
        const login = getLoginCookie();
        console.log(login);

        if (login) {
          dispatch({ type: LOGIN, payload: login });
        } else {
          dispatch({ type: LOGIN_ERROR, payload: 'Login Error' });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT, payload: null });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
