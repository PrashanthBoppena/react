import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import logo from '../icons/logo.jpg';
import SignInPage from './SignInPage'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const layoutStyle = {
  backgroundImage: `url('/backgroundTheme.jpg')`, // Adjust the path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures full height of the viewport
  display: 'flex',
  flexDirection: 'column',
};
function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { username, token, userData, login, logout } = useContext(AuthContext);

  const handleSignIn = () => {
    // Perform sign-in logic (for demo, just toggle)

    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    // Perform sign-out logic
    setIsLoggedIn(false);
    logout();

  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </Link>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {username && (
            <>
              <Button color="inherit" component={Link} to="/user/profile">Profile</Button>
              <Button color="inherit" component={Link} to="/user/address-info">AddressInfo</Button>
              <Button color="inherit" component={Link} to="/user/services">MyServices</Button>
            </>
          )
          }
        </Typography>

        {username ? (
          <>

            <Button color="inherit" component={Link} to="/user/profile">{username}</Button>
            <Button color="inherit" component={Link} to="/" onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/signin" onClick={handleSignIn}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}






export default Layout;
