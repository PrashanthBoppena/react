// src/redux/reducers/customerReducer.js
import {
    GET_CUSTOMER_ACCOUNTS_REQUEST,
    GET_CUSTOMER_ACCOUNTS_SUCCESS,
    GET_CUSTOMER_ACCOUNTS_FAILURE,
    SET_CUSTOMER_ACCOUNTS_PROFILE
  } from '../actions/customerActions';
  
  const initialState = {
    customerAccounts: null,
    loading: false,
    error: null
  };
  
  const customerAccountsReducer = (state = initialState, action) => {
    console.log("===2.this is reducer =======65===action.type===>"+action.type)
    switch (action.type) {
     

            case GET_CUSTOMER_ACCOUNTS_REQUEST:
              return { ...state, loading: true, error: null };

            case GET_CUSTOMER_ACCOUNTS_SUCCESS:
              return { ...state, loading: false, customerAccounts: action.payload };
            case GET_CUSTOMER_ACCOUNTS_FAILURE:
              return { ...state, loading: false, error: action.payload };
              case SET_CUSTOMER_ACCOUNTS_PROFILE:
 console.log("setaccountprofile reducer rs:"+JSON.stringify(action.payload));
                  return {...state, loading: false, customerAccounts: action.payload }  ;
      default:
        return state;
    }
  };
  
  export default customerAccountsReducer;
  