import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthenticationState from './context/authentication/AuthenticationState';
import CoursesState from './context/courses/CoursesState';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <CoursesState>
        <App />
      </CoursesState>
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById('root')
);
