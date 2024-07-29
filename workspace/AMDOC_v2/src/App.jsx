/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from '@/routers/AppRouter';
import i18next from '@language/i18n';
import { I18nextProvider } from 'react-i18next';
import { Preloader } from '@/components/common'; // Assuming Preloader component is defined
import '../src/styles/App.css';
const App = ({ store, persistor }) => {
  
  return (
    <React.StrictMode>
      
        <Provider store={store}>
          <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppRouter />
          
           
          </PersistGate>
        </Provider>
     
    </React.StrictMode>
  );
};

export default App;
