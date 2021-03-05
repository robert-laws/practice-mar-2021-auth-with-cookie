import React, { useState, useContext } from 'react';
import AuthenticationContext from '../context/authentication/authenticationContext';

export const Auth = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { login } = authenticationContext;

  const [userInput, setUserInput] = useState({
    email: '',
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
          Email:{' '}
          <input
            type='text'
            name='email'
            id='email'
            value={userInput.email}
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
