// actions.js
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const SET_PAGE = 'SET_PAGE';
export const SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_TICKETS='SET_TICKETS'

export const fetchTicketsRequest = (page, rowsPerPage) => ({
  type: FETCH_TICKETS_REQUEST,
  payload: { page, rowsPerPage },
});

export const fetchTicketsSuccess = (data, total) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { data, total },
});

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: { error },
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setRowsPerPage = (rowsPerPage) => ({
  type: SET_ROWS_PER_PAGE,
  payload: rowsPerPage,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setSortOrder = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const setTickets = (tickets) => ({
    type: SET_TICKETS,
    payload: tickets,
  });
