import React, { useReducer, useCallback } from 'react';
import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT } from '../types';
import AuthenticationContext from './authenticationContext';
import authenticationReducer from './authenticationReducer';
import {
  getMyCookie,
  setMyCookie,
  removeMyCookie,
} from '../../utilities/formUtil';

const AuthenticationState = ({ children }) => {
  const initialState = {
    cookie: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const login = useCallback(
    async ({ username, password }) => {
      let restURL = `${restRoot}/jwt-auth/v1/token`;

      try {
        const response = await fetch(restURL, {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          // error
          const error = await response.json();
          console.log(error.message);
          // dispatch({ type: LOGIN_ERROR, payload: error.message });
        } else {
          // success
          let user = await response.json();
          let token = await user.token;

          if (token) {
            setMyCookie(token);

            dispatch({
              type: AUTHENTICATION_LOGIN,
              payload: token,
            });
          }
        }
      } catch (error) {
        console.error('getToken error: ', error);
      }
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    removeMyCookie();

    dispatch({ type: AUTHENTICATION_LOGOUT });
  }, [dispatch]);

  const checkCookie = useCallback(() => {
    const myCookie = getMyCookie();

    if (myCookie) {
      dispatch({ type: AUTHENTICATION_LOGIN, payload: myCookie });
    }
  }, [dispatch]);

  return (
    <AuthenticationContext.Provider
      value={{
        cookie: state.cookie,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        checkCookie,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationState;
