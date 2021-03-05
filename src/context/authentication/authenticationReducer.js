import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT } from '../types';

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case AUTHENTICATION_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};

export default authenticationReducer;
