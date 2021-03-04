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

export const loginUser = (username, password) => {
  let result = false;

  if (username === 'bobcobb' && password === 'test123') {
    result = true;
  }

  return result;
};

export const setLoginCookie = (username) => {
  console.log(username);
  Cookies.set('user_cookie', username);
  console.log(Cookies.get('user_cookie'));
};

export const removeLoginCookie = () => {
  Cookies.remove('user_cookie');
};

export const getLoginCookie = () => {
  const cookieValue = Cookies.get('user_cookie');
  return cookieValue;
};
