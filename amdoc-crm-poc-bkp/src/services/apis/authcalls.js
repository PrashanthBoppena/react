import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;
const API_HEADER_KEY = import.meta.env.VITE_API_HEADER_KEY;

export const userLogin = async (loginID, password) => {
  const response = await axios.post(`${API_BASE_URL}${LOGIN_PATH}`, {
    loginID,
    password,
    tenantID: '10231',
    moduleName: ''
  }, {
    headers: {
      [API_HEADER_KEY]: `Bearer ${API_HEADER_KEY}`
    }
  });

  console.log("auth resposne login::"+JSON.stringify(response.data));
  // return response.data;
  return response.data;
};

export const verifyToken = async (token) => {
    try {
      const response = await axios.post('/api/verify-token', null, {
        headers: {
          Authorization: token,
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
  
      return { statusCode: '500', message: 'An error occurred. Please try again.' };
    }
  };

  