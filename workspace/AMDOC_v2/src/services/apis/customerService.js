import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_HEADER_KEY = import.meta.env.VITE_API_HEADER_KEY;
const GET_CUSTOMER_PATH = import.meta.env.VITE_GET_CUSTOMER_PATH;
const GET_CUSTOMER_ACCOUTNS = import.meta.env.VITE_GET_CUSTOMER_ACCOUTNS;

const getAuthToken = () => localStorage.getItem('authToken');
export const getCustomer = async (customerID, tenantID) => {
  const authToken = getAuthToken();
    console.log("getCustomer api call",customerID);
    try
    {
  const response = await axios.get(`${API_BASE_URL}${GET_CUSTOMER_PATH}`, {
    params: { customerID, tenantID,authToken },
    headers: {
        [API_HEADER_KEY]: '',
          'Authorization': `Bearer ${authToken}`
      }
  });
  console.log("getCustomer api call res",JSON.stringify(response.data));
  return response.data;
 // return response.data;
} catch (error) {
    console.error('Error fetching get customer details:', error);
    throw error;
  }
};

export const getCustomerAccounts = async (customerID, tenantID) => {
  const authToken = getAuthToken();
  console.log("getCustomerAccounts api call",customerID);
  try
  {
const response = await axios.get(`${API_BASE_URL}${GET_CUSTOMER_ACCOUTNS}`, {
  params: { customerID, tenantID,authToken },
  headers: {
      [API_HEADER_KEY]: '',
        'Authorization': `Bearer ${authToken}`
    }
});
return response.data;
} catch (error) {
  console.error('Error fetching  getCustomerAccounts details:', error);
  throw error;
}
};