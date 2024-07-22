import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { RegistrationProvider } from './assets/components/RegistrationContext';
import LoginPage from './assets/components/LoginPage.js';
import RegisterPage from "./assets/components/RegisterPage.js";
import SuccessRegistration from "./assets/components/SuccessRegistration.js";
import HomePage from "./assets/components/HomePage.js";
import SearchContainer from './assets/components/SearchContainer.jsx';
import axios from 'axios';
import Login from './assets/authorization/Login.jsx';
import Signup from './assets/authorization/Signup.jsx';
import Display from "./Display.js";
import Calculator from "./Calculator.js";
import FirebaseRegForm from "./FirebaseRegForm.js";
import ReactReduxAPP from "./ReactRedux1/ReactReduxAPP.js";
import OpenApiTasksApp from "./assets/OpenApiTasks/OpenApiTasksApp.js";

export default function App() {
  return (
    <OpenApiTasksApp />
  )
}










{/* <Router>
<RegistrationProvider>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/successRegistration" element={<SuccessRegistration />} />
    <Route path="/forgot-password" element={<SearchContainer />} />
  </Routes>
</RegistrationProvider>
</Router> */}