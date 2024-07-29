import {
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    SET_PAGE,
    SET_ROWS_PER_PAGE,
    SET_SEARCH_TERM,
    SET_SORT_ORDER,
    SET_SORT_BY,
    FETCH_TICKETS_REQUEST,
    SET_TICKETS,
  } from '../actions/ticketDetailsActions';
  
  const initialState = {
    data: [],
    total: 0,
    loading: false,
    error: null,
    page: 0,
    rowsPerPage: 10,
    searchTerm: '',
    sortOrder: 'asc',
    sortBy: 'id',
  };
  
  const ticketDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TICKETS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_TICKETS_SUCCESS:
        // Reset data if on the first page or combine with existing data
        return {
          ...state,
          loading: false,
          data: action.payload.page === 0 ? action.payload.data : [...state.data, ...action.payload.data],
          total: action.payload.total,
        };
      case FETCH_TICKETS_FAILURE:
        return { ...state, loading: false, error: action.payload.error };
      case SET_PAGE:
        return { ...state, page: action.payload.page };
      case SET_ROWS_PER_PAGE:
        return { ...state, rowsPerPage: action.payload, page: 0 }; // Reset page to 0 on rows per page change
      case SET_TICKETS:
        return { ...state, data: action.payload };
      case SET_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      case SET_SORT_ORDER:
        return { ...state, sortOrder: action.payload };
      case SET_SORT_BY:
        return { ...state, sortBy: action.payload };
      default:
        return state;
    }
  };
  
  export default ticketDetailsReducer;
  