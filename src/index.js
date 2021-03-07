import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthenticationState from './context/authentication/AuthenticationState';
import PostsState from './context/posts/PostsState';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <PostsState>
        <App />
      </PostsState>
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById('root')
);
