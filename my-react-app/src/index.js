import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LibraryManagement from './assets/components/LibraryManagement.js';
import SearchContainer from './assets/components/SearchContainer.jsx';
import WikiSearch from './assets/components/WikiSearch.js';
import ReactMemoApp from './assets/ReactMemoExample/index.js';
import Login from './assets/authorization/Login.jsx';
import UseEffectExample from './assets/components/UseEffectExample.jsx';
import UseReducerExapmle from './assets/components/UseReducerExample.jsx';
import UseReducerExapmle2 from './assets/components/UseReducerExample2.jsx';
import UseCallbackExample from './assets/components/useCallbackExample/index.js';
import UseMemoExampe from './assets/components/useMemoExample/index.js';
import ReactReduxAPP from './ReactRedux1/ReactReduxAPP.js';
import { Provider } from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <ReactReduxAPP />
//         </Provider>
//     </React.StrictMode>
// )
root.render(
    <GoogleOAuthProvider clientId="1453990155-dcb8vc6lfmcmmjqto5v5t4u24g01k1j5.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);

//root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
