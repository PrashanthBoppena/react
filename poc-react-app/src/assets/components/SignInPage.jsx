import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { ValidateUser } from './ApiServices';


function SignInPage() {
  const navigate = useNavigate(); // Access history object from react-router-dom
  const { login } = useContext(AuthContext); // Accessing login function from context
  const [userData, setUserData] = useState(null);
  const [loginID, setLoginID] = useState('swapna66677777@gccccc.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    
    try {
      // Call ValidateUser function to authenticate
      const userData = await ValidateUser(loginID, password);

      setUserData(userData); // Set user data if authentication is successful

      const message    = userData.message;
      const userName   = userData.userMenuItemsRestDTO.userObject.userName;
      const customerID = userData.userMenuItemsRestDTO.userObject.customerID;
      const contact    = userData.userMenuItemsRestDTO.userObject.primaryContact;
      const email      =userData.userMenuItemsRestDTO.userObject.primaryEmail;
      const token      = userData.userMenuItemsRestDTO.userObject.authToken
      login(userName,token,{customerID,contact,email}); // Update context with username (customerID) and token

      navigate('/home'); 
    } catch (error) {
      setError(error.message); // Handle authentication errors
    }
    
  };

  return (
    <Container maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={loginID}
                  onChange={(e) => setLoginID(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Sign In
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="error">
                    {error}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignInPage;
