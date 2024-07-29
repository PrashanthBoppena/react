export const GET_CUSTOMER_REQUEST = 'GET_CUSTOMER_REQUEST';
export const GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS';
export const GET_CUSTOMER_FAILURE = 'GET_CUSTOMER_FAILURE';
export const SET_CUSTOMER_PROFILE='SET_CUSTOMER_PROFILE';
export const GET_CUSTOMER_ACCOUNTS_REQUEST = 'GET_CUSTOMER_ACCOUNTS_REQUEST';
export const GET_CUSTOMER_ACCOUNTS_SUCCESS = 'GET_CUSTOMER_ACCOUNTS_SUCCESS';
export const GET_CUSTOMER_ACCOUNTS_FAILURE = 'GET_CUSTOMER_ACCOUNTS_FAILURE';
export const SET_CUSTOMER_ACCOUNTS_PROFILE='SET_CUSTOMER_ACCOUNTS_PROFILE';


export const getCustomerRequest = (customerID, tenantID) => {
    console.log("1.getCustomerRequest action");
  
    return {
        type: GET_CUSTOMER_REQUEST,
        payload: { customerID, tenantID }
    };
  };



export const getCustomerSuccess = (customer) => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: customer
});

export const getCustomerFailure = (error) => ({
  type: GET_CUSTOMER_FAILURE,
  payload: error
});

export const setCustomerProfile = (customer) => ({
    type: SET_CUSTOMER_PROFILE,
    payload: customer
  });

  //get customer accounts

  export const getCustomerAccountsRequest = (customerID, tenantID) => {
    console.log("1.getCustomerAccountsRequest action");
  
    return {
        type: GET_CUSTOMER_ACCOUNTS_REQUEST,
        payload: { customerID, tenantID }
    };
  };



export const getCustomerAccountsSuccess = (customerAccounts) => ({
  type: GET_CUSTOMER_ACCOUNTS_SUCCESS,
  payload: customerAccounts
});

export const getCustomerAccountsFailure = (error) => ({
  type: GET_CUSTOMER_ACCOUNTS_FAILURE,
  payload: error
});

export const setCustomerAccountsProfile = (customerAccounts) => ({
    type: SET_CUSTOMER_ACCOUNTS_PROFILE,
    payload: customerAccounts
  });