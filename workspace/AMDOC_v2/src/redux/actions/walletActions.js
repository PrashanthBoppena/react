// walletActions.js

export const GET_WALLET_BALANCE_REQUEST = 'GET_WALLET_BALANCE_REQUEST';
export const GET_WALLET_BALANCE_SUCCESS = 'GET_WALLET_BALANCE_SUCCESS';
export const GET_WALLET_BALANCE_FAILURE = 'GET_WALLET_BALANCE_FAILURE';

export const getWalletBalanceRequest = (customerID, tenantID, authToken) => {
    console.log("1.wallet action")

    return {
    
  type: GET_WALLET_BALANCE_REQUEST,
  payload: {
    customerID, tenantID, authToken 
  }
};};

export const getWalletBalanceSuccess = (data) => ({
  type: GET_WALLET_BALANCE_SUCCESS,
  payload: data,
});

export const getWalletBalanceFailure = (error) => ({
  type: GET_WALLET_BALANCE_FAILURE,
  payload: error,
});

export const setWalletBalance = (wallet) => ({
  type: 'SET_WALLET_BALANCE',
  payload: wallet
});