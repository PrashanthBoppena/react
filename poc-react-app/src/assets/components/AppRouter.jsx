import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from'./Layout.jsx';
import Home from'./Home.jsx';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import AddressInfo from "./AddressInfo.jsx";
import MyServices from "./MyServicess.jsx";



 function AppRouter() {
  return (
    <Router>
      <div>
        {<Layout/>}
        <Container style={{ paddingTop: 80, paddingBottom: 80 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/user/profile" element={<ProfilePage />} />
            <Route path="/user/address-info" element={<AddressInfo />} />
            <Route path="/user/services" element={<MyServices />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
 }
export default AppRouter;
