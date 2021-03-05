import React, { useReducer, useCallback } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../types';
import {
  loginUser,
  getMyCookie,
  setMyCookie,
  removeMyCookie,
} from '../../utilities/formUtil';

const AuthState = ({ children }) => {
  const initialState = {
    cookie: null,
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
          setMyCookie(username);
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
    removeMyCookie();
    dispatch({ type: LOGOUT });
  }, [dispatch]);

  const checkCookie = useCallback(() => {
    const myCookie = getMyCookie();
    if (myCookie) {
      dispatch({ type: LOGIN_SUCCESS, payload: myCookie });
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        cookie: state.cookie,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        checkCookie,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
