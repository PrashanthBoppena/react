// walletsaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {GET_WALLET_BALANCE_REQUEST, GET_WALLET_BALANCE_SUCCESS, GET_WALLET_BALANCE_FAILURE ,getWalletBalanceFailure, getWalletBalanceSuccess ,setWalletBalance}  from '@/redux/actions/walletActions';
import {getWalletBalance} from '@/services/apis/walletService';
function* walletSaga({ type, payload }) 
{
switch (type) {
    case GET_WALLET_BALANCE_REQUEST:
    try {
     // const { customerID, tenantID, authToken } = action.payload;
      const response = yield call(getWalletBalance, payload.customerID, payload.tenantID, payload.authToken);
      yield put(getWalletBalanceSuccess(response.result[0])); // Assuming you want to pass specific data to reducer
    } catch (error) {
      yield put(getWalletBalanceFailure(error));
    }
    break;
    case GET_WALLET_BALANCE_FAILURE:
        console.log("error in wallet saga");
        yield put(setWalletBalance(payload));
        break;
    case GET_WALLET_BALANCE_SUCCESS:
        console.log("success in wallet saga");
        yield put(setWalletBalance(payload));
        break;
    default: {
        throw new Error('Unexpected wallet Action saga Type.');
      }
  }
}

  export default walletSaga;