import { GET_POST, GET_POSTS, UPDATE_POST } from '../types';

const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }

    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case UPDATE_POST: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
