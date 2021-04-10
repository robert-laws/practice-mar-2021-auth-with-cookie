import React, { useContext, useEffect } from 'react';
import './App.css';
import { Auth, AuthLogout, Home, GetCourses } from './pages';
import AuthenticationContext from './context/authentication/authenticationContext';

function App() {
  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated, checkCookie } = authenticationContext;

  useEffect(() => {
    checkCookie();
  }, [checkCookie]);

  return (
    <div className='App'>
      <h1>Practice Authentication App</h1>
      <hr />

      <Home />
      <hr />

      <hr />

      {!isAuthenticated ? (
        <Auth />
      ) : (
        <>
          <AuthLogout />
          {/* <GetCourses /> */}
        </>
      )}
    </div>
  );
}

export default App;
