import * as ACTION from '@/constants/constants';
import {call,put,select, all, takeEvery, takeLatest, takeLeading, takeMaybe } from 'redux-saga/effects';
import authSaga from './authSaga';
import productSaga from './productSaga';
import profileSaga from './profileSaga';
import walletSaga from './walletSaga';
import customerSaga from './customerSaga';
import watchTicketSaga from './ticketDetailsSaga';
import ticketDetailsSaga from './ticketDetailsSaga';



function* rootSaga() {
  yield takeLatest(['FETCH_TICKETS_REQUEST','FETCH_TICKETS_SUCCESS','FETCH_TICKETS_FAILURE','SET_TICKETS'],ticketDetailsSaga);
  yield takeLatest([
    ACTION.SIGNIN,
    ACTION.SIGNUP,
    ACTION.SIGNOUT,
    ACTION.SIGNIN_WITH_GOOGLE,
    ACTION.SIGNIN_WITH_FACEBOOK,
    ACTION.SIGNIN_WITH_GITHUB,
    ACTION.ON_AUTHSTATE_CHANGED,
   ACTION.ON_AUTHSTATE_SUCCESS,
    ACTION.ON_AUTHSTATE_FAIL,
    ACTION.SET_AUTH_PERSISTENCE,
    ACTION.RESET_PASSWORD
  ], authSaga);
  yield takeLatest([
    ACTION.ADD_PRODUCT,
    ACTION.SEARCH_PRODUCT,
    ACTION.REMOVE_PRODUCT,
    ACTION.EDIT_PRODUCT,
    ACTION.GET_PRODUCTS
  ], productSaga);
  yield takeLatest([
    ACTION.UPDATE_EMAIL,
    ACTION.UPDATE_PROFILE
  ], profileSaga);
  
  yield takeLatest([
    'GET_WALLET_BALANCE_REQUEST','GET_WALLET_BALANCE_FAILURE','GET_WALLET_BALANCE_SUCCESS'
  ], walletSaga);
  yield takeEvery([
    'GET_CUSTOMER_REQUEST','GET_CUSTOMER_SUCCESS','GET_CUSTOMER_FAILURE','GET_CUSTOMER_ACCOUNTS_REQUEST','GET_CUSTOMER_ACCOUNTS_SUCCESS','GET_CUSTOMER_ACCOUNTS_FAILURE'
  ], customerSaga);

 
}

export default rootSaga;
