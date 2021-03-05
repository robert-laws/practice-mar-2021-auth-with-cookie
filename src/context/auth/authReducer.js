import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        cookie: action.payload,
        isAuthenticated: true,
        isLoading: false,
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
      return {
        ...state,
        cookie: null,
        isAuthenticated: false,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
