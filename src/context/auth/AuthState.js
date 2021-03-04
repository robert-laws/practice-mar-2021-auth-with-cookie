import React, { useReducer, useCallback } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../types';
import { loginUser, getLoginCookie } from '../../utilities/formUtil';

const AuthState = ({ children }) => {
  const initialState = {
    cookie: Cookies.get('user_cookie'),
    isAuthenticated: null,
    isLoading: true,
    errorMessage: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(
    (username, password) => {
      try {
        const login = loginUser(username, password);

        if (login) {
          dispatch({ type: LOGIN_SUCCESS, payload: username });
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
    dispatch({ type: LOGOUT });
  }, [dispatch]);

  const checkAuthentication = () => {
    const currentAuth = getLoginCookie();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        checkAuthentication,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
