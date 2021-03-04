import { LOGIN, LOGOUT, LOGIN_ERROR } from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        errorMessage: null,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        user: action.payload,
        errorMessage: null,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
