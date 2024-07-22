import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_HEADER = import.meta.env.VITE_AUTH_HEADER;

const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;
const REFRESH_TOKEN_PATH = import.meta.env.VITE_REFRESH_TOKEN_PATH;
const GET_CUSTOMER_PATH = import.meta.env.VITE_GET_CUSTOMER_PATH;
const VITE_API_HEADER_KEY=import.meta.env.VITE_API_HEADER_KEY;
let authToken = null;

export const login = async (loginID, password, tenantID) => {
    console.log("login entered.....")
    
};

export const refreshToken = async () => {
    const response = await axios.get(`${BASE_URL}${REFRESH_TOKEN_PATH}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'HearKey': AUTH_HEADER
        }
    });

    authToken = response.data.result[0].authToken;
    return authToken;
};

const getAuthToken = async () => {
    if (!authToken) {
        await login('swapna66677777@gccccc.com', '123456', '10231');
    } else {
        await refreshToken();
    }
    return authToken;
};

export const apiCall = async (url, method = 'GET', data = {}) => {
    const token = await getAuthToken();
    console.log("api call is calling::")
    const config = {
        method,
        url: `${BASE_URL}${url}`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'HearKey': AUTH_HEADER
        }
    };

    if (method === 'POST') {
        config.data = data;
    }

    const response = await axios(config);
    console.log("api call is calling===::"+JSON.stringify(response))
    return response.data;
};
