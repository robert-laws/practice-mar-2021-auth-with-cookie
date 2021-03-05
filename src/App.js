import React, { useContext, useEffect } from 'react';
import './App.css';
import { Home, Login, Logout } from './pages';
import AuthContext from './context/auth/authContext';

function App() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, errorMessage, checkCookie } = authContext;

  useEffect(() => {
    checkCookie();
  }, [checkCookie]);

  return (
    <div className='App'>
      <h1>Practice Authentication App</h1>
      <hr />

      <Home />
      {!isAuthenticated && <Login errorMessage={errorMessage} />}
      {isAuthenticated && <Logout />}
    </div>
  );
}

export default App;
