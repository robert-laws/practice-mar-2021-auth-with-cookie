import React, { useContext, useEffect } from 'react';
import './App.css';
import { Home, Login } from './pages';
import AuthContext from './context/auth/authContext';

function App() {
  const authContext = useContext(AuthContext);
  const { isLoading, user } = authContext;

  return (
    <div className='App'>
      <h1>Practice Authentication App</h1>
      <hr />
      <Home />
      {!user && <Login />}
    </div>
  );
}

export default App;
