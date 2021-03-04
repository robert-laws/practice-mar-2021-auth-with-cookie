import React, { useState, useEffect } from 'react';
import { validateField, loginResult } from '../utilities/formUtil';

export const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    const usernameValid = validateField(loginForm.username, 'length');
    const passwordValid = validateField(loginForm.password, 'length');

    if (usernameValid === false || passwordValid === false) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [loginForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validForm) {
    } else {
      console.log('Form is Not Valid');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};
