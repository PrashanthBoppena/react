import axios from 'axios';

const API_BASE_URL = 'http://172.16.111.73:8076'
const LOGIN_PATH = '/ums/userLogin'
const API_HEADER_KEY = '34djfyr7459slaqwir974mcnv012lsj84ndrp46do';
const TENANT_ID = '10231';
const GET_CUSTOMER_PATH='/oms/getCustomer'
const GET_CUSTOMER_ACCOUNTS_PATH='/oms/getCustomerAccounts';

export async function ValidateUser(loginID, password) {
    console.log('ValidateUser checking')
  if (loginID === 'swapna66677777@gccccc.com' && password === '123456') {
    try {
      const response = await axios.post(
        `${API_BASE_URL}${LOGIN_PATH}`,
        {
          loginID: loginID,
          password: password,
          tenantID: `${TENANT_ID}`,
          moduleName: ''
        },
        {
          headers: {
            [API_HEADER_KEY]: `Bearer ${API_HEADER_KEY}`
          }
        }
      );

      //console.log(response.data);
      return response.data; // Return the response data

    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Failed to sign in. Please check your credentials.'); // Throw error to handle in calling code
    }
  } else {
    throw new Error('Invalid credentials.'); // Throw error to handle in calling code
  }
}

export async function getCustomer(customerID,Token) {
    console.log('getCustomer call')
  
    try {
      const response = await axios.get(
        `${API_BASE_URL}${GET_CUSTOMER_PATH}?customerID=${customerID}&tenantID=${TENANT_ID}`,
        
        {
          headers: {
            [API_HEADER_KEY]: `Bearer ${API_HEADER_KEY}`,
            Authorization:`Bearer ${Token}`
          }
        }
      );

      //console.log(response.data);
      return response.data; // Return the response data

    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Failed to sign in. Please check your credentials.'); // Throw error to handle in calling code
    }

}

const getCustomerAccounts= async(customerID,Token)=> {
  console.log('getCustomerAccounts call')

  try {
    const response = await axios.get(
      `${API_BASE_URL}${GET_CUSTOMER_ACCOUNTS_PATH}?customerID=${customerID}&tenantID=${TENANT_ID}`,
      
      {
        headers: {
          [API_HEADER_KEY]: `Bearer ${API_HEADER_KEY}`,
          Authorization:`Bearer ${Token}`
        }
      }
    );

    //console.log(response.data);
    return response.data; // Return the response data

  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Failed to sign in. Please check your credentials.'); // Throw error to handle in calling code
  }

}

export {getCustomerAccounts}