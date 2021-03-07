import React, { useState, useContext } from 'react';
import AuthenticationContext from '../context/authentication/authenticationContext';

export const Auth = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { login } = authenticationContext;

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userInput);
  };

  return (
    <div>
      <h2>Auth - Login Required</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Username:{' '}
          <input
            type='text'
            name='username'
            id='username'
            value={userInput.username}
            onChange={handleChange}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type='password'
            name='password'
            id='password'
            value={userInput.password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
