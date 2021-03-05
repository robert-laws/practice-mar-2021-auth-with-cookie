import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthenticationState from './context/authentication/AuthenticationState';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <App />
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById('root')
);
