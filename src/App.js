import React, { useContext } from 'react';
import './App.css';
// import { Auth, Home, Login, Logout } from './pages';
import { Auth, AuthLogout, Home, GetCourses } from './pages';
// import AuthContext from './context/auth/authContext';
import AuthenticationContext from './context/authentication/authenticationContext';

function App() {
  // const authContext = useContext(AuthContext);
  // const { isAuthenticated, errorMessage, checkCookie } = authContext;
  // const { checkCookie } = authContext;

  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated } = authenticationContext;

  // useEffect(() => {
  //   checkCookie();
  // }, [checkCookie]);

  return (
    <div className='App'>
      <h1>Practice Authentication App</h1>
      <hr />

      <Home />
      {/* {!isAuthenticated && <Login errorMessage={errorMessage} />}
      {isAuthenticated && <Logout />} */}
      <hr />
      <GetCourses />
      <hr />
      {!isAuthenticated ? (
        <Auth />
      ) : (
        <>
          <AuthLogout />
          {/* <GetPosts /> */}
        </>
      )}
    </div>
  );
}

export default App;
