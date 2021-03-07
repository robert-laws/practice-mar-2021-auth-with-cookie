import React, { useState, useEffect, useContext } from 'react';
import { validateField } from '../utilities/formUtil';
import AuthContext from '../context/auth/authContext';

export const Login = ({ errorMessage }) => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;

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
      console.log(loginForm);
      login(loginForm.username, loginForm.password);
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
        {errorMessage && (
          <div style={{ color: 'red' }}>
            <h5>Error with login</h5>
          </div>
        )}
      </form>
    </div>
  );
};
