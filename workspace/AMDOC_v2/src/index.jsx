import { Preloader } from '@/components/common';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import 'react-phone-input-2/lib/style.css';
import { onAuthStateFail, onAuthStateSuccess } from '@/redux/actions/authActions';
import configureStore from '@/redux/store/store';
import '@/styles/style.scss';
import WebFont from 'webfontloader';
import App from './App';
import firebase from '@/services/firebase';

WebFont.load({
  google: {
    families: ['Tajawal']
  },
  active: function() {
    console.log('Font loaded successfully');
  },
  inactive: function() {
    console.log('Font failed to load');
  }
});

const { store, persistor } = configureStore();
const root = document.getElementById('app');

// Render the preloader on initial load
render(<Preloader />, root);
const authToken = localStorage.getItem('authToken');
const user = localStorage.getItem('amd-user-profile');

// if (user) {
//   const parsedUser = JSON.parse(user);
//   alert('User Profile:', JSON.stringify(parsedUser, null, 2));
// } else {
//   alert('No user profile found in localStorage.');
// }

if (user && authToken) {
 // alert("faled to success"+JSON.stringify(user));
  store.dispatch(onAuthStateSuccess(user));
  render(<App store={store} persistor={persistor} />, root);
} else {
  //alert("faled to authorise");
  firebase.auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
     // alert("firebase used called");
      store.dispatch(onAuthStateSuccess(firebaseUser));
    } else {
    //  alert("failed");
      store.dispatch(onAuthStateFail('Failed to authenticate'));
    }
    render(<App store={store} persistor={persistor} />, root);
  });
}


// firebase.auth.onAuthStateChanged((user) => {
 
//   if (user) {
//     store.dispatch(onAuthStateSuccess(user));
//   } else {
//     store.dispatch(onAuthStateFail('Failed to authenticate'));
//   }
//   // then render the app after checking the auth state
//   render(<App store={store} persistor={persistor} />, root);
// });

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
    //  console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      //console.log('SW registration failed: ', registrationError);
    });
  });
}
