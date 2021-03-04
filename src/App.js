import React, { useContext } from 'react';
import './App.css';
import { Home, Login, Logout } from './pages';
import AuthContext from './context/auth/authContext';

function App() {
  const authContext = useContext(AuthContext);
  const { cookie, isAuthenticated } = authContext;

  console.log(cookie);

  return (
    <div className='App'>
      <h1>Practice Authentication App</h1>
      <hr />
      <Home />
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Logout />}
    </div>
  );
}

export default App;
