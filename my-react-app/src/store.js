// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";
// import countReducer from "./ReactRedux1/reducers";


// const middleware = [thunk]
// const store = createStore(
//     countReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./ReactRedux1/reducers"; // Adjust the path as necessary
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: countReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
