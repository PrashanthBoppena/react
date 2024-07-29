
//walletReducer.js
const initialState = {
  wallet: null,
};

export default (state = initialState, action) =>{
   
  switch (action.type) {
    case 'GET_WALLET_BALANCE_REQUEST':
      return state;
      case 'SET_WALLET_BALANCE':
        return  action.payload;
    default:
      return state;
  }
};
