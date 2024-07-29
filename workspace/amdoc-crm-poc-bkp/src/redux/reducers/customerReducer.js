// src/redux/reducers/customerReducer.js
import {
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    SET_CUSTOMER_PROFILE
  } from '../actions/customerActions';
  
  const initialState = {
    customer: null,
    loading: false,
    error: null
  };
  
  const customerReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CUSTOMER_REQUEST:
        return { ...state, loading: true, error: null };
      case GET_CUSTOMER_SUCCESS:
        return { ...state, loading: false, customer: action.payload };
      case GET_CUSTOMER_FAILURE:
        return { ...state, loading: false, error: action.payload };
        case SET_CUSTOMER_PROFILE:
            return {...state, loading: false, customer: action.payload }  ;

      default:
        return state;
    }
  };
  
  export default customerReducer;
  