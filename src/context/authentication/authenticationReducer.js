import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT } from '../types';

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN: {
      return {
        ...state,
        cookie: action.payload,
        isAuthenticated: true,
      };
    }

    case AUTHENTICATION_LOGOUT: {
      return {
        ...state,
        cookie: null,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

export default authenticationReducer;
