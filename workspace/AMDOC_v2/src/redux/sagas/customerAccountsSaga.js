// src/redux/sagas/customerSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCustomer } from '../../services/apis/customerService';
import { getCustomerAccounts } from '../../services/apis/customerAccountsService';
import {

  GET_CUSTOMER_ACCOUNTS_REQUEST,
  getCustomerAccountsSuccess,
  getCustomerAccountsFailure,
  GET_CUSTOMER_ACCOUNTS_SUCCESS,
  GET_CUSTOMER_ACCOUNTS_FAILURE,
  setCustomerAccountsProfile
} from '../actions/customerActions';



function* customerAccountsSaga({ type, payload }) 
{
  console.log("customer accountsSaga==>"+JSON.stringify(type));
  switch (type) {
    
  }
switch (type) {
    


    case GET_CUSTOMER_ACCOUNTS_REQUEST:
     
        try {
          console.log("1.GET_CUSTOMER_ACCOUNTS_REQUEST saga"+JSON.stringify(payload)); 
            const customerAccounts = yield call(getCustomerAccounts, payload.customerID, payload.tenantID);
            console.log("GET_CUSTOMER_ACCOUNTS_REQUEST responsesaga"+JSON.stringify(customerAccounts));
          
            yield put(getCustomerAccountsSuccess(customerAccounts));
          } catch (error) {
           
            yield put(getCustomerAccountsFailure(error.message));
          }
    break;
    
    case GET_CUSTOMER_ACCOUNTS_SUCCESS:
       console.log("GET_CUSTOMER_ACCOUNTS_SUCCESS saga res"+JSON.stringify(payload));
        yield put(setCustomerAccountsProfile(payload));

    break;
    case GET_CUSTOMER_ACCOUNTS_FAILURE:
      
      console.log("GET_CUSTOMER_ACCOUNTS_FAILURE saga res"+JSON.stringify(payload));
        yield put(setCustomerAccountsProfile(payload));
    break;

    default: {
        throw new Error('Unexpected wallet Action saga Type.');
      }
  }
}
export default customerAccountsSaga;
