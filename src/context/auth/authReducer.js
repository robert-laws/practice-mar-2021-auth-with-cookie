import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../types';
import { setLoginCookie, removeLoginCookie } from '../../utilities/formUtil';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      setLoginCookie(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: null,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    }

    case LOGOUT: {
      removeLoginCookie();
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
