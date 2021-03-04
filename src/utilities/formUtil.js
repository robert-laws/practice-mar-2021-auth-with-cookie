import Cookies from 'js-cookie';

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

export const login = (username, password) => {
  let result = false;

  if (username === 'bobcobb' && password === 'test123') {
    Cookies.set('user_cookie', username);
    result = true;
  }

  return result;
};

export const getLoginCookie = () => {
  let cookieValue = Cookies.get('user_cookie');
  return cookieValue;
};
