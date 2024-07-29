import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_HEADER_KEY = import.meta.env.VITE_API_HEADER_KEY;
const GET_CUSTOMER_PATH = import.meta.env.VITE_GET_CUSTOMER_PATH;
const GET_CUSTOMER_ACCOUTNS = import.meta.env.VITE_GET_CUSTOMER_ACCOUTNS;
const  MOCK_API_BASE_URL=import.meta.env.VITE_MOCK_API_BASE_URL;

const authToken = localStorage.getItem('authToken');


export const getCustomerAccounts = async (customerID, tenantID) => {
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

//get ticket history
export const fetchTickets = async (page, rowsPerPage) => {

  try
  {
const response = await axios.get(`${MOCK_API_BASE_URL}/comments?_start=${page}&_limit=${rowsPerPage}`, {
  params: { page, rowsPerPage,authToken },
  headers: {
      [API_HEADER_KEY]: '',
        'Authorization': `Bearer ${authToken}`
    }
});

return response.data;
} catch (error) {
  console.error('Error fetching  fetchTickets details:', error);
  throw error;
}
};