import React, { useReducer, useCallback } from 'react';
import { GET_POSTS } from '../types';
import PostsContext from './postsContext';
import postsReducer from './postsReducer';

const PostsState = ({ children }) => {
  const initialState = {
    post: null,
    posts: null,
    loadingPosts: true,
    postsError: null,
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getPosts = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/posts/`;

    try {
      const response = await fetch(restURL);
      const allPosts = await response.json();
      console.log(allPosts);

      if (allPosts) {
        dispatch({ type: GET_POSTS, payload: allPosts });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <PostsContext.Provider
      value={{
        post: state.post,
        posts: state.posts,
        loadingPosts: state.loadingPosts,
        postsError: state.postsError,
        getPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
