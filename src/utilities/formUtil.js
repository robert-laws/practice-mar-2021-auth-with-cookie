import Cookies from 'js-cookie';

// validation
export const validateField = (field, validationType) => {
  let validResult = false;

  switch (validationType) {
    case 'length':
      if (field.length >= 5) {
        validResult = true;
      }
      break;

    default:
      break;
  }

  return validResult;
};

// login and cookies
export const loginUser = (username, password) => {
  let result = false;

  if (username === 'bobcobb' && password === 'test123') {
    result = true;
  }

  return result;
};

export const setMyCookie = (username) => {
  console.log(username);
  Cookies.set('user_cookie', username);
  console.log(Cookies.get('user_cookie'));
};

export const removeMyCookie = () => {
  Cookies.remove('user_cookie', { path: '' });
};

export const getMyCookie = () => {
  const cookieValue = Cookies.get('user_cookie');
  return cookieValue;
};
