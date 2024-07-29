// walletService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const WALLET_PATH = import.meta.env.VITE_WALLET_PATH;
const API_HEADER_KEY = import.meta.env.VITE_API_HEADER_KEY;


export const getWalletBalance = async (customerID, tenantID, authToken) => {
    try {
      console.log("getwalletbalce::"+authToken);
      const response = await axios.get(`${API_BASE_URL}${WALLET_PATH}`, {
        params: {
          customerID,
          tenantID
        },
        headers: {
            [API_HEADER_KEY]: '',
              'Authorization': `Bearer ${authToken}`
          }
      });
      console.log("getwalletbalce response::"+JSON.stringify(response));
      return response.data;
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      throw error;
    }
  };