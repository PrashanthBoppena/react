// src/redux/sagas/customerSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCustomer,getCustomerAccounts } from '../../services/apis/customerService';
import {
  GET_CUSTOMER_REQUEST,
  getCustomerSuccess,
  getCustomerFailure,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  setCustomerProfile,
  GET_CUSTOMER_ACCOUNTS_REQUEST,
  getCustomerAccountsSuccess,
  getCustomerAccountsFailure,
  GET_CUSTOMER_ACCOUNTS_SUCCESS,
  GET_CUSTOMER_ACCOUNTS_FAILURE,
  setCustomerAccountsProfile
} from '../actions/customerActions';



function* customerSaga({ type, payload }) 
{
  console.log("customerSaga==>"+JSON.stringify(type));
 
switch (type) {
    case GET_CUSTOMER_REQUEST:
        console.log("GET_CUSTOMER_REQUEST saga"+JSON.stringify(payload));
        try {
            
            const customer = yield call(getCustomer, payload.customerID, payload.tenantID);
            console.log("GET_CUSTOMER_REQUEST res saga"+JSON.stringify(customer));
            yield put(getCustomerSuccess(customer));
          } catch (error) {
            console.log("GET_CUSTOMER_REQUEST err");
           console.log(error.message)
            yield put(getCustomerFailure(error.message));
          }
    break;
    
    case GET_CUSTOMER_SUCCESS:
       console.log("GET_CUSTOMER_SUCCESS saga res"+JSON.stringify(payload));
        yield put(setCustomerProfile(payload));
//yield put(getCustomerSuccess(payload));
    break;
    case GET_CUSTOMER_FAILURE:
      console.log("GET_CUSTOMER_FAILURE saga res"+JSON.stringify(payload));
        yield put(setCustomerProfile(payload));
    break;


    case GET_CUSTOMER_ACCOUNTS_REQUEST:
     
        try {
          console.log("1.GET_CUSTOMER_ACCOUNTS_REQUEST saga"+JSON.stringify(payload)); 
            const customerAccounts = yield call(getCustomerAccounts, payload.customerID, payload.tenantID);
            console.log("GET_CUSTOMER_ACCOUNTS_REQUEST responsesaga"+JSON.stringify(customerAccounts));
          
            yield put(getCustomerAccountsSuccess(customerAccounts));
          } catch (error) {
           console.log(error.message)
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
export default customerSaga;
