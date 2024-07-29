// sagas/ticketSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  setTickets,
} from '../actions/ticketDetailsActions';
import { fetchTickets } from '@/services/apis/customerAccountsService';

function* ticketDetailsSaga(action) {
  const { type, payload } = action;
  //alert("====>"+type);
  switch (type) {
   
    
    case FETCH_TICKETS_REQUEST:
      try {
       
        const { page, rowsPerPage } = payload.page;
        const response = yield call(fetchTickets, page, rowsPerPage);
        yield put(fetchTicketsSuccess(response, response.total));
       
      } catch (error) {
        
        yield put(fetchTicketsFailure(error));
      }
      break;
    case FETCH_TICKETS_FAILURE:
     
      console.log('Error in ticket saga');
      yield put(setTickets([])); // Set empty array or handle error state
      break;
    case FETCH_TICKETS_SUCCESS:
    
      console.log('Success in ticket saga');
      yield put(setTickets(payload.data));
      break;
    default:
      throw new Error('Unexpected ticket action type.');
  }
}
export default ticketDetailsSaga;

